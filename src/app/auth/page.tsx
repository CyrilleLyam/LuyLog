'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'sonner';
import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { authClient } from '@/lib/auth-client';

export default function Page() {
	const [loading, setLoading] = useState(false);
	const router = useRouter();

	const handleSignIn = async (provider: 'google' | 'github') => {
		if (loading) return;
		setLoading(true);

		try {
			await authClient.signIn.social(
				{
					provider,
					callbackURL: '/',
				},
				{
					onRequest: () => setLoading(true),
					onSuccess: () => {
						toast.success('Signed in successfully');
						router.push('/');
					},
					onError: (ctx) => {
						const message = ctx.error.message || 'Sign in failed';
						toast.error(message);
					},
				},
			);
		} catch (err) {
			console.error('Unhandled sign-in error:', err);
			toast.error('Something went wrong. Please try again.');
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="min-h-screen flex items-center justify-center px-4">
			<div className="w-full max-w-md space-y-6 border rounded-lg p-6 shadow-sm bg-background">
				<div className="text-center space-y-1">
					<h2 className="text-2xl font-semibold">Welcome back</h2>
					<p className="text-sm text-muted-foreground">Choose a sign-in method to continue</p>
				</div>

				<div className="flex gap-4">
					<Button
						variant="outline"
						className="flex-1"
						onClick={() => handleSignIn('github')}
						disabled={loading}
					>
						<Icons.gitHub className="w-4 h-4 mr-2" />
						{loading ? 'Loading...' : 'GitHub'}
					</Button>

					<Button
						variant="outline"
						className="flex-1"
						onClick={() => handleSignIn('google')}
						disabled={loading}
					>
						<Icons.google className="w-4 h-4 mr-2" />
						{loading ? 'Loading...' : 'Google'}
					</Button>
				</div>
			</div>
		</div>
	);
}
