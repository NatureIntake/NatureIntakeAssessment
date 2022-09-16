import clientPromise from "../../../middleware/connectDb";

export default async function handler(req, res) {
  const { getForm } = req.query;
  const client = await clientPromise;
  const db = client.db("Forms");

  const isFind = await db
    .collection("forms")
    .aggregate([
      { $match: { slug: getForm[0] } },
      { $project: { _id: 0, slug: 0 } },
    ])
    .toArray();

  res.json(isFind);
}
