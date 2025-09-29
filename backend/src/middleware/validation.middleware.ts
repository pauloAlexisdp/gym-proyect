import type { Request, Response, NextFunction } from 'express';
import type Joi from 'joi';

import { httpError } from '../helpers/httpError';

export function validateSchema(schema: Joi.ObjectSchema) {
  return (req: Request, res: Response, next: NextFunction): void => {
    try {
      const { error } = schema.validate(req.body, {
        abortEarly: false, // Retorna todos los errores, no solo el primero
        allowUnknown: false, // No permite campos extra
        stripUnknown: true, // Elimina campos desconocidos
      });

      if (error) {
        const message = error.details?.length
          ? error.details.map((detail) => detail.message).join(', ')
          : error.message || 'Validation error';
        return next(httpError(400, message));
      }

      next();
    } catch (err) {
      return next(err);
    }
  };
}
