import { MongoClient, ServerApiVersion } from "mongodb"
const uri = process.env.MONGODB_URL


function dbConnect(collectionName){
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

  return client.db("next-js").collection(collectionName)

}

export default dbConnect