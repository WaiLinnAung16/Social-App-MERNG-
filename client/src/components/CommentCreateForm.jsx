import React, { useRef, useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useMutation } from "@apollo/client";
import { CREATE_COMMENT } from "../quries";

const CommentCreateForm = ({ id }) => {
    const commentInputRef = useRef();
  const [comment, setComment] = useState("");

  const [createComment] = useMutation(CREATE_COMMENT, {
    update: () => {
      setComment('');
      commentInputRef.current.blur();
    },
    variables: {
      postId: id,
      body: comment,
    },
  });

  const handleSubmitComment = (e) => {
    e.preventDefault();
    createComment();
  };

  return (
    <form onSubmit={handleSubmitComment}>
      <div className="flex w-full items-center space-x-2">
        <Input
          type="text"
          placeholder="Comment..."
          value={comment}
          ref={commentInputRef}
          onChange={(e) => setComment(e.target.value)}
        />
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
};

export default CommentCreateForm;
