import { Router } from 'express';

import { register, login } from '../controllers/auth.controller';
import { validateSchema } from '../middleware/validation.middleware';
import { registerSchema, loginSchema } from '../validations/auth/auth.schema';

const router = Router();

router.post('/register', validateSchema(registerSchema), register);
router.post('/login', validateSchema(loginSchema), login);

export default router;
