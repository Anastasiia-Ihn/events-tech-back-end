import Joi from "joi";
export const eventValidation = Joi.object({
  title: Joi.string().min(3).max(200).required(),
  description: Joi.string().max(1000),
  eventDate: Joi.string().min(4).max(50).required(),
  organizer: Joi.string(),
});
