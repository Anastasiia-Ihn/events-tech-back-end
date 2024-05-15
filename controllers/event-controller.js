import Event from "../models/Events.js";
import { eventValidation } from "../validations/eventValidation.js";

const addEvent = async (req, res) => {
  console.log(req.body);

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
  //   const { _id: eventId } = req.event;
  //   const { page = 1, limit = 20 } = req.query;
  //   const skip = (page - 1) * limit;
  //   const filter = { eventId };

  //   const result = await Event.find(filter, {
  //     skip,
  //     limit,
  //   });

  const result = await Event.find();
  res.json(result);
};

export default { addEvent, getEventById, getEvents };
