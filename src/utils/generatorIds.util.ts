import { v4 as uuidv4 } from 'uuid';
const generator={
    generateId:()=>{
        return uuidv4(); 
    }
}
export default generator


