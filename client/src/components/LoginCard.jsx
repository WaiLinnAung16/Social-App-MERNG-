import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

import { Input } from "../components/ui/input";

import { Link } from "react-router-dom";
const LoginCard = () => {
  return (
    <Card className="max-w-[500px] mx-auto">
      <CardHeader>
        <CardTitle>Welcome Back👋</CardTitle>
        <CardDescription>Please fill your correct information</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        {/* Email */}
        <div>
          <label htmlFor="email">Email</label>
          <Input
            name="email"
            id="email"
            type="text"
            placeholder="example@gmail.com"
          />
        </div>
        {/* Password */}
        <div>
          <label htmlFor="password">Password</label>
          <Input
            name="password"
            id="password"
            type="password"
            placeholder="*******"
          />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-3">
        <Button className="w-full">Login</Button>
        <p className="text-sm">
          Don't you have an account?{" "}
          <Link
            to={"/register"}
            className=" cursor-pointer underline text-slate-900 hover:text-slate-500 dark:text-slate-100 dark:hover:text-slate-300"
          >
            Register now
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
};

export default LoginCard;
