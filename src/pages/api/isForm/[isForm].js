import clientPromise from "../../../middleware/connectDb";


export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("Forms");
  const id = req.query;
  
  const isFind =
    (await db.collection("forms").find({ slug: id }).count()) > 0
      ? true
      : false;
  res.json(isFind);
}
