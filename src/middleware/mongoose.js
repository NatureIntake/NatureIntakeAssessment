// import { MongoClient } from "mongodb";

// const { MONGO_URI, MONGO_DB } = process.env;

// let cached = global.mongo;

// if (!cached) {
//   cached = global.mongo = { conn: null, promise: null };
// }

// export default async function ConnectDB() {
//   if (cached.conn) {
//     return cached.conn;
//   }
//   if (!cached.promise) {
//     const opts = {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     };
//     cached.promise = MongoClient.connect(MONGO_URI, opts).then((client) => {
//       return {
//         client,
//         db: client.db(MONGO_DB),
//       };
//     });
//   }
//   cached.conn = await cached.promise
//   return cached.conn
// }
import mongoose from 'mongoose';

const connectDB = handler => async (req, res) => {
  if (mongoose.connections[0].readyState) {
    // Use current db connection
    return handler(req, res);
  }
  // Use new db connection
  await mongoose.connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  });
  return handler(req, res);
};

export default connectDB;