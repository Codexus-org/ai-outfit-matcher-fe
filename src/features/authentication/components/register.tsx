import { useState } from 'react';
import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';
import { AuthLayout } from './auth.layout';
import { AtSign, EyeOffIcon, SquareUserRound } from 'lucide-react';
import { useMutation } from '@tanstack/react-query';
import { registerUser } from '../services/register';
import { GoogleIcon } from '../../../components/ui/googleIcon';
export const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isRegister, setIsRegister] = useState(false);

    const {
        mutate: handleSubmitRegister,
        isPending,
        isError,
        error = [],
    } = useMutation({
        mutationKey: ['register'],
        mutationFn: () => registerUser({ firstName, lastName, username, email, password }),
        onSuccess: () => setIsRegister(true),
        onError: () => setIsRegister(false),
    });

    return (
        <AuthLayout>
            <div className="w-[400px] space-y-6">
                <section className="space-y-2">
                    <h3 className="text-center">Register</h3>
                    <p className="text-center">Please create an account to continue</p>
                </section>
                <section className="space-y-3">
                    <section className="flex gap-3">
                        <Input placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} />
                        <Input placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} />
                    </section>
                    <div className="space-y-2">
                        <Input withIcon icon={<SquareUserRound size={16} />} placeholder="Username" onChange={(e) => setUserName(e.target.value)} />
                        <Input withIcon icon={<AtSign size={16} />} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                        <Input withIcon icon={<EyeOffIcon size={16} />} placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
                        <Button isFull disabled={isPending} onClick={() => handleSubmitRegister()}>
                            Register
                        </Button>
                        {isRegister && <div className="text-center text-sm font-medium text-green-600">Register success, go to login</div>}
                        {isError && <div className="text-center text-sm font-medium text-rose-600">
                          {Array.isArray(error) ? (
                              error.map((err, index) => (
                                // @ts-expect-error ts(2322)
                                <div key={index}>{err.message}</div>
                              ))
                          ) : (
                              <div>{error?.message}</div>
                          )}
                        </div>}
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
                    <Button isFull variant="outline" startContent={<GoogleIcon />} onClick={() => handleSubmitRegister()}>
                        Register with Google
                    </Button>
                </div>
                <div className="text-center">
                    Already have an account? <a href="/login" className='text-blue-500'>Login</a>
                </div>
            </div>
        </AuthLayout>
    );
};
