import { useQuery } from "@apollo/client";
import React from "react";
import PostCard from "../components/PostCard";
import { GET_POSTS } from "../quries";

const Home = () => {
  const { data: posts, loading } = useQuery(GET_POSTS);
  console.log(posts);
  return (
    <div className="flex flex-col gap-5 mt-5">
      <h1 className="text-xl font-bold">Recent Posts</h1>
      <div className="grid grid-cols-12 gap-5">
        {loading ? (
          <h1>Loading posts...</h1>
        ) : (
          posts?.getPosts?.map((post) => {
            return <PostCard key={post.id} post={post} />;
          })
        )}
      </div>
    </div>
  );
};

export default Home;
