import { gql } from "@apollo/client";

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
      likes {
        id
        username
        createdAt
      }
      likeCount
      commentCount
    }
  }
`;

const REGISTER = gql`
  mutation (
    $username: String!
    $email: String!
    $password: String!
    $confirmPassword: String!
  ) {
    register(
      registerInput: {
        username: $username
        email: $email
        password: $password
        confirmPassword: $confirmPassword
      }
    ) {
      id
      username
      email
      createdAt
      token
    }
  }
`;

const LOGIN = gql`
  mutation($username:String!,$password:String!){
    login(username:$username,password:$password){
      id
      username
      email
      token
      createdAt
    }
  }
`

export { GET_POSTS,REGISTER,LOGIN };
