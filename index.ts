import express, { Application, Request, Response } from "express";
import cors from "cors";
import getdata from "./router/bookcarRouter";
import book from "./router/bookRouter";

const port: number = 7000;

const app: Application = express();

app
  .use(cors())
  .use(express.json())
  .use("/api/book", book)
  .use("/api/data", getdata)

  .get("/", (req: Request, res: Response) => {
    try {
      return res.status(200).json({
        message: "You have just hit on the book store services endpoint",
      });
    } catch (error) {
      return res.status(404).json({
        message: "Not Found",
        data: error,
      });
    }
  });

const server = app.listen(port, () => {
  console.log("Server is live");
});

process.on("uncaughtException", (err: any) => {
  console.log("Server is shutting down because of uncaught exception");
  console.log("uncaughtException: ", err);
  process.exit(1);
});

process.on("unhandledRejection", (reason: any) => {
  console.log("Server is shutting down because of unhandled rejection");
  console.log("unhandledRejection: ", reason);
  server.close(() => {
    process.exit(1);
  });
});
