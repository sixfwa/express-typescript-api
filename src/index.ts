import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";

import { authorRouter } from "./author/author.router";
import { bookRouter } from "./book/book.router";

dotenv.config();

if (!process.env.PORT) {
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/authors", authorRouter);
app.use("/api/books", bookRouter);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
