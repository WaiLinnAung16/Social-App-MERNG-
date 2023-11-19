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
            <Input name="email" id="email" type="text" placeholder="example@gmail.com"/>
        </div>
         {/* Password */}
         <div>
            <label htmlFor="password">Password</label>
            <Input name="password" id="password" type="password" placeholder="*******"/>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button>Log in</Button>
        <Button variant='outline'>Create New Account</Button>
      </CardFooter>
    </Card>
  );
};

export default LoginCard;
