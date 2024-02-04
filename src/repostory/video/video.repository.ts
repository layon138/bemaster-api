import { database } from "../../database/mongo.config";

const collection = database.collection('videos');


const repository={
    insert:async (user: any) => {
        await collection.insertOne(user);
    },
    findByAtribute:async (atributeName:string,value:any)=>{
       return await collection.find({[atributeName]:value}).toArray();
    },
    findByManyAtributes:async (objectFIlter:any)=>{
        return await collection.find(objectFIlter).toArray();
     }
    
} 
export default repository