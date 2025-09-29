import Joi from "joi";

/**
 * Creates the Joi optional string attribute rule for params
 * @param message message that describes the error
 * @returns Joi attribute object
 */
export const optionalString = (message: string): Joi.StringSchema =>
  Joi.string().optional().allow("").error(new Error(message));

/**
 * Creates the Joi required string attribute rule for params
 * @param message message that describes the error
 * @returns Joi attribute object
 */
export const requiredString = (message: string): Joi.StringSchema =>
  Joi.string().required().error(new Error(message));

/**
 * Creates the Joi required string attribute rule for params
 * @param message message that describes the error
 * @returns Joi attribute object
 */
export const email = (message: string): Joi.StringSchema =>
  Joi.string().email().required().error(new Error(message));