import dns from "node:dns/promises";
dns.setServers(["1.1.1.1"]);
import mongoose from "mongoose";
const MONGO_URI = process.env.MONGO_URI;

async function connectDB() {
  if (!MONGO_URI) {
    throw new Error("Please define the MONGODB_URI environment variable");
  }
  await mongoose.connect(MONGO_URI);
  console.log("✅ Connected to MongoDB Atlas");
  return mongoose;
}
export default connectDB;
