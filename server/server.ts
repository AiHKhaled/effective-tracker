import express from "express";
const cors = require("cors");
require("dotenv").config();
const workoutRouter = require("./routes/workouts");

const mongoose = require("mongoose");

const app = express();

app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

app.use("/workouts", workoutRouter);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`connected to db on port ${process.env.PORT}`);
    });
  })
  .catch((err: any) => console.log(err));
