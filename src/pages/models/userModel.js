var mongoose = require("mongoose");

var userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      default: "guest",
    },
    email: {
      type: String,
    },
    bio: {
      type: String,
    },
    image: {
      type: String,
      default: "https://i.stack.imgur.com/34AD2.jpg",
    },
  },
  { timestamps: true }
);

let Dataset = mongoose.models.users || mongoose.model("users", userSchema);
export default Dataset;
// mongoose.model("User", UserSchema);
