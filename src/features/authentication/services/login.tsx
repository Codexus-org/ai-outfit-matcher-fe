import Cookies from 'js-cookie'
import { jwtDecode } from 'jwt-decode'
import { jwtPayload, LoginUserArgs } from '../types/entity';

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

    if (res.status === 401) {
      throw new Error("Invalid email or password");
    }

    const data = await res.json();
    Cookies.set('token', data.data.accessToken);

    const token = Cookies.get('token');
    if (token) {
      const decodedToken = jwtDecode<jwtPayload>(token);
      localStorage.setItem('user', JSON.stringify(decodedToken));
    }
    
    return data;
  } catch (err) {
    console.log(err);
    throw new Error("Invalid email or password");
  }
}
