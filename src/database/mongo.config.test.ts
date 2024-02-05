import { MongoClient, ServerApiVersion } from "mongodb";
import dbInit, { database } from "./mongo.config";
import {describe, expect, test,jest,afterEach,it} from '@jest/globals';
jest.mock("mongodb");

describe("dbInit", () => {
  it("should connect to the database", async () => {
    await dbInit();

    expect(MongoClient).toHaveBeenCalled();
  });
});