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
	openGraph: {
		title: "Aureate Media",
		description: "Our agency provides a plethora of services including Brand management, design, Social media marketing, SEO and more.",
		url: "https://aureate-three.vercel.app/",
		type: "website",
		images: [
			{
				url: "https://aureate-three.vercel.app/logo2.svg",
				width: 600,
				height: 500,
				alt: "Aureate Media",
			},
		],
	},
	icons: {
		icon: "https://aureate-three.vercel.app/logo2.svg",
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
