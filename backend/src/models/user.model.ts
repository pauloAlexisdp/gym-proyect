import prisma from '../config/prisma';
import type { CreateUserRequest, CreateUserResponse } from '../interfaces/auth.interface';


export async function createUser(data: CreateUserRequest): Promise<CreateUserResponse> {
  return prisma.user.create({ data });
}

export async function findByEmail(email: string): Promise<CreateUserResponse | null> {
  return prisma.user.findUnique({ where: { email } });
}

export async function findById(id: number): Promise<CreateUserResponse | null> {
  return prisma.user.findUnique({ where: { id } });
}
