import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_USER, PORT } from '@/lib/get-env';

const pool = new Pool({
	user: DB_USER,
	password: DB_PASSWORD,
	port: PORT,
	database: DB_NAME,
	host: DB_HOST,
});

export const db = drizzle({ client: pool });
