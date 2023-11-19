import { gql, useQuery } from "@apollo/client";
import React from "react";

const GET_POSTS = gql`
  {
    getPosts {
      id
      username
      body
      createdAt
      comments {
        id
        username
        body
        createdAt
      }
    }
  }
`;

const Home = () => {
  const { data } = useQuery(GET_POSTS);
  console.log(data);
  return <div>Home</div>;
};

export default Home;
