const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(process.env.MONGO_URI);
    console.log("connected to Mongo");
  } catch (err) {
    console.log(err);
    process.exit();
  }
};

module.exports = connectDB;
