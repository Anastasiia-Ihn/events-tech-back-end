import { Schema, model } from "mongoose";

const eventSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    description: {
      type: String,
    },
    eventDate: {
      type: String,
      required: [true, "This field is required"],
    },
    organizer: {
      type: String,
    },
  },
  { versionKey: false }
);

const Event = model("event", eventSchema);

export default Event;
