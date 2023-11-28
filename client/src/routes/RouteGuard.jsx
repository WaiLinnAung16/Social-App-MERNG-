import React from "react";
import { Navigate } from "react-router-dom";
import { toast } from "../components/ui/use-toast";

const RouteGuard = ({ children }) => {
  const token = localStorage.getItem("jwtToken");

  if (token) {
    return children;
  } else {
    toast({
      variant: "destructive",
      description: "You need to Login first!",
    });
    return <Navigate to={"/login"} />;
  }
};

export default RouteGuard;
