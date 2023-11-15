import postResolver from "./posts.js";
import userResolver from "./users.js";
const resolvers = {
  Query: {
    ...postResolver.Query,
  },
  Mutation: {
    ...userResolver.Mutation
  }
};

export default resolvers;
