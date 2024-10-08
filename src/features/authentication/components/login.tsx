import { Input } from '../../../components/ui/input';
import { Button } from '../../../components/ui/button';
import { AuthLayout } from './auth.layout';
import { AtSign, EyeIcon, EyeOffIcon } from 'lucide-react';
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { loginUser } from '../services/login';
import { useNavigate } from 'react-router-dom';
import { GoogleIcon } from '../../../components/ui/googleIcon';
import Footer from '../../../components/share/footer';

export const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

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
                    <Input withIcon icon={<AtSign size={16} />} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                    <div className="relative">
                        <Input withIcon icon={<EyeOffIcon size={16} />} placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
                        <Button type="button" onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <EyeIcon size={16} /> : <EyeOffIcon size={16} />}
                        </Button>
                    </div>
                    <Button disabled={isPending} onClick={() => handleSubmitLogin()} className="flex w-full justify-center">
                        Login
                    </Button>

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
                    <Button isFull variant="outline" startContent={<GoogleIcon />}>
                        Continue with Google
                    </Button>
                </section>
                {isError && <div className="text-center text-sm font-medium text-red-500">{error.message}</div>}
                <div className="text-center">
                    Don't have an account?{' '}
                    <a href="/register" className=" hover:underline">
                        Register
                    </a>
                </div>
                <Footer />
            </div>
        </AuthLayout>
    );
};
