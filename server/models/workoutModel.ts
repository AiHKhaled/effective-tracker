const mongoose = require("mongoose");

const workoutSchema = new mongoose.Schema(
  {
    workoutName: {
      type: String,
      required: true,
    },
    reps: {
      type: mongoose.Schema.Types.Mixed,
      required: true,
    },
    sets: {
      type: Number,
      required: true,
    },
    weight: {
      type: mongoose.Schema.Types.Mixed,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Workout", workoutSchema);
