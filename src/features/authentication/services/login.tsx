import { Issue, LoginUserArgs } from '../types/entity';
import Cookies from 'js-cookie';

export async function loginUser({ email, password }: LoginUserArgs) {
    try {
        const res = await fetch('http://108.136.163.215:8000/outfitmatcher/api/v1/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify({ email, password }),
        });

        const data = await res.json();

        localStorage.setItem('user', JSON.stringify(data.data.payload));
        Cookies.set('accessToken', data.data.accessToken);
        Cookies.set('refreshToken', data.data.refreshToken);

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
}
