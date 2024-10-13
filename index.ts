import express  from "express";
import cors from "cors";
import bodyParser from "body-parser";

import { core_config } from "@/config/core";
import {cors_options} from "@/config/options";
import { userRouter } from "@/routes/user.route";
import { authRouter } from "./routes/auth.route";

const app = express();

// Middlewares
app.use(cors(cors_options))
app.use(bodyParser.json());
app.set("trust proxy", true);

// Routes
app.use("/api/auth/*", authRouter)
app.use("/users", userRouter);


// Server Starting on Port
app.listen(
    core_config.port,
    () => {
        console.log(`Server running on port ${core_config.port}`);
    }
);