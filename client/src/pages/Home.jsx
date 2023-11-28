import { useQuery } from "@apollo/client";
import React from "react";
import PostCard from "../components/PostCard";
import { GET_POSTS } from "../quries";
import CreateForm from "../components/CreateForm";
import { AnimatePresence, motion } from "framer-motion";

const Home = () => {
  const { data: posts, loading } = useQuery(GET_POSTS);
  console.log(posts);
  return (
    <div className="flex flex-col gap-5 mt-5">
      <h1 className="text-xl font-bold">Recent Posts</h1>
      <AnimatePresence>
        <motion.div layout className="grid grid-cols-12 gap-5">
          {/* Create Post Form */}
          <motion.div
            layout
            className="col-span-12 md:col-span-6 lg:col-span-4"
          >
            <CreateForm />
          </motion.div>
          {/* Posts */}
          {loading ? (
            <h1>Loading posts...</h1>
          ) : (
            posts?.getPosts?.map((post) => {
              return <PostCard key={post.id} post={post} />;
            })
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Home;
