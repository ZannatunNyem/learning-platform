import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  title: String,
  slug: String,
  description: String,
  thumbnail: String,
  category: String,
  level: String,
  instructor: {
    name: String,
  },
  lectures: [
    {
      id: Number,
      title: String,
    },
  ],
});
const Courses =
  mongoose.models.Course || mongoose.model("Course", courseSchema);

export default Courses;
