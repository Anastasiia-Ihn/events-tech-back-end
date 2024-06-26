import express from "express";
import cors from "cors";
import authRouter from "./routes/auth-router.js";
import eventRouter from "./routes/event-router.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/registration", authRouter);
app.use("/api/events", eventRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

export default app;
