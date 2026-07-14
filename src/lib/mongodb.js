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

// import { MongoClient, ServerApiVersion } from "mongodb";

// const uri = process.env.MONGO_URI;

// //const client = new MongoClient(uri);
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

// const connectDB = async () => {
//   await client.connect();
//   console.log("✅ Connected to MongoDB Atlas");
//   return client.db("learning-platform"); // Your database name
// };

// export default connectDB;
