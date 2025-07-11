export default function AuthLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<main className="min-h-screen text-white flex items-center justify-center">
			<div className="w-full max-w-xl">{children}</div>
		</main>
	);
}
