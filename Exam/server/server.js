const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const dbConnect = require("./config/mongoose.config.js");
const router = require("./routes/patients.routes.js");

// Load environment variables
dotenv.config();

const app = express();

const port = 8000;

app.use(express.json(), cors());

app.use("/api", router);

dbConnect();

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
