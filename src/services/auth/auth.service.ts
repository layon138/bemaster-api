import {
  UserCreateInterface,
  UserCreateRequestInterface,
  UserLoginRequestInterface,
} from "../../interfaces/user.interface";

import repository from "../../repostory/user.repository";
import cryptorUtil from "../../utils/crypto.util";
import generatorUtil from "../../utils/generatorIds.util";

export const registerUser = async (user: UserCreateRequestInterface) => {
  const userToInsert: UserCreateInterface = {
    ...user,
    password: await cryptorUtil.encrypt(user.password),
    id: generatorUtil.generateId(),
  };
  await repository.insert(userToInsert);
};

export const authUser = async (user: UserLoginRequestInterface) =>{
  try {
    const findResult = await repository.findByAtribute("email", user.email);
    const encryptedString = await cryptorUtil.decrypt(findResult[0].password);
    if (findResult && encryptedString === user.password) {
      return findResult.map(user=>{
        return {
            email: user.email,
            id: user.id
        }
      })[0]
    } 
    return undefined
  } catch (error) {
    return error
  }
};
