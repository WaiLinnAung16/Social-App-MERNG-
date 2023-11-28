import { useQuery } from "@apollo/client";
import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { GET_POST } from "../quries";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import LikeButton from "../components/LikeButton";
import { Button } from "../components/ui/button";
import { AuthContext } from "../context/auth";
import moment from "moment";

const Detail = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const { data: post } = useQuery(GET_POST, {
    variables: {
      postId: id,
    },
  });
  // console.log(post)
  if (!post) {
    return <p>Loading...</p>;
  }
  const {
    username,
    body,
    createdAt,
    likeCount,
    comments,
    commentCount,
  } = post.getPost;

  console.log(comments);
  return (
    <div className="flex flex-col items-center gap-2">
      <Card className=" w-[60%]">
        <CardHeader>
          <CardTitle>{username}</CardTitle>
          <CardDescription>{moment(createdAt).fromNow()}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>{body}</p>
        </CardContent>
        <CardFooter className="flex  gap-3 w-full">
          <Button>{likeCount} Like</Button>
          <Button>{commentCount} Comment</Button>
        </CardFooter>
      </Card>
      {comments?.map((cmt) => {
        return (
          <Card key={cmt.id} className="w-[60%]">
            <CardHeader>
              <CardTitle className="text-lg">{cmt.username}</CardTitle>
              <CardDescription>
                {moment(cmt.createdAt).fromNow()}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>{cmt.body}</p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default Detail;
