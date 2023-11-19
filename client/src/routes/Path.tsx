import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import { Route, Routes } from "react-router-dom";

const Path = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default Path;
