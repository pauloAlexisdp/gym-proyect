import jwt from 'jsonwebtoken';

import { hash, compare } from './password.service';
import config from '../config/env';
import errors from "../errors/auth.messages";
import { httpError } from '../helpers/httpError';
import type { CreateUserRequest, CreateUserSafeResponse, LoginRequest, LoginResponse } from '../interfaces/auth.interface';
import { createUser, findByEmail } from '../models/user.model';

function normalizeEmail(e: string): string {
  return e.trim().toLowerCase();
}

export async function register(args: CreateUserRequest): Promise<CreateUserSafeResponse> {
  const email = normalizeEmail(args.email);

  const exists = await findByEmail(email);
  if (exists) throw httpError(409, errors.service.email_in_use);

  const hashed = await hash(args.password);

  const user = await createUser({
    name: args.name.trim(),
    lastname: args.lastname.trim(),
    email,
    password: hashed,
  });

  return {
    id: user.id,
    name: user.name,
    lastname: user.lastname,
    email: user.email,
    role: user.role,
    isActive: user.isActive,
  };
}


export async function login(args:LoginRequest): Promise<LoginResponse> {
  const email = normalizeEmail(args.email);
  const user = await findByEmail(email);
  if (!user) throw httpError(400, errors.service.invalid_credentials);
  if (!user.isActive) throw httpError(403, errors.service.inactive_user);

  const ok = await compare(args.password, user.password);
  if (!ok) throw httpError(400, errors.service.invalid_credentials);

  const payload = {
    sub: user.id,
    email: user.email,
    role: user.role,
    name: user.name,
    lastname: user.lastname,
  };

  const token = jwt.sign(payload, config.jwtSecret, { expiresIn: '1d' });

  return {
    token,
    user: {
      id: user.id,
      name: user.name,
      lastname: user.lastname,
      email: user.email,
      role: user.role,
      isActive: user.isActive,
    },
  };
}
