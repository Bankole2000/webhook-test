import express from 'express';
import cors from 'cors';
import { Request, Response } from "express";
import { initLokiDB } from './utils/lokidb';
import { db } from './lib/lokijs';

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", async (req: Request, res: Response) => {
  console.log('Request recieved')
  return res.status(200).send({
    message: "This works"
  });
});

app.get('/webhook', async (req: Request, res: Response) => {
  const data = db.getCollection('events');
  return res.status(200).send(data);
});

app.post("/webhook", async (req: Request, res: Response) => {
  try {
    const eventCollection = db.getCollection('events');
    eventCollection.insert(req.body);
    return res.status(201).send({
      message: 'Event saved',
      data: req.body,
      error: null
    })
  } catch (error: any) {
    console.log({ error });
    return res.status(400).send({
      message: error.message,
      data: req.body,
      error
    })
  }
});

// PORT
const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
  await initLokiDB();
  console.log(`Server is running on PORT: ${PORT}`);
});