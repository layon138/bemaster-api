
import {createUserController} from "./auth.controller";
import {describe, expect, test,jest,beforeAll,afterAll,afterEach,beforeEach,it} from '@jest/globals';
import {
  createMocks as _createMocks,
  Mocks,
  RequestOptions,
  ResponseOptions,
} from 'node-mocks-http'
import {Db, MongoClient}  from 'mongodb'

import { Request, Response } from "express"; // Importa los tipos de Request y Response
import { registerUser } from "../../services/auth/auth.service";
import { database } from "../../database/mongo.config";
jest.mock("mongodb");

describe("Test de createUserHandler", () => {
  let req: Partial<Request>;
  let res: Partial<Response>;
  const mockQuery = jest.fn();
  const mockQuery2 =jest.fn();
  beforeEach(() => {
    req = { body: { /* datos del usuario */ } };
    res = {
    };
  });

  it("debería crear un usuario exitosamente", async () => {
    // Mock de la función registerUser para simular que funciona correctamente
    mockQuery.mockReturnValueOnce([registerUser as {}, []]); 
    await createUserController(req as Request, res as Response);

    expect(registerUser).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      message: "usuario creado",
      status: "success",
    });
  });

});