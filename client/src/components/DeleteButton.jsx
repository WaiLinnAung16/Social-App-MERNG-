import React from "react";
import { Button, buttonVariants } from "./ui/button";
import { LucideTrash2 } from "lucide-react";
import { useMutation } from "@apollo/client";
import { DELETE_POST, GET_POSTS } from "../quries";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";

const DeleteButton = ({ post: id }) => {
  const [deletePost] = useMutation(DELETE_POST, {
    variables: {
      postId: id,
    },
    refetchQueries: [GET_POSTS],
  });
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          className={`${buttonVariants({ variant: "destructive" })} ml-auto`}
        >
          <LucideTrash2 className="h-4" />
        </Button>
        {/* <Button variant="outline">Show Dialog</Button> */}
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            post.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button
              onClick={deletePost}
              className={buttonVariants({ variant: "destructive" })}
            >
              Delete
            </Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteButton;
