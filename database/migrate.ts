import mysql2 from "mysql2";
import {drizzle} from "drizzle-orm/mysql2";
import {migrate} from "drizzle-orm/mysql2/migrator";

import { core_config } from "@/config/core";

const migrationClient = await mysql2.createConnection(core_config.db_url);

await migrate(
    drizzle(migrationClient),
    {
        migrationsFolder: "./database/migrations",
    }
);

await migrationClient.end();
