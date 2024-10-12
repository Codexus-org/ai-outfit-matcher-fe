import { Button } from '../../../components/ui/button';
import { BookmarkPlus } from 'lucide-react';
import { IDataImage } from '../types/entity';
import { useMutation } from '@tanstack/react-query';

interface CardProps {
    dataImage: IDataImage | null;
}

export default function Card({ dataImage }: CardProps) {
    const { imageOutfit, _id } = dataImage || {};

    const { mutate: handleAddCollection, isSuccess } = useMutation({
        mutationKey: ['addCollection'],
        mutationFn: async () => {
            try {
                const user = localStorage.getItem('user')
                const userJson = JSON.parse(user as string);
                
                const res = await fetch('http://108.136.163.215:8000/outfitmatcher/api/v1/outfit/save', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    credentials: 'include',
                    body: JSON.stringify({ outfitId: _id, userId: userJson.id, username: userJson.username }),
                });

                const data = await res.json();
                return data;
            } catch (err) {
                if (err instanceof Error) {
                    if (err.message == 'Failed to fetch') {
                        throw new Error('Something went wrong');
                    }
                    throw new Error(err.message);
                } else {
                    throw new Error('Something went wrong');
                }
            }
        },
    });

    return (
        <section className="">
            <div className="h-full overflow-hidden rounded-xl border-2 border-slate-400 bg-gray-200">
                {imageOutfit ? (
                    <>
                        <div>
                            <img src={imageOutfit} alt="" className="h-full w-full object-cover bg-red-300" />
                        </div>
                        <div className="flex gap-3 py-2 px-3 border-t border-slate-200 bg-white">
                            <Button startContent={<BookmarkPlus />} onClick={() => handleAddCollection()}>
                                {' '}
                                Add to Collection{' '}
                            </Button>
                            {isSuccess ? <p className="text-green-600 flex items-center font-semibold">Added to Collection</p> : <p></p>}
                        </div>
                    </>
                ) : (
                    <div className="flex justify-center items-center h-full">
                        <p className="text-4xl font-semibold absolute text-slate-400">Image</p>
                    </div>
                )}
            </div>
        </section>
    );
}
