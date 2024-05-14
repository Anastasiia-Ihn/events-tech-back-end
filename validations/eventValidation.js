import Joi from "joi";
export const eventValidation = Joi.object({
  title: Joi.string().min(3).max(100).required(),
  description: Joi.string().max(500),
  eventDate: Joi.string().min(4).max(50).required(),
  organizer: Joi.string(),
});
