import { CorsOptions } from "cors";
import { core_config } from "@/config/core";

export const cors_options = {
    methods: ["GET", "POST", "PATCH", "DELETE"],
    origin: core_config.allow_origins(),
    credentials: true,
} satisfies CorsOptions;