import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";
import { AuthLayout } from "./auth.layout";

export const Login = () => {
  return (
    <AuthLayout>
      <div className="w-[300px] space-y-4">
        <section>
          <h3>Login</h3>
          <p>welcome back!</p>
        </section>
        <section className="space-y-2">
          <Input placeholder="Email" />
          <Input placeholder="Password" type="password" />
          <Button className="flex w-full justify-center">Login</Button>
        </section>
      </div>
    </AuthLayout>
  );
};
