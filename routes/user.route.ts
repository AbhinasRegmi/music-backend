import express  from "express";

import { userRegistrationSchemaZ, userLoginSchemaZ } from "@/schemas/user.schema";
import { loginUser, registerUser } from "@/controller/user.controller";
import { validate } from "@/middlewares/validate";

const userRouter = express.Router();

userRouter.post(
    "/register", 
    validate({body: userRegistrationSchemaZ}),
    registerUser,
);

userRouter.post(
    "/login",
    validate({body: userLoginSchemaZ}),
    loginUser
);

export {
    userRouter
};