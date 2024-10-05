import { useState } from "react";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { AuthLayout } from "./auth.layout";
import { AtSign, EyeOffIcon, SquareUserRound, Verified } from "lucide-react";
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
      <div className="w-[300px] space-y-9">
        <section className="space-y-2">
          <h3 className="text-center">Register</h3>
          <p className="text-center">Please create an account to continue</p>
        </section>
        <section className="space-y-3">
          <section className="flex gap-3">
            <Input placeholder="First Name" />
            <Input placeholder="Last Name" />
          </section>
          <div className="space-y-2">
            <Input withIcon icon={<SquareUserRound size={16} />} placeholder="Username" onChange={(e) => setUserName(e.target.value)} />
            <Input withIcon icon={<AtSign size={16} />} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <Input withIcon icon={<EyeOffIcon size={16} />} placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
            <Button isFull disabled={isPending} onClick={() => handleSubmitRegister()}>
              Register
            </Button>
            {isError && <div className="text-center text-sm font-medium text-rose-600">{error?.message}</div>}
          </div>
        </section>

        {/* separator */}
        <div className="flex flex-row gap-3">
          <div className="flex flex-col w-full justify-center">
            <div className="border rounded-xl border-gray-300 w-full"></div>
          </div>
          <p className="text-sm text-nowrap">Or with Google</p>
          <div className="flex flex-col w-full justify-center">
            <div className="border rounded-xl border-gray-300 w-full"></div>
          </div>
        </div>

        {/* register with google */}
        <div>
          <Button isFull variant="outline" startContent={<Verified size={16} />} onClick={() => handleSubmitRegister()}>
            Register with Google
          </Button>
          {isError && <div className="text-center text-sm font-medium text-rose-600">{error?.message}</div>}
        </div>
        <div>
          Already have an account? <a href="/login">Login</a>
        </div>
      </div>
    </AuthLayout>
  );
};
