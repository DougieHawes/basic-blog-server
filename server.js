if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");

const mongoUri = process.env.MONGODB_URI;
const port = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());

app.listen(port, console.log(`express app running on port:${port}`));

app.use("/posts", require("./routes/postRoutes"));

mongoose.connect(
  mongoUri,
  { useNewUrlParser: true, useUnifiedTopology: true },
  console.log("mongodb connected")
);
