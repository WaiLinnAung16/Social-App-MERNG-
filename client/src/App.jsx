import React from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Path from "./routes/Path";
import Header from "./components/Header";

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Path />
      <Header/>
    </ApolloProvider>
  );
};

export default App;
