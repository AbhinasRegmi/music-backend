import express from "express";
import { ExpressAuth } from "@auth/express";
import Google from "@auth/express/providers/google";
import Github from "@auth/express/providers/github";
import Credentials from "@auth/express/providers/credentials";

import { core_config } from "@/config/core";


const authRouter = express.Router();

authRouter.use("/auth/*", ExpressAuth({
    providers: [
        Google({
            clientId: core_config.auth.GOOGLE_ID,
            clientSecret: core_config.auth.GOOGLE_SECRET,
        }),
        Github(
            {
                clientId: core_config.auth.GITHUB_ID,
                clientSecret: core_config.auth.GITHUB_SECRET,
            }
        )
    ],
}));


export {
    authRouter
};