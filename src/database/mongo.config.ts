import { MongoClient, ServerApiVersion  } from "mongodb";
import mongoose from "mongoose";

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

/*const DB_URI = `${process.env.DB_URI}`

const dbInit = async () => {
    try {
        // Connect to the MongoDB cluster
        mongoose.connect(
            DB_URI,
          {    useNewUrlParser: true,
            useUnifiedTopology: true,
            authSource:"admin",
            ssl: true, },
          () => console.log(" Mongoose is connected"),
        );
      } catch (e) {
        console.log("could not connect");
      }
      
}*/

export default dbInit
