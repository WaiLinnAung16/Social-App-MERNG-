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

const GET_POST = gql`
  query ($postId: ID!) {
    getPost(postId: $postId) {
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
      likeCount
      commentCount
    }
  }
`;

const CREATE_POST = gql`
  mutation ($body: String!) {
    createPost(body: $body) {
      id
      username
      body
      createdAt
      likes {
        id
        username
        createdAt
      }
      comments {
        id
        username
        body
        createdAt
      }
      likeCount
      commentCount
    }
  }
`;

const LIKE_POST = gql`
  mutation ($postId: ID!) {
    likePost(postId: $postId) {
      id
      username
      likeCount
      likes {
        username
        id
      }
    }
  }
`;

const DELETE_POST = gql`
  mutation ($postId: ID!) {
    deletePost(postId: $postId)
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
  mutation ($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      id
      username
      email
      token
      createdAt
    }
  }
`;

export {
  GET_POSTS,
  GET_POST,
  CREATE_POST,
  LIKE_POST,
  DELETE_POST,
  REGISTER,
  LOGIN,
};
