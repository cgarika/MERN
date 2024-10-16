const { connect } = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const MONGODB_URI = process.env.MONGODB_URI;
async function dbConnect() {
  try {
    await connect(MONGODB_URI, {
      dbName: "mangoose_practice",
    });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } catch (error) {
    console.log(error);
    throw error;
  }
}
module.exports = dbConnect;
