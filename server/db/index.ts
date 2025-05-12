import { drizzle } from "drizzle-orm/libsql";
import * as schema from "./schema/auth-schema";

export const db = drizzle({
  connection: {
    url: process.env.DATABASE_URL!,
    authToken: process.env.DATABASE_AUTH_TOKEN!,
  },
  schema: { ...schema },
});
