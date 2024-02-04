
import {createUserController} from "./auth.controller";
import {describe, expect, test,jest,beforeAll,afterAll} from '@jest/globals';
import {Db, MongoClient}  from 'mongodb'


describe("auth service", () => {
 
    test("returns true if number is even", async () => {
        const mReq = { params: { id: '' } };
        const mRes = {};
        const mNext = jest.fn();
     const res= await createUserController({},{});
      expect(res).toBeCalledTimes(1);
    });
  });