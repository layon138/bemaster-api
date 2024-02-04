
import DBManager from './database/mongo.config';
import { Db } from 'mongodb';
import {describe, expect, test,jest,afterEach} from '@jest/globals';
describe('69011729', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  test('should pass', async () => {
    const mDB = ({
      collection: jest.fn(),
    } as unknown) as Db;
    jest.spyOn(DBManager.prototype, 'start').mockResolvedValue();
    jest.spyOn(DBManager.prototype, 'db', 'get').mockReturnValueOnce(mDB);
    //await main();
    expect(DBManager.prototype.start).toBeCalledTimes(0);
  });

  test('should restore original methods', () => {
    expect(jest.isMockFunction(DBManager.prototype.start)).toBeFalsy();
  });
});
