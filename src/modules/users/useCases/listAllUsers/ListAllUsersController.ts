import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const { id } = request.headers;

    const users = this.listAllUsersUseCase.execute(id);

    if(!users) {
      return response.status(404).send({error: "Error occurred while listing users!"})
    }

    return response.send(users);
  }
}

export { ListAllUsersController };
