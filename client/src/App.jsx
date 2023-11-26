import React from "react";
import Path from "./routes/Path";
import Navbar from "./components/Navbar";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { ThemeProvider } from "./components/Theme-provider";
import { Toaster } from "./components/ui/toaster";
import { AuthProvider } from "./context/auth";

const client = new ApolloClient({
  uri: "http://localhost:4000",
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
