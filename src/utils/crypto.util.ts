import Cryptr from "cryptr";


const cryptr = new Cryptr(process.env.PASSWORDKEY || '');


const cryptorUtil={
    encrypt:async (value: string) => {
       return  await cryptr.encrypt(value);
    },
    decrypt:async (value: string) => {
      return  await cryptr.decrypt(value);
    },
} 
export default cryptorUtil