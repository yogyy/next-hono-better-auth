import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: process.env.NODE_ENV === "development" ? "sqlite" : "turso",
  schema: "./server/db/schema/*.ts",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
    authToken: process.env.DATABASE_AUTH_TOKEN,
  },
  out: "./drizzle",
});
