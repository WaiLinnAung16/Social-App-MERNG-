import { NavLink } from "react-router-dom";
import { Separator } from "./ui/separator";
import { ModeToggle } from "./ModeToggle";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center">
      <NavLink to={"/"} className="navbar">
        Home
      </NavLink>
      <div className="flex items-center gap-3">
        <NavLink to={"/login"} className="navbar">
          Login
        </NavLink>
        <Separator className="border-1 h-5"/>
        <NavLink to={"/register"} className="navbar">
          Register
        </NavLink>
        <ModeToggle/>
      </div>
    </nav>
  );
};

export default Navbar;
