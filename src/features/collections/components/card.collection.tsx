import { Button } from '../../../components/ui/button';
import { DownloadIcon, Share2, TrashIcon } from 'lucide-react';
import { IDataCollections } from '../types/entity';
import { useMutation } from '@tanstack/react-query';
import { queryClient } from '../../../app';

interface CardProps {
    dataImage: IDataCollections;
}

export default function CardCollection({ dataImage }: CardProps) {
    const { imageOutfit, _id } = dataImage;
    const host = process.env.NODE_ENV === 'production' ? process.env.HOST_PROD : process.env.HOST_DEV; 

    const { mutate: handleDeleteImage } = useMutation({
        mutationKey: ['imageDelete'],
        mutationFn: async () => {
            const isConfirm = confirm('Delete Image ?');

            if (!isConfirm) {
                return false;
            }

            const res = await fetch(`http://${host}:8000/outfitmatcher/api/v1/outfit/collections/${_id}`, {
                method: 'DELETE',
                credentials: 'include',
            });
            const data = await res.json();
            return data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries();
        },
    });

    const handleDownload = async () => {
        if (imageOutfit) {
            try {
                const response = await fetch(imageOutfit, { mode: 'cors' });
                const blob = await response.blob();
                const link = document.createElement('a');

                const url = window.URL.createObjectURL(blob);
                link.href = url;
                link.setAttribute('download', 'outfit-image.jpg');

                document.body.appendChild(link);
                link.click();

                document.body.removeChild(link);
            } catch (error) {
                console.error('Error download', error);
            }
        }
    };

    const handleShareToTwitter = () => {
        const twitterShareUrl = `https://twitter.com/intent/tweet?text=Check%20out%20this%20outfit!&url=${encodeURIComponent(imageOutfit)}`;
        window.open(twitterShareUrl, '_blank');
    };

    return (
        <section className="">
            <div className="max-w-md overflow-hidden rounded-xl border-4 border-blue-500 mb-2">
                <div>
                    <img src={imageOutfit} alt="image can't access" />
                </div>
                <div className="flex gap-3 py-2 px-3">
                    <Button iconOnly onClick={handleShareToTwitter}>
                        <Share2 />
                    </Button>
                    <Button size="small" startContent={<DownloadIcon />} onClick={handleDownload}>
                        Download
                    </Button>
                    <Button
                        size="small"
                        startContent={<TrashIcon />}
                        variant="outline"
                        className="text-white bg-red-500 hover:bg-red-400 border-none active:bg-red-400"
                        onClick={() => handleDeleteImage()}
                    >
                        Delete
                    </Button>
                </div>
            </div>
        </section>
    );
}
