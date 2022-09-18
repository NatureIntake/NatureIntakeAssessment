import clientPromise from "../../middleware/connectDb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("TestStates");

  switch (req.method) {
    case "POST":
      let bodyObject = JSON.parse(req.body);
      let myPost = await db.collection("states").insertOne(bodyObject);
      res.json(myPost);
      break;

    case "PUT":
      // const allPosts = await db
      //   .collection("forms")
      //   .find({ slug: Cookies.get() })
      //   .toArray();
      // res.json(allPosts);
      break;
  }
}
