import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import mongoose from "mongoose";


const typeDefs = `
    type Query{
        sayHi: String!
    }
`;

const resolvers = {
  Query: {
    sayHi: () => "Hello World!",
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

mongoose.connect('mongodb+srv://root:YcEnkIj5BQHS6JC2@bookstore-mern.6fqy9sb.mongodb.net/?retryWrites=true&w=majority');
mongoose.connection.once("open",() => console.log("Database Connected"));

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
