import { BadRequest } from "../utils/Errors";

class DogsService {
  create(valueData) {
    if (!valueData) { throw new BadRequest('Invalid value data') }
    // left intentionally useless
    return valueData
  }
  async find(query = {}) {
    // left intentionally useless
    return ["value1", "value2"];
  }
}

export const dogsService = new DogsService();