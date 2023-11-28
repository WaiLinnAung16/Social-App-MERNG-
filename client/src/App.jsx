import React from "react";
import Path from "./routes/Path";
import Navbar from "./components/Navbar";
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { ThemeProvider } from "./components/Theme-provider";
import { Toaster } from "./components/ui/toaster";
import { AuthProvider } from "./context/auth";

const httpLink = new HttpLink({
  uri: "http://localhost:4000",
});

const authLink = setContext(() => {
  const token = localStorage.getItem("jwtToken");
  return {
    headers: {
      authorization: token ? `${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <AuthProvider>
          <div className="max-w-[1300px] mx-auto px-5 my-5">
            <Navbar />
            <Path />
            <Toaster />
          </div>
        </AuthProvider>
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default App;
