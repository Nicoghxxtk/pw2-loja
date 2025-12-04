import { Request, Response } from "express";
import { userService } from "./user.service";

export const userController = {
  async register(req: Request, res: Response) {
    const { name, email, password } = req.body;

    const user = await userService.register({ name, email, password });

    return res.status(201).json({
      id: user.id,
      name: user.name,
      email: user.email,
      userType: user.userType?.name
    });
  },
};