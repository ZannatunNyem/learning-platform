import mongoose from "mongoose";
const { Schema } = mongoose;

const progressSchema = new mongoose.Schema(
  {
    userID: {
      type: String,
      required: true,
    },

    courseID: {
      type: String,
      required: true,
    },

    enrolled: {
      type: Boolean,
      default: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    lectureCompleted: {
      type: [Number],
      default: [],
    },
  },
  { timestamps: true },
);

const Progress =
  mongoose.models.Progress || mongoose.model("Progress", progressSchema);
export default Progress;
