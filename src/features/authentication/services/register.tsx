interface RegisterArgs {
  userName: string;
  email: string;
  password: string;
}
export async function registerUser({ userName, email, password }: RegisterArgs) {
  const res = await fetch("http://localhost:3000/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userName, email, password }),
  });

  if (res.status === 400) {
    throw new Error("username, email, password are required!");
  }

  if (res.status === 409) {
    throw new Error("User already exists!");
  }

  const data = await res.json();
  return data;
}
