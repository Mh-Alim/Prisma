import express, { Request, Response } from "express";
const app = express();

const port = 5000;
app.get("/", (req:Request, res:Response) => {
  return res.status(200).json({
    message: "This is working",
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
