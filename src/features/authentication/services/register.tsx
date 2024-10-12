import { Issue, RegisterArgs } from "../types/entity";

export async function registerUser({ firstName, lastName, username, email, password }: RegisterArgs) {
  try {
    const host = process.env.NODE_ENV === 'production' ? process.env.HOST_PROD : process.env.HOST_DEV; 
    const res = await fetch(`http://${host}:8000/outfitmatcher/api/v1/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ firstName, lastName, username, email, password }),
    });
  
    const data = await res.json();
    console.log(data);
    if (!res.ok) {
      if (data.error && data.error.issues) {
        throw new Error(data.error.issues.map((issue: Issue) => issue.message).join(", "));
      } else if (data.message) {
        throw new Error(data.message); 
      } else {
        throw new Error("Something went wrong");
      }
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
