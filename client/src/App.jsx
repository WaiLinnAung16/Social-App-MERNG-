import React from "react";
import Path from "./routes/Path";
import Navbar from "./components/Navbar";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div className="max-w-[1300px] mx-auto px-5 my-5">
        <Navbar />
        <Path />
      </div>
    </ApolloProvider>
  );
};

export default App;
