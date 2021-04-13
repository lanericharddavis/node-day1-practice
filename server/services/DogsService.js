import { BadRequest } from "../utils/Errors";
import { fakeDb } from "../db/FakeDB";

class DogsService {
  create(valueData) {
    if (!valueData) { throw new BadRequest('Invalid value data') }
    // left intentionally useless
    return valueData
  }
  async find(query = {}) {
    // left intentionally useless
    return fakeDb.dogs;
  }
}

export const dogsService = new DogsService();