import type { Metadata } from "next";
import "./globals.css";
import { Epilogue } from "next/font/google";
import Navbar from "../components/nav";
import Footer from "@/components/footer";

const epilogue = Epilogue({
	variable: "--font-epilogue",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Aureate Media",
	description: "Our agency provides a plethora of services including Brand management, design, Social media marketing, SEO and more.",
	keywords: [
		"Tech Agency",
		"Branding",
		"Website",
		"Social Media",
		"Content Creation",
		"Digital Marketing",
		"SEO",
		"UI/UX Design",
	],
	robots: "index, follow",
	metadataBase: new URL('https://aureate-three.vercel.app/'),
	openGraph: {
		title: "Aureate Media",
		description: "Our agency provides a plethora of services including Brand management, design, Social media marketing, SEO and more.",
		url: "https://aureate-three.vercel.app/",
		type: "website",
		images: [
			{
				url: "/favicon.png",
				width: 600,
				height: 500,
				alt: "Aureate Media",
			},
		],
	},
	icons: {
		icon: "/favicon.png",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${epilogue.variable}  antialiased bg-black`}>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
