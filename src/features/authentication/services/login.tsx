import Cookies from 'js-cookie'
import { jwtDecode } from 'jwt-decode'
import { Issue, jwtPayload, LoginUserArgs } from '../types/entity';

export async function loginUser({ email, password }: LoginUserArgs) {
  try {
    const res = await fetch("http://localhost:8000/outfitmatcher/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    
    if (!res.ok) {
      if (data.error && data.error.issues) {
        throw new Error(data.error.issues.map((issue: Issue) => issue.message).join(", "));
      } else if (data.message) {
        throw new Error(data.message); 
      } else {
        throw new Error("Something went wrong");
      }
    }

    Cookies.set('token', data.data.accessToken);

    const token = Cookies.get('token');
    if (token) {
      const decodedToken = jwtDecode<jwtPayload>(token);
      localStorage.setItem('user', JSON.stringify(decodedToken));
    }
    
    return data;
  } catch (err) {
    if (err instanceof Error) {
      if(err.message == 'Failed to fetch') {
        throw new Error("Something went wrong");
      }
      throw new Error(err.message); 
    } else {
      throw new Error("Something went wrong");
    }
  }
}
