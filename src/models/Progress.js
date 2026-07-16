import mongoose from "mongoose";
const { Schema } = mongoose;

const progressSchema = new mongoose.Schema(
  {
    userID: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    courseID: {
      type: Schema.Types.ObjectId,
      ref: "Course",
    },

    enrolled: {
      type: Boolean,
      default: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    lectureCompleted: [
      {
        type: Number,
      },
    ],
  },
  { timestamps: true },
);

const Progress =
  mongoose.models.Progress || mongoose.model("Progress", progressSchema);
export default Progress;
