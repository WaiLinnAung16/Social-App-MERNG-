import React from "react";
import { Button, buttonVariants } from "./ui/button";
import { LucideTrash2 } from "lucide-react";
import { useMutation } from "@apollo/client";
import { DELETE_COMMENT, DELETE_POST, GET_POSTS } from "../quries";
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

const DeleteButton = ({ postId, commentId }) => {
  const mutation = commentId ? DELETE_COMMENT : DELETE_POST;
  const [deletePostOrComment] = useMutation(mutation, {
    variables: {
      postId: postId,
      commentId: commentId,
    },
    refetchQueries: [GET_POSTS],
  });
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          onClick={(e) => {
            e.stopPropagation();
          }}
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
            {commentId ? "comment" : "post"}.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button
              onClick={(e) => {
                e.stopPropagation();
                deletePostOrComment()
              }}
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
