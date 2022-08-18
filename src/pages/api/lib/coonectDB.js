import mongoose from "mongoose";

// const connectDB = (handler) => async (req, res) => {
//   if (mongoose.connections[0].readyState) {
//     return handler(req, res);
//   }
//   await mongoose.connect(process.env.MONGO_URI);
//   return handler(req, res);
// };
const connectDB = () => {
  if (mongoose.connections[0].readyState) {
    console.log("already connected ");
    return;
  }
  mongoose.connect(process.env.MONGO_URI, {}, (err) => {
    if (err) throw err;
    console.log("connected successfully ");
  });
};

export default connectDB;
