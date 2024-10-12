import { Textarea } from '../../../components/ui/textarea';
import { Button } from '../../../components/ui/button';
import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { DataResponse } from '../types/entity';

interface IFormPromptProps {
    getData: (data: DataResponse) => void;
}

export default function FormPrompt({ getData }: IFormPromptProps) {
    const [prompt, setPrompt] = useState('');
    const host = process.env.NODE_ENV === 'production' ? process.env.HOST_PROD : process.env.HOST_DEV; 
    const {
        mutate: handlePrompt,
        isError,
        isPending,
    } = useMutation({
        mutationKey: ['prompt'],
        mutationFn: async () => {
            try {
                const res = await fetch(`http://${host}:8000/outfitmatcher/api/v1/outfit`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    credentials: 'include',
                    body: JSON.stringify({ prompt }),
                });
                const data = res.json();
                return data;
            } catch (error) {
                if (error instanceof Error) {
                    if (error.message == 'Failed to fetch') {
                        throw new Error('Something went wrong');
                    }
                    throw new Error(error.message);
                }
                throw new Error('Something went wrong');
            }
        },
        onSuccess: (data) => getData(data?.data),
    });

    return (
        <div className="grid grid-cols-2 gap-4 mt-3">
            <div className="space-y-2">
                <h3 className="text-xl">Input Prompt</h3>
                <Textarea placeholder="Prompt" value={prompt} rows={5} onChange={(e) => setPrompt(e.target.value)} />
                <Button disabled={isPending} onClick={() => handlePrompt()}>
                    {isPending ? 'Loading...' : 'Submit'}
                </Button>
                {isError && <p className="flex flex-wrap text-red-500">Something went wrong</p>}
            </div>
            <div className="space-y-2">
                <h3 className="text-xl">Example Prompt</h3>
                <p className="text-base font-normal text-slate-500">
                    Generate an image of a men's outfit suitable for going to campus in rainy weather, featuring a long-sleeved, light blue denim button-up shirt, dark blue
                    slim-fit jeans, and navy blue waterproof sneakers
                </p>
            </div>
        </div>
    );
}
