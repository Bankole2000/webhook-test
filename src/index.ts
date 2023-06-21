import express from 'express';
import cors from 'cors';
import { Request, Response } from "express";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.status(200).send({
    message: "This works"
  });
});

app.post("/", (req: Request, res: Response) => {
  res.status(200).send({
    message: "This works"
  });
});

// PORT
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});