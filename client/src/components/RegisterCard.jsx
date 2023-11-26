import { useContext, useState } from "react";
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

import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { REGISTER } from "../quries";
import { useToast } from "./ui/use-toast";
import { Loader2 } from "lucide-react";
import { useForm } from "../Hooks/useForm";
import { AuthContext } from "../context/auth";
const RegisterCard = () => {
  const context = useContext(AuthContext)

  const nav = useNavigate();
  const { toast } = useToast();
  const [errors, setErrors] = useState();

  const { handleInputChange, handleSubmit, formData } = useForm(registerUser, {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [register, {  loading }] = useMutation(REGISTER, {
    update(cache, {data:{register:userData}}) {
      console.log(cache);
      context.login(userData)
      nav("/");
    },
    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.code);
    },
    variables: {
      username: formData.username,
      email: formData.email,
      password: formData.password,
      confirmPassword: formData.confirmPassword,
    },
  });

  function registerUser() {
    register();
  }

  if (errors === "USERNAME_TAKEN") {
    toast({
      variant: "destructive",
      description: "Username has been taken!",
    });
    setErrors("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <Card className="max-w-[500px] mx-auto">
        <CardHeader>
          <CardTitle>Register 📝</CardTitle>
          <CardDescription>Enter your information to register</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {/* Username */}
          <div>
            <label htmlFor="username">Name</label>
            <Input
              name="username"
              id="username"
              type="text"
              onChange={handleInputChange}
              placeholder="Jhon Doe"
            />
            {errors?.username ? (
              <span className="text-red-500 text-sm ml-2">
                {errors.username}
              </span>
            ) : (
              ""
            )}
          </div>
          {/* Email */}
          <div>
            <label htmlFor="email">Email</label>
            <Input
              name="email"
              id="email"
              type="text"
              onChange={handleInputChange}
              placeholder="example@gmail.com"
            />
            {errors?.email ? (
              <span className="text-red-500 text-sm ml-2">{errors.email}</span>
            ) : (
              ""
            )}
          </div>
          {/* Password */}
          <div>
            <label htmlFor="password">Password</label>
            <Input
              name="password"
              id="password"
              type="password"
              onChange={handleInputChange}
              placeholder="*******"
            />
            {errors?.password ? (
              <span className="text-red-500 text-sm ml-2">
                {errors.password}
              </span>
            ) : (
              ""
            )}
          </div>
          {/* Password */}
          <div>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <Input
              name="confirmPassword"
              id="confirmPassword"
              type="password"
              onChange={handleInputChange}
              placeholder="*******"
            />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-3">
          <Button disabled={loading} className="w-full">
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Register
          </Button>
          <p className="text-sm">
            Already have an account?{" "}
            <Link
              to={"/login"}
              className=" cursor-pointer underline text-slate-900 hover:text-slate-500 dark:text-slate-100 dark:hover:text-slate-300"
            >
              Login now
            </Link>
          </p>
        </CardFooter>
      </Card>
    </form>
  );
};

export default RegisterCard;
