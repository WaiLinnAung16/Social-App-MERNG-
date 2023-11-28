import React, { useContext, useEffect, useState } from "react";
import { Button, buttonVariants } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LIKE_POST } from "../quries";
import { toast } from "./ui/use-toast";

const LikeButton = ({ post: { id, likes, likeCount }, user }) => {
  const [liked, setLiked] = useState(false);

  const [likePost] = useMutation(LIKE_POST, {
    variables: { postId: id },
    onError: (error) => {
      console.log(error.message);
      toast({
        variant: "destructive",
        description: "Your personal token is expired!",
      });
    },
  });
  const nav = useNavigate();

  useEffect(() => {
    if (user && likes?.find((like) => like.username === user.username)) {
      setLiked(true);
    } else setLiked(false);
  }, [likes, user]);

  const likeButton = user ? (
    liked ? (
      <Button onClick={likePost}>{likeCount} Like</Button>
    ) : (
      <Button
        onClick={likePost}
        className={buttonVariants({ variant: "outline" })}
      >
        {likeCount} Like
      </Button>
    )
  ) : (
    <Button onClick={nav("/login")}>{likeCount} Like</Button>
  );

  return likeButton;
};

export default LikeButton;
