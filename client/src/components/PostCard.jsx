import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import moment from "moment/moment";
import { Button } from "./ui/button";

const PostCard = ({
  post: { username, body, createdAt, likeCount, commentCount, comments, likes },
}) => {
  return (
    <div className="col-span-4">
      <Card>
        <CardHeader>
          <CardTitle>{username}</CardTitle>
          <CardDescription>{moment(createdAt).fromNow()}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>{body}</p>
        </CardContent>
        <CardFooter className='space-x-2'>
          <Button >{likeCount} Like</Button>
          <Button >{commentCount} Comment</Button>
          
        </CardFooter>
      </Card>
    </div>
  );
};

export default PostCard;
