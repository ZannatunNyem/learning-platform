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
    completed: {
      type: Boolean,
      default: false,
    },
    lectureCompleted: {
      type: Schema.Types.ObjectId,
      ref: "Lecture",
    },
  },
  { timestamps: true },
);

const Progress =
  mongoose.models.Progress || mongoose.model("Progress", progressSchema);
export default Progress;
