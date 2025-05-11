import { drizzle } from "drizzle-orm/libsql";
import * as schema from "./schema/auth-schema";

export const db = drizzle(process.env.DATABASE_URL!, { schema: { ...schema } });
