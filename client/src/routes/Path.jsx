import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import RouteGuard from "./RouteGuard";
import Detail from "../pages/Detail";

const Path = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <RouteGuard>
            <Home />
          </RouteGuard>
        }
      ></Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/posts/:id" element={<Detail/>}/>
    </Routes>
  );
};

export default Path;
