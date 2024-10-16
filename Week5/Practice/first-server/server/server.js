import express from "express";
import router from "./routes/users.routes.js";

const app = express();
const port = 8001;

app.use(express.json());
app.use("/api", router);

const users = [
  { firstName: "Reimu", lastName: "Hakurei", id: 1 },
  { firstName: "Marisa", lastName: "Kirisame", id: 3 },
  { firstName: "Sanae", lastName: "Kochiya", id: 2 },
  { firstName: "Sakuya", lastName: "Izayoi", id: 5 },
  { firstName: "Momiji", lastName: "Inubashiri", id: 4 },
];

app.listen(port, () => {
  console.log(`Listing on port: ${port}`);
});
export { users };
