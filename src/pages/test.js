import clientPromise from "../../../middleware/connectDb";

export default async function handler(req, res) {
  const { getQuestion } = req.query;
  const client = await clientPromise;
  const db = client.db("QuestionBank");

  const allPosts = await db
    .collection(getQuestion[0])
    .aggregate([
      { $match: { testType: getQuestion[1] } },
      { $sample: { size: parseInt(getQuestion[2]) } },
    ])
    .toArray();
  res.json(allPosts);
}

import clientPromise from "../../../middleware/connectDb";

export default async function handler(req, res) {
  const { getQuestion } = req.query;
  const client = await clientPromise;
  const db = client.db("QuestionBank");

  const allPosts = await db
    .collection(getQuestion[0])
    .aggregate([{ $sample: { size: parseInt(25) } }])
    .toArray();
  res.json(allPosts);
}
