import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";

import { core_config } from "@/config/core";

const schema = undefined;


declare namespace global {
    let db_client: mysql.Connection | undefined;
}

let connection: mysql.Connection | undefined;

if (!core_config.is_production) {
    if (!global.db_client) {
        global.db_client = await mysql.createConnection(core_config.db_url);
    }

    connection = global.db_client;
} else {
    connection = await mysql.createConnection(core_config.db_url);
}

export const DB = drizzle(connection, { schema });


