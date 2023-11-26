import { NavLink } from "react-router-dom";
import { Separator } from "../components/ui/separator";
import { ModeToggle } from "./ModeToggle";
import { useContext } from "react";
import { AuthContext } from "../context/auth";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  const menuBar = user ? (
    <>
      <NavLink to={"/"} className="navbar">
        {user.username}
      </NavLink>
      <div className="flex items-center gap-3">
        <NavLink onClick={logout} to={"/login"} className="navbar">
          Logout
        </NavLink>
      </div>
    </>
  ) : (
    <>
      <NavLink to={"/"} className="navbar">
        Home
      </NavLink>
      <div className="flex items-center gap-3">
        <NavLink to={"/login"} className="navbar">
          Login
        </NavLink>
        <Separator orientation="vertical" className="border-1 h-5" />
        <NavLink to={"/register"} className="navbar">
          Register
        </NavLink>{" "}
      </div>
    </>
  );

  return (
    <nav className="flex justify-between items-center">
      {menuBar}
      {/* <ModeToggle/> */}
    </nav>
  );
};

export default Navbar;
