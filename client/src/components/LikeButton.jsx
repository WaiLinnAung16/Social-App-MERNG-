import React, { useContext, useEffect, useState } from "react";
import { Button, buttonVariants } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LIKE_POST } from "../quries";
import { toast } from "./ui/use-toast";
import { AuthContext } from "../context/auth";
import { ToastAction } from "./ui/toast";

const LikeButton = ({ post: { id, likes, likeCount }, user }) => {
  const [liked, setLiked] = useState(false);
  const {logout} = useContext(AuthContext);

  const [likePost] = useMutation(LIKE_POST, {
    variables: { postId: id },
    onError: (error) => {
      console.log(error.message);
      toast({
        variant: "destructive",
        description: "Your session has expired. Please log in again.",
        action: <ToastAction altText="Login" onClick={()=>logout()}>Login</ToastAction>,
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
      <Button
        onClick={(e) => {
          e.stopPropagation();
          likePost()
        }}
      >
        {likeCount} Like
      </Button>
    ) : (
      <Button
        onClick={(e) => {
          e.stopPropagation();
          likePost()
        }}
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
