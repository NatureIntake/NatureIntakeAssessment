// import userFormSchema from "../../models/userFormSchema";
import ConnectDB from "../../middleware/mongoose";

const handler = async (req,res)=>{
    let form = await userFormSchema.find()
    res.status(200).json({name:'Neerav garg'})
}

export default ConnectDB(handler)