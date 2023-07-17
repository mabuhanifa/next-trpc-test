import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

const client = postgres(String(process.env.DB_URL));

const db = drizzle(client);

export default db;
