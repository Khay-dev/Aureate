"use client";
import { Epilogue } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { HiOutlineMenuAlt4, HiX } from "react-icons/hi";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

interface Menu {
	title: string;
	link: string;
}

const epilogue = Epilogue({ subsets: ["latin"], weight: ["400", "700"] });

const menu: Menu[] = [
	{ title: "About Us", link: "/about" },
	{ title: "Services", link: "/services" },
	{ title: "Contact", link: "/contact" },
];

const Navbar = () => {
	const pathname = usePathname(); // Get the current route
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};


	return (
		<header className="relative">
			<div className={`${epilogue.className} bg-black  px-5 lg:px-[50px] md:px-[40px] py-4 fixed top-0 left-0 w-screen z-50`}>
				<div className="flex justify-between items-center">
					{/* Logo */}

					<Link href="/" className="uppercase tracking-wider text-2xl font-medium">
						<Image src={"/logo.png"} alt={"logo"} width={140} height={34} priority />
					</Link>

					{/* Show nav only if NOT on the home page */}
					{pathname !== "/" && (
						<nav className="hidden md:flex items-center gap-x-28">
							{menu.map((item) => (
								<div className="group relative" key={item.title}>
									<Link href={item.link} className="text-base leading-[32px] text-white font-normal hover:border-b border-black transition-all duration-200 ease-in-out">
										{item.title}
									</Link>
								</div>
							))}
						</nav>
					)}

					{/* Social Links */}
					<ul className="md:flex gap-x-4 items-center hidden ">
						<li className="h-[45px] w-[45px] rounded-full flex items-center justify-center bg-[#FF6600] text-white">
							<Link href="https://facebook.com">
								<FaFacebookF />
							</Link>
						</li>
						<li className="h-[45px] w-[45px] rounded-full flex items-center justify-center bg-[#FF6600] text-white">
							<Link href="https://linkedin.com">
								<FaLinkedinIn />
							</Link>
						</li>
						<li className="h-[45px] w-[45px] rounded-full flex items-center justify-center bg-[#FF6600] text-white">
							<Link href="https://twitter.com">
								<BsTwitterX />
							</Link>
						</li>
						<li className="h-[45px] w-[45px] rounded-full flex items-center justify-center bg-[#FF6600] text-white">
							<Link href="https://instagram.com">
								<FaInstagram />
							</Link>
						</li>
					</ul>

					{/* Burger Menu (Always Visible) */}
					<div className="flex md:hidden">
						<button type="button" onClick={toggleMenu} className="p-1 border rounded-md">
							<HiOutlineMenuAlt4 className="text-2xl text-white" />
						</button>
					</div>

					{/* Mobile Menu */}
					<div
						className={`fixed bg-black  top-0 right-0 min-h-[50vh] py-8 px-5 flex flex-col items-center md:hidden w-[70vw] z-40 gap-y-10 
    transform transition-transform duration-500 ease-in-out 
    ${menuOpen ? "translate-x-0  pointer-events-auto" : "translate-x-full pointer-events-none"}`}
					>
						{/* Close Button */}
						<button type="button" onClick={toggleMenu} className="w-full flex justify-end ">
							<HiX className="text-3xl text-white p-1 border rounded-md " />
						</button>

						{/* Menu Items */}
						{menu.map((item) => (
							<Link key={item.title} href={item.link} className="text-[30px]  font-extrabold text-white">
								{item.title}
							</Link>
						))}
					</div>

				</div>
			</div>
		</header>
	);
};

export default Navbar;
