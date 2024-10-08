import { RegisterArgs } from "../types/entity";

export async function registerUser({ firstName, lastName, username, email, password }: RegisterArgs) {
  const res = await fetch("http://localhost:8000/outfitmatcher/api/v1/register", {
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
      throw data.error.issues;
    } else {
      throw data;
    }
  }

  return data;
}
