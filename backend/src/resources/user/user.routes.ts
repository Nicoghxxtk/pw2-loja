import { Router } from "express";
import { userController } from "./user.controller";
import { validate } from "../../middlewares/validate";
import { createUserSchema } from "./user.schema";

const router = Router();

router.post("/users", validate(createUserSchema), userController.register);

export default router;
