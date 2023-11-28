import React, { useContext } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import moment from "moment/moment";
import { Button, buttonVariants } from "./ui/button";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth";
import { LucideDelete, LucideTrash, LucideTrash2 } from "lucide-react";
import LikeButton from "./LikeButton";
import DeleteButton from "./DeleteButton";
const PostCard = ({
  post: {
    id,
    username,
    body,
    createdAt,
    likeCount,
    commentCount,
    comments,
    likes,
  },
}) => {
  const nav = useNavigate();
  const { user } = useContext(AuthContext);
  return (
    <motion.div layout className="col-span-12 md:col-span-6 lg:col-span-4">
      <Card>
        <CardHeader>
          <CardTitle>{username}</CardTitle>
          <CardDescription>{moment(createdAt).fromNow()}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>{body}</p>
        </CardContent>
        <CardFooter className="flex  gap-3 w-full">
          <LikeButton post={{id,likeCount,likes}} user={user}/>
          <Button onClick={() => nav(`/posts/${id}`)}>
            {commentCount} Comment
          </Button>
          {user && user.username === username && (
            <DeleteButton post={id}/>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default PostCard;
