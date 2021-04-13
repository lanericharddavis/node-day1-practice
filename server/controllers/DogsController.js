import BaseController from "../utils/BaseController";
import { dogsService } from "../services/DogsService";

export class DogsController extends BaseController {
  constructor() {
    super("api/values");
    this.router
      .get("", this.getAll)
      .post("", this.create);
  }

  /**
   * Sends found values to a client by request
   * @param {import("express").Request} req 
   * @param {import("express").Response} res 
   * @param {import("express").NextFunction} next 
   */
  async getAll(req, res, next) {
    try {
      const values = dogsService.find()
      return res.send(values);
    } catch (error) {
      next(error);
    }
  }

  /**
   * Creates a value from request body and returns it
   * @param {import("express").Request} req 
   * @param {import("express").Response} res 
   * @param {import("express").NextFunction} next 
   */
  async create(req, res, next) {
    try {
      const value = dogsService.create(req.body)
      res.send(value);
    } catch (error) {
      next(error);
    }
  }
}