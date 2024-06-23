const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();
const port = 5000;

//Connection to the DB
connectDB();

const app = express();

//Middleware to handle data included in REQUEST
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/book", require("./routes/book.routes"));

//start the sever
app.listen(port, () => console.log("server has started on port" + port));
