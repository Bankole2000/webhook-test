import express from 'express';
import cors from 'cors';
import { Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("This is home page.");
});

app.post("/", (req: Request, res: Response) => {
  res.send("This is home page with post request.");
});

// PORT
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});