import { MongoClient, ServerApiVersion  } from "mongodb";

const client = new MongoClient(process.env.MONGODB, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

export const database =client.db('bemaster');


const dbInit = async () => {

    await client.connect();
    console.log('Estamos ready?')
}

export default dbInit
