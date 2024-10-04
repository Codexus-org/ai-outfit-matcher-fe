import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";
import { AuthLayout } from "./auth.layout";
import { AtSign, Lock } from "lucide-react";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { loginUser } from "../services/login";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {
    mutate: handleSubmitLogin,
    isPending,
    isError,
    error,
  } = useMutation({
    mutationKey: ["login"],
    mutationFn: () => loginUser({ email, password }),
    onSuccess: () => navigate("/"),
  });

  return (
    <AuthLayout>
      <div className="w-[300px] space-y-4">
        <section>
          <h3>Login</h3>
          <p>welcome back!</p>
        </section>
        <section className="space-y-3">
          <Input withIcon icon={<AtSign size={16} />} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
          <Input withIcon icon={<Lock size={16} />} placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
          <Button disabled={isPending} onClick={() => handleSubmitLogin()} className="flex w-full justify-center">
            Login
          </Button>
          <Button isFull variant="outline">
            Continue with Google
          </Button>
        </section>
        {isError && <div className="text-center text-sm font-medium text-red-500">{error.message}</div>}
      </div>
    </AuthLayout>
  );
};
