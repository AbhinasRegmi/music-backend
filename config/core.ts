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
    is_production: (
        () => {
            const value = process.env.PRODUCTION ?? 'false';

            if(value.toLowerCase() === 'true'){
                return true;
            }

            return false;
        }
    )() 
};
