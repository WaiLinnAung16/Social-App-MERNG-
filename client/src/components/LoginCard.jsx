import { useMutation } from "@apollo/client";
import { useForm } from "../Hooks/useForm";
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
import { LOGIN } from "../quries";
import { useState } from "react";
import { Loader2 } from "lucide-react";

const LoginCard = () => {
  const nav = useNavigate();
  const [errors, setErrors] = useState();

  const { handleInputChange, handleSubmit, formData } = useForm(loginUser, {
    username: "",
    password: "",
  });
  const [login, { loading }] = useMutation(LOGIN, {
    update(cache, result) {
      console.log(result);
      nav("/");
    },
    onError(err) {
      setErrors(err?.graphQLErrors[0]?.extensions?.code);
    },
    variables: {
      username: formData.username,
      password: formData.password,
    },
  });

  function loginUser() {
    login();
  }

  return (
    <form onSubmit={handleSubmit}>
      <Card className="max-w-[500px] mx-auto">
        <CardHeader>
          <CardTitle>Welcome Back👋</CardTitle>
          <CardDescription>
            Please fill your correct information
          </CardDescription>
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
        </CardContent>
        <CardFooter className="flex flex-col gap-3">
          <Button disabled={loading} className="w-full">
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Login
          </Button>
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
    </form>
  );
};

export default LoginCard;
