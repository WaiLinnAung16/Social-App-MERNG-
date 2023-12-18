import { useMutation, useQuery } from "@apollo/client";
import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { CREATE_COMMENT, GET_POST } from "../quries";
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
import DeleteButton from "../components/DeleteButton";
import { Input } from "../components/ui/input";
import CommentCreateForm from "../components/CommentCreateForm";

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
    id: postId,
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
      <div className="w-[60%] space-y-3">
        <Card className="">
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
        <Card>
          <h4 className="py-3 px-6">Post a comment</h4>
          <CardContent>
            <CommentCreateForm id={id} />
          </CardContent>
        </Card>
        {comments?.map((cmt) => {
          return (
            <Card key={cmt.id}>
              <div className="flex items-center pr-5">
                <CardHeader>
                  <CardTitle className="text-lg">{cmt.username}</CardTitle>
                  <CardDescription>
                    {moment(cmt.createdAt).fromNow()}
                  </CardDescription>
                </CardHeader>
                {user && user.username === cmt.username && (
                  <DeleteButton postId={id} commentId={cmt.id} />
                )}
              </div>
              <CardContent>
                <p>{cmt.body}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Detail;
