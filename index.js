import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({ path: "../SocialApp/.env.local" });

import typeDefs from "./graphql/typeDefs.js";
import resolvers from "./graphql/resolvers/resolvers.js";

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

mongoose.connect(process.env.MONGODB);
mongoose.connection.once("open", () => console.log("Database Connected"));

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
