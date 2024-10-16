import express from "express";
import router from "./routes/tvShows.routes.js";
import { tvShows } from "./models/tv.models.js";

const app = express();
const port = 8000;

app.use(express.json());
app.use("/api", router);

app.listen(port, () => {
  console.log(`Listing on port ${port}`);
});

export { tvShows };
