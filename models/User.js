import { Schema, model } from "mongoose";
import { emailRegexp, enumHearUs } from "../const.js";

const userSchema = new Schema(
  {
    fullName: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      match: emailRegexp,
      required: [true, "Email is required"],
    },
    birth: {
      type: String,
      // type: Date,
    },
    hearUs: {
      type: String,
      enum: enumHearUs,
    },
    eventId: {
      type: Schema.Types.ObjectId,
      ref: "event",
      required: true,
    },
  },
  { versionKey: false }
);

const User = model("user", userSchema);

export default User;
