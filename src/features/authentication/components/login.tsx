import { Input } from '../../../components/ui/input';
import { Button } from '../../../components/ui/button';
import { AuthLayout } from './auth.layout';
import { AtSign, EyeOffIcon } from 'lucide-react';
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { loginUser } from '../services/login';
import { useNavigate } from 'react-router-dom';
import { GoogleIcon } from '../../../components/ui/googleIcon';

export const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {
        mutate: handleSubmitLogin,
        isPending,
        isError,
        error,
    } = useMutation({
        mutationKey: ['login'],
        mutationFn: () => loginUser({ email, password }),
        onSuccess: () => navigate('/'),
    });

    return (
        <AuthLayout>
            <div className="w-[300px] space-y-9">
                <section className="space-y-2">
                    <h3 className="text-center">Login</h3>
                    <p className="text-center">welcome back!</p>
                </section>
                <section className="space-y-3">
                    <Input withIcon icon={<AtSign size={16} />} placeholder="Email" type='email' required onChange={(e) => setEmail(e.target.value)} />
                    <Input withIcon icon={<EyeOffIcon size={16} />} placeholder="Password" type="password" required onChange={(e) => setPassword(e.target.value)} />
                    <Button disabled={isPending} onClick={() => handleSubmitLogin()} className="flex w-full justify-center">
                        Login
                    </Button>
                    {isError && <div className="text-center text-sm font-medium text-red-500">{error.message}</div>}

                    {/* separator */}
                    <div className="flex flex-row gap-3 py-4">
                        <div className="flex flex-col w-full justify-center">
                            <div className="border rounded-xl border-gray-300 w-full"></div>
                        </div>
                        <p className="text-sm text-gray-500 text-nowrap">Or Login With</p>
                        <div className="flex flex-col w-full justify-center">
                            <div className="border rounded-xl border-gray-300 w-full"></div>
                        </div>
                    </div>

                    {/* button with google */}
                    <form action="http://localhost:8000/outfitmatcher/api/v1/continue-with-google" method='post'>
                    <Button isFull variant="outline" startContent={<GoogleIcon />}>
                        Continue with Google
                    </Button>
                    </form>
                </section>
                <p className="text-center">Don&apos;t have an account? <a className="text-blue-500 hover:underline" href="/register">Register</a></p>
            </div>
        </AuthLayout>
    );
};
