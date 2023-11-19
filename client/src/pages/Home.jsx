
import { useQuery } from "@apollo/client";

const GET_POSTS = gql(/* GraphQL */ `
  query GetPosts {
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
      likes {
        id
        username
        createdAt
      }
    }
  }
`);

const Home = () => {
  const { data } = useQuery(GET_POSTS);
    console.log(data);
  return <div>Home</div>;
};

export default Home;
