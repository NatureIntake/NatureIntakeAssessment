import userFormSchema from "../../models/userFormSchema";
import ConnectDB from "../../middleware/mongoose";

export default async function addUserForm(req, res) {
  try {
    if (req.method == "POST ") {
      await ConnectDB();

      await userFormSchema.create(req.body);

      res.status(200).json({ success: "successfull" });
    }
  } catch (error) {
    console.log('error', error);
    res.status(400).json({ error: "This is invalid request" });
  }
  // if (req.method == "POST ") {
  //   let form = new userFormSchema(req.body);
  //   await form.save();
  // } else {
  //   res.status(400).json({ error: "This is invalid request" });
  // }
}
