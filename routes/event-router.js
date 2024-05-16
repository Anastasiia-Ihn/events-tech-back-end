import express from "express";
import eventController from "../controllers/event-controller.js";

const eventRouter = express.Router();

eventRouter.post("/", eventController.addEvent);
eventRouter.get("/:id", eventController.getEventById);
eventRouter.get("/", eventController.getEvents);

export default eventRouter;
