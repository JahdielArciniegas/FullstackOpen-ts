import express from "express";
import cors from "cors";
import diagnosesRouter from "./routes/diagnoses";

const app = express();

app.use(cors());

app.use('/api/diagnoses', diagnosesRouter);

app.get("/api/ping", (_req, res) => {
  console.log("someone pinged here");
  res.send("pong");
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
