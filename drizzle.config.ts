import { defineConfig } from "drizzle-kit";

// Drizzle Kitが使用するスキーマと接続先
export default defineConfig({
    schema: "./lib/schema.ts",
    dialect: "sqlite",
    dbCredentials: {
        url: "file:reading_log.db",
    },
    verbose: true,
    strict: true,
});