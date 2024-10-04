interface LoginUserArgs {
  email: string;
  password: string;
}

export async function loginUser({ email, password }: LoginUserArgs) {
  try {
    const res = await fetch("http://127.0.0.1:8090/api/collections/members/records", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (res.status === 401) {
      throw new Error("Invalid email or password");
    }

    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
    throw new Error("Something went wrong");
  }
}
