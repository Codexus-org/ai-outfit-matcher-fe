import { Issue } from '../../authentication/types/entity';

export interface Result {
    data: {
        weatherCategory: string;
        occationCategory: string;
        clothes: string;
        pants: string;
        shoe: string;
        description: string;
        imagesOufit: string;
        _id: string;
    };
}

export async function PromptSubmit() {
    try {
        const res = await fetch('http://localhost:8000/outfitmatcher/api/v1/outfit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify({}),
        });
        const data = await res.json();
        console.log(data);
        if (!res.ok) {
            if (data.error && data.error.issues) {
                throw new Error(data.error.issues.map((issue: Issue) => issue.message).join(', '));
            } else if (data.message) {
                throw new Error(data.message);
            } else {
                throw new Error('Something went wrong');
            }
        }
        return data;
    } catch (error) {
        if (error instanceof Error) {
            if (error.message == 'Failed to fetch') {
                throw new Error('Something went wrong');
            }
            throw new Error(error.message);
        } else {
            throw new Error('Something went wrong');
        }
    }
}
