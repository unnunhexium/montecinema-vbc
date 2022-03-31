import { defaultClient } from "./client";

export interface Credentials {
  email: string;
  password: string;
}

export interface UserDetails {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
}

export const register = async (credentials: Credentials & UserDetails) =>
  defaultClient.post("/register", {
    user: {
      email: credentials.email,
      password: credentials.password,
      first_name: credentials.firstName,
      last_name: credentials.lastName,
      date_of_birth: credentials.dateOfBirth,
    },
  });

export const login = async (credentials: Credentials) =>
  defaultClient.post("/login", {
    user: {
      email: credentials.email,
      password: credentials.password,
    },
  });

export const getUser = async () => defaultClient.get("/user");
