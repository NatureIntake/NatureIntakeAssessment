import mongoose from "mongoose";

const UserFormSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
    },
    parentname: {
      type: String,
      required: true,
    },
    phonenumber: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    school: {
      type: String,
      required: true,
    },
    class: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: false,
      unique : true,
    },
    // isSubmitted: {
    //  type : Boolean,
    //   required: true,
    // },
  },
  { timestamps: true }
);
mongoose.models = {}
export default mongoose.model("Form", UserFormSchema);
