import User from "../models/User.js";

import { userValidation } from "../validations/userValidation.js";

const regist = async (req, res) => {
  const validateResult = userValidation.validate(req.body);
  if (validateResult.error) {
    return res.status(400).json("Something went wrong");
  }

  const { email } = req.body;
  const isUser = await User.findOne({ email });
  if (isUser) {
    return res.status(409).json("Email in use");
  }

  await User.create({ ...req.body });

  res.status(201).json(`${email} is successfully registered`);
};

export default { regist };
