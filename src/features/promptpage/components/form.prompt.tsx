import { Textarea } from '../../../components/ui/textarea';
import { Button } from '../../../components/ui/button';
import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { PromptSubmit } from '../services/prompt';
import { DataResponse } from '../types/entity';
// import { handlePromptSubmit } from '../services/prompt';

interface IFormPromptProps {
    getData: (data: DataResponse) => void;
}

export default function FormPrompt({ getData }: IFormPromptProps) {
    const [prompt, setPrompt] = useState('');

    const {
        mutate: handlePrompt,
        isError,
        isPending,
    } = useMutation({
        mutationKey: ['prompt'],
        mutationFn: () => PromptSubmit(),
        onSuccess: (data) => getData(data?.items[0]),
    });

    return (
        <div className="grid grid-cols-2 gap-4 mt-3">
            <div className="space-y-2">
                <h3 className="text-xl">Input Prompt</h3>
                <Textarea placeholder="Prompt" value={prompt} rows={5} onChange={(e) => setPrompt(e.target.value)} />
                <Button disabled={isPending} onClick={() => handlePrompt()}>
                    Submit
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
