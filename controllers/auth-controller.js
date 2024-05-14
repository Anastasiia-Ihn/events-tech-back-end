import User from "../models/User.js";

import { userValidation } from "../validations/userValidation.js";
import eventController from "./event-controller.js";

const addUser = async (req, res) => {
  const { id } = req.params;

  const validateResult = userValidation.validate(req.body);
  if (validateResult.error) {
    return res.status(400).json("Something went wrong");
  }

  const { email } = req.body;
  const isUser = await User.findOne({ email });
  if (isUser) {
    return res.status(409).json("Email in use");
  }

  await User.create({ ...req.body, eventId: id });

  res.status(201).json(`${email} is successfully registered to ${id}`);
};

const getAllUsers = async (req, res) => {
  const { id: eventId } = req.params;
  console.log(eventId);

  const allEvt = await User.find({ eventId });
  console.log(allEvt);
  res.json(allEvt);
};

export default { addUser, getAllUsers };
