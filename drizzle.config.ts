import {type Config} from "drizzle-kit";
import { core_config } from "@/config/core";

export default {
    schema: "./database/schemas",
    out: "./database/migrations",
    dialect: "mysql",
    dbCredentials: {
        url: core_config.db_url,
    },
    verbose: true,
    strict: true,
} satisfies Config;