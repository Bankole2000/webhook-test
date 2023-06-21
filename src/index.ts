import express from 'express';
import cors from 'cors';
import { Request, Response } from "express";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", async (req: Request, res: Response) => {
  console.log('Request recieved')
  return res.status(200).send({
    message: "This works"
  });
});

app.post("/", async (req: Request, res: Response) => {
  return res.status(200).send({
    message: "This works"
  });
});

// PORT
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});