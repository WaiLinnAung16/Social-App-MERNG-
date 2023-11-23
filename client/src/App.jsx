import React from "react";
import Path from "./routes/Path";
import Navbar from "./components/Navbar";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { ThemeProvider } from "./components/Theme-provider";
import { Toaster } from "./components/ui/toaster";

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="max-w-[1300px] mx-auto px-5 my-5">
          <Navbar />
          <Path />
          <Toaster />
        </div>
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default App;
