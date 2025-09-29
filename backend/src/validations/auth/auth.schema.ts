import Joi from "joi";

import errors from "../../errors/auth.messages";
import { email, requiredString } from "../schema-types/types";

export const registerSchema = Joi.object().keys({
  name: requiredString(errors.register.validation.messages.name),
  lastname: requiredString(errors.register.validation.messages.lastname),
  email: email(errors.register.validation.messages.email),
  password: requiredString(errors.register.validation.messages.password),
});

export const loginSchema = Joi.object().keys({
  email: email(errors.login.validation.messages.email),
  password: requiredString(errors.login.validation.messages.password),
});