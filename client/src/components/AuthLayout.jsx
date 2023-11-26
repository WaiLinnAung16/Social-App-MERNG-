import React from "react";
import { Navigate } from "react-router-dom";

const AuthLayout = ({ children }) => {
  const token = localStorage.getItem("jwtToken");
  if (token) {
    return <Navigate to={"/"} />;
  }
  return <div className="py-10">{children}</div>;
};

export default AuthLayout;
