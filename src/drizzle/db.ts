import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';

const pool = new Pool({
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	port: Number(process.env.PORT),
	database: process.env.DB_NAME,
	host: process.env.DB_HOST,
});

export const db = drizzle({ client: pool });
