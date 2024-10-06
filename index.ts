import express  from "express";
import bodyParser from "body-parser";

import { core_config } from "@/config/core";
import { userRouter } from "@/routes/user.routes";

const app = express();

// Middlewares
app.use(bodyParser.json());
app.use("/users", userRouter);


// Server Starting on Port
app.listen(
    core_config.port,
    () => {
        console.log(`Server running on port ${core_config.port}`);
    }
);