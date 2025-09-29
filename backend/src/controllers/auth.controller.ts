import type { Request, Response, NextFunction } from 'express';

import * as service from '../service/auth.service';

export async function register(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
  try {
    const data = await service.register(req.body);
    return res.status(201).json(data);
  } catch (err) {
    return next(err);
  }
}

export async function login(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
  try {
    const data = await service.login(req.body);
    return res.json(data);
  } catch (err) {
    return next(err);
  }
}
