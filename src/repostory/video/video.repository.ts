import { database } from "../../database/mongo.config";
import { CommentCreateInterface, LikeCreateRequestInterface } from "../../interfaces/video.interface";

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
     },
     insertComment:async (comment: CommentCreateInterface) => {
        const resp=await collection.find({id:comment.videoId}).toArray();
        console.log(resp)
       let newVideoInfo= resp[0].commets
        newVideoInfo.push(comment)
       console.log(newVideoInfo)
        await collection.findOneAndUpdate({'id':comment.videoId}, {$set: {commets: newVideoInfo}});
    },
    insertLike:async (like: LikeCreateRequestInterface) => {
        const resp=await collection.find({id:like.videoId}).toArray();
       let newVideoInfo= resp[0].likes
        newVideoInfo.push(like)
        await collection.findOneAndUpdate({'id':like.videoId}, {$set: {likes: newVideoInfo}});
    },
} 
export default repository