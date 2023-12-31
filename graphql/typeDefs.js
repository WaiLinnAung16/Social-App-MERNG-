const typeDefs = `#graphql
  type Post {
    id: ID!
    username: String!
    body: String!
    comments:[Comment!]!
    likes:[Like]!
    likeCount:Int!
    commentCount: Int!
    createdAt: String!
  }
  type Comment {
    id:ID!
    username: String!
    body: String!
    createdAt: String!
  }
  type Like {
    id:ID!
    username: String!
    createdAt: String
  }
  type User {
    id: ID!
    username: String!
    email: String!
    token: String!
    createdAt: String!
  }
  input RegisterInput {
    username: String!
    password: String!
    confirmPassword: String!
    email: String!
  }
  type Query {
    getPosts: [Post]
    getPost(postId:ID!):Post
  }
  type Mutation {
    register(registerInput: RegisterInput): User!
    login(username:String!,password:String!): User!
    createPost(body:String!):Post!
    deletePost(postId:ID!):String! 
    createComment(postId:ID!,body:String!):Post!
    deleteComment(postId:ID!,commentId:ID!):Post!
    likePost(postId:ID!):Post!
  }
`;

export default typeDefs;
