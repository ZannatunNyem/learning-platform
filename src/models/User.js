// import mongoose from "mongoose";
// const { Schema } = mongoose;

// const userSchema = new mongoose.Schema(
//   {
//     name: String,
//     email: String,
//     password: String,
//     image: String,
//     role: { type: String, default: "User" },
//   },
//   { timestamps: true },
// );
// const User = mongoose.models.User || mongoose.model("User", userSchema);

// export default User;

import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
    image: String,
    role: {
      type: String,
      default: "User",
    },

    enrolledCourses: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
      },
    ],
  },
  { timestamps: true },
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
