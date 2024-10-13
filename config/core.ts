import { getEnvVariables } from "@/lib/utils";
import dotenv from "dotenv";
dotenv.config();

export const core_config = {
    port: parseInt(process.env.PORT ?? '8000'),
    db_url: (() => {
        const url = process.env.DB_URL;
        if (!url) {
            throw new Error("Database configuration is not complete. Please enter a DB_URL env variable.");
        }

        return url;
    })(),
    auth_secret: (
        () => {
            const secret = process.env.AUTH_SECRET;
            if(!secret){
                throw new Error("Please setup a envirionment variable called AUTH_SECRET");
            }

            return secret;
        }
    )(),
    auth: (
        () => {
            return getEnvVariables("GOOGLE_ID", "GOOGLE_SECRET", "GITHUB_ID", "GITHUB_SECRET");
        }
    )(),
    is_production: (
        () => {
            const value = process.env.PRODUCTION ?? 'false';

            if(value.toLowerCase() === 'true'){
                return true;
            }

            return false;
        }
    )(),
    allow_origins: (
        () => {
            const origin_list: Array<string> = [];
            const env_list = process.env.ALLOW_ORIGINS;

            if(!env_list && !core_config.is_production)
            {
                origin_list.push("http://localhost:3000");                
                return origin_list;
            }

            if(!env_list){
                console.warn("No Allow Origin has been set for CORS");
                return origin_list;
            }

            return env_list.split(',');
        }
    )
} satisfies Record<string, any>;
