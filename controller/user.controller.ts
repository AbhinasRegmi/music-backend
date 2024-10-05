import {z} from "zod";
import { StatusCodes } from "http-status-codes";
import { type Request, type Response } from "express";

import { userLoginSchemaZ, userRegistrationSchemaZ } from "@/schemas/user.schema";


export function registerUser(
    req: Request<{}, {}, z.infer<typeof userRegistrationSchemaZ>>, 
    res: Response
){
    res.status(StatusCodes.CREATED).json({
        ok: "true",
        data: req.body,
    });
}

export function loginUser(
    req: Request<{}, {}, z.infer<typeof userLoginSchemaZ>>, 
    res: Response
){
    res.status(StatusCodes.OK).json({
        message: "User logged in successfully",
    });
}