import Event from "../models/Events.js";
import { items } from "./items.js";
import mongoose from "mongoose";
import "dotenv/config";

const { DB_HOST, PORT = 3000 } = process.env;

mongoose
  .connect(DB_HOST)
  .then(async () => {
    try {
      await Promise.all(items.map((el) => Event.create(el)));
      console.log("Added");
    } catch (error) {
      console.error("My error", error);
    }
  })
  .catch((err) => {
    console.log(err.message);
    process.exit(1);
  });
