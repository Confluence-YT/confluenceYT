import express, { Express, Request, Response } from "express";
const app: Express = express();
const port = 8000;

app.get("/hi", (req: Request, res: Response) => {
  res.send("Hello||||||");
});

app.listen(port, () => {
  console.log("Listening on 5000");
});
