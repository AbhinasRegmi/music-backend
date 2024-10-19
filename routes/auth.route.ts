import express from "express";
import { ExpressAuth } from "@auth/express";
import Google from "@auth/express/providers/google";
import Github from "@auth/express/providers/github";

import { core_config } from "@/config/core";


const authRouter = express.Router();

authRouter.use("/auth/*", ExpressAuth({
    providers: [
        Google({
            clientId: core_config.auth_google().id,
            clientSecret: core_config.auth_google().secret,
        }),
        Github(
            {
                clientId: core_config.auth_github().id,
                clientSecret: core_config.auth_github().secret,
            }
        )
    ],
}));


export {
    authRouter
};