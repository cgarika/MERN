const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const dbConnect = require("./config/mongoose.config.js");
const router = require("./routes/books.routes.js");

// Load environment variables
dotenv.config();

const app = express();

// Use port from .env or default to 8000
const port = 8000;

// Middleware
app.use(express.json(), cors());

// Use the book routes
app.use("/api", router);

// Connect to the database
dbConnect();

// Start the server
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
