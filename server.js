import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import mongoose from "mongoose";

import postRoutes from "./routes/posts.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", postRoutes);

const MONGODB_URI = "mongodb://localhost:27017/basic-blog";
const PORT = process.env.PORT || 8000;

mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`server running on port:${PORT}`))
  )
  .catch((error) => console.log(error));
mongoose.set("useFindAndModify", false);
