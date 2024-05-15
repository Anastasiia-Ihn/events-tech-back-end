import Event from "../models/Events.js";
import { eventValidation } from "../validations/eventValidation.js";

const addEvent = async (req, res) => {
  const validateResult = eventValidation.validate(req.body);
  if (validateResult.error) {
    return res.status(400).json("Something went wrong");
  }
  await Event.create({ ...req.body });

  res.status(201).json("successfully added");
};

const getEventById = async (req, res) => {
  const { id } = req.params;
  const eventById = await Event.findById(id);

  res.json(eventById);
};

const getEvents = async (req, res) => {
  console.log(req.query);
  const { page = 1, limit = 8 } = req.query;
  const skip = (Number(page) - 1) * Number(limit);

  const result = await Event.find().limit(limit).skip(skip);
  // const result = await Event.find();
  res.json(result);
};

export default { addEvent, getEventById, getEvents };
