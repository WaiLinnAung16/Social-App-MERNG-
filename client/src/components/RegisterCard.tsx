import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
const RegisterCard = () => {
  return (
    <Card className="max-w-[500px] mx-auto">
      <CardHeader>
        <CardTitle>Register 📝</CardTitle>
        <CardDescription>Enter your information to register</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        {/* Email */}
        <div>
          <label htmlFor="username">Name</label>
          <Input
            name="username"
            id="username"
            type="text"
            placeholder="Jhon Doe"
          />
        </div>
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
        {/* Password */}
        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <Input
            name="confirmPassword"
            id="confirmPassword"
            type="password"
            placeholder="*******"
          />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-3">
        <Button className="w-full">Register</Button>
        <p className="text-sm">
          Already have an account?{" "}
          <Link to={'/login'} className=" cursor-pointer underline text-slate-900 hover:text-slate-500 dark:text-slate-100 dark:hover:text-slate-300">
            Login now
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
};

export default RegisterCard;
