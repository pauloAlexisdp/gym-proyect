import bcrypt from 'bcrypt';
const ROUNDS = 10;

export async function hash(password: string): Promise<string> {
  return bcrypt.hash(password, ROUNDS);
}
export async function compare(password: string, hashed: string): Promise<boolean> {
  return bcrypt.compare(password, hashed);
}
