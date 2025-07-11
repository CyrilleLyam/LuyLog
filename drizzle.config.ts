import { defineConfig } from 'drizzle-kit';
import 'dotenv/config';

export default defineConfig({
	out: './drizzle',
	schema: './src/drizzle/schema.ts',
	dialect: 'postgresql',
	dbCredentials: {
		url: `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.PORT}/${process.env.DB_NAME}`,
	},
});
