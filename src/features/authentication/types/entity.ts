export interface LoginUserArgs {
  email: string;
  password: string;
}

export interface jwtPayload {
  email: string;
  username: string;
}

export interface RegisterArgs {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
}

export interface Issue {
  message: string;
}