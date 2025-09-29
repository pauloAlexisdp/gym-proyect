import type { User } from '@prisma/client';

export interface CreateUserRequest {
  name: string;
  lastname: string;
  email: string;
  password: string;
}

export type CreateUserResponse = User;

export type CreateUserSafeResponse = Omit<User, 'password'>;

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  user: CreateUserSafeResponse;
}