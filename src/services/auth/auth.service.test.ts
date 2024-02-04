import dbInit from "../../database/mongo.config";
import repository from "../../repostory/user.repository";
import {registerUser} from "./auth.service";
import {describe, expect, test,jest,beforeAll,afterAll} from '@jest/globals';
import {Db, MongoClient}  from 'mongodb'


describe("auth service", () => {
  let connection;
  let db;

  beforeAll(async () => {
    connection = await MongoClient.connect(globalThis.__MONGO_URI__, {
    });
    db = await connection.db(globalThis.__MONGO_DB_NAME__);
  });

  afterAll(async () => {
    await connection.close();
    jest.restoreAllMocks();
  });

  const userMockRequest ={
    "email":"julianvargas705@hotmail.com",
    "password":"1213654"
}
    test("returns true if number is even", async () => {
      const mockDbInstance = ({
        collection: jest.fn(),
      } as unknown) as Db;
      const mockDb = jest.fn(() => mockDbInstance);
      jest.spyOn(DBManager, 'start').mockResolvedValueOnce();
      jest.spyOn(DBManager, 'connection', 'get').mockReturnValue(({ db: mockDb } as unknown) as MongoClient);
      await main();
      expect(DBManager.start).toBeCalledTimes(1);
      expect(DBManager.connection!.db).toBeCalledTimes(1);
      expect(mockDbInstance.collection).toBeCalledWith('users');
    });
  });