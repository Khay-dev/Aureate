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
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${epilogue.variable}  antialiased`}>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
