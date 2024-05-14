import Joi from "joi";
import { emailRegexp, enumHearUs } from "../const.js";

export const userValidation = Joi.object({
  fullName: Joi.string().min(3).max(50).required(),
  email: Joi.string().pattern(emailRegexp).required(),
  birth: Joi.string(),
  hearUs: Joi.string().valid(...enumHearUs),
});
