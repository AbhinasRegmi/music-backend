import dotenv from "dotenv";
dotenv.config();

export const core_config = {
    port: parseInt(process.env.PORT ?? '8000'),
};