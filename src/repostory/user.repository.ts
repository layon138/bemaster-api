import { database } from "../database/mongo.config";

const collection = database.collection('users');


const repository={
    insert:async (user: any) => {
        await collection.insertOne(user);
    },
    findByAtribute:async (atributeName:string,value:any)=>{
       return await collection.find({[atributeName]:value}).toArray();
    }
    
} 
export default repository