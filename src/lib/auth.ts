import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { nextCookies } from 'better-auth/next-js';
import { anonymous, openAPI } from 'better-auth/plugins';
import { db } from '@/drizzle/db';
import { schema } from '@/drizzle/schema';

export const auth = betterAuth({
	emailAndPassword: {
		enabled: true,
	},
	socialProviders: {
		google: {
			clientId: process.env.GOOGLE_CLIENT_ID || '',
			clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
		},
		github: {
			clientId: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID as string,
			clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
		},
	},

	database: drizzleAdapter(db, {
		provider: 'pg',
		schema: schema,
	}),
	plugins: [nextCookies(), openAPI(), anonymous()],
});
