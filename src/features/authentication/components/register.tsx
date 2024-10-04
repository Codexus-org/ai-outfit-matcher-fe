import { useState } from "react";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { AuthLayout } from "./auth.layout";
import { AtSign, Lock, SquareUserRound } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { registerUser } from "../services/register";
export const Register = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {
    mutate: handleSubmitRegister,
    isPending,
    isError,
    error,
  } = useMutation({
    mutationKey: ["register"],
    mutationFn: () => registerUser({ userName, email, password }),
  });

  return (
    <AuthLayout>
      <div className="w-[300px] space-y-4">
        <section>
          <h3>Register</h3>
          <p>Please create an account to continue</p>
        </section>
        <section className="space-y-3">
          <section className="flex gap-3">
            <Input placeholder="First Name" />
            <Input placeholder="Last Name" />
          </section>
          <div className="space-y-2">
            <Input withIcon icon={<SquareUserRound size={16} />} placeholder="Username" onChange={(e) => setUserName(e.target.value)} />
            <Input withIcon icon={<AtSign size={16} />} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <Input withIcon icon={<Lock size={16} />} placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
            <Button isFull disabled={isPending} onClick={() => handleSubmitRegister()} className="flex w-full justify-center">
              Register
            </Button>
            {isError && <div className="text-center text-sm font-medium text-rose-600">{error?.message}</div>}
          </div>
        </section>

        <hr />
        <div>
          <Button variant="outline" startContent isFull={true}>
            Register with Google
          </Button>
        </div>
        <div>
          Already have an account? <a href="/login">Login</a>
        </div>
      </div>
    </AuthLayout>
  );
};
