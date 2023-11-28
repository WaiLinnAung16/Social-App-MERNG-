import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";
import { useForm } from "../Hooks/useForm";
import { useMutation } from "@apollo/client";
import { CREATE_POST, GET_POSTS } from "../quries";
import { Loader2 } from "lucide-react";

const CreateForm = () => {
  const { handleInputChange, handleSubmit, formData } = useForm(createPost, {
    body: "",
  });

  const [create, { loading, error }] = useMutation(CREATE_POST, {
    variables: formData,
    update: (_, result) => {
      console.log(result);
      formData.body = "";
    },
    refetchQueries: [GET_POSTS],
  });

  function createPost() {
    create();
  }
  console.log(error?.graphQLErrors[0]?.message);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Card>
          <CardHeader>
            <h1 className="text-xl font-bold">Create New Post</h1>
          </CardHeader>
          <CardContent className="space-y-3">
            <Input
              name="body"
              id="body"
              type="text"
              onChange={handleInputChange}
              value={formData.body}
              placeholder="What's on your mind"
              className={`${error ? 'border-red-500' : ''}`}
            />
            {error ? (
              <span className="text-red-500 text-sm ml-2">
                {error?.graphQLErrors[0]?.message}
              </span>
            ) : (
              ""
            )}
            <Button disabled={loading} className="w-full">
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Create
            </Button>
          </CardContent>
        </Card>
      </form>
    </div>
  );
};

export default CreateForm;
