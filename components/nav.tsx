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
			<div className={`${epilogue.className} bg-black lg:px-[50px] md:px-[40px] py-5 fixed top-0 left-0 w-full z-50`}>
				<div className="flex justify-between items-center container ">
					{/* Logo */}

					<Link href="/" className="uppercase tracking-wider text-2xl font-medium flex items-center">
						<Image
							src={"/logo3.png"}
							alt={"logo"}
							width={130}
							height={35}
							priority
							className="object-contain"
						/>
					</Link>

					{/* Show nav only if NOT on the home page */}
					{pathname !== "/" && (
						<nav className="hidden md:flex items-center lg:gap-x-16 xl:gap-x-28 md:gap-x-5">
							{menu.map((item) => (
								<div className="group relative" key={item.title}>
									<Link href={item.link} className="text-base leading-[32px] text-white font-normal  transition-all duration-200 ease-in-out">
										{item.title}
									</Link>
									<span className="absolute inset-x-0 bottom-0 h-[1px] scale-x-0 bg-white origin-bottom-right transition-transform duration-200 ease-out group-hover:scale-x-100 group-hover:origin-bottom-left" />
								</div>
							))}
						</nav>
					)}

					{/* Social Links */}
					<ul className="md:flex gap-x-4 items-center hidden ">
						<li className="lg:h-[45px] lg:w-[45px] md:h-[35px] md:w-[35px] rounded-full flex items-center justify-center bg-[#FF6600] text-white transition-all duration-300 hover:bg-[#FF944D] hover:-translate-y-1">
							<Link href={"https://www.facebook.com/share/1EDuWXtW23/?mibextid=wwXIfr"} rel="noopener noreferrer" target="_blank">
								<FaFacebookF />
							</Link>
						</li>

						<li className="lg:h-[45px] lg:w-[45px] md:h-[35px] md:w-[35px] rounded-full flex items-center justify-center bg-[#FF6600] text-white transition-all duration-300 hover:bg-[#FF944D] hover:-translate-y-1">
							<Link href={"https://www.linkedin.com/company/aureatemedia/"} rel="noopener noreferrer" target="_blank">
								<FaLinkedinIn />
							</Link>
						</li>
						<li className="lg:h-[45px] lg:w-[45px] md:h-[35px] md:w-[35px] rounded-full flex items-center justify-center bg-[#FF6600] text-white transition-all duration-300 hover:bg-[#FF944D] hover:-translate-y-1">
							<Link href={"https://x.com/aureatemedia"} rel="noopener noreferrer" target="_blank">
								<BsTwitterX />
							</Link>
						</li>
						<li className="lg:h-[45px] lg:w-[45px] md:h-[35px] md:w-[35px] rounded-full flex items-center justify-center bg-[#FF6600] text-white transition-all duration-300 hover:bg-[#FF944D] hover:-translate-y-1">
							<Link href={"https://www.instagram.com/aureatemedia"} rel="noopener noreferrer" target="_blank">
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
							<Link
								key={item.title}
								onClick={() => setMenuOpen(false)}
								className="text-[30px] font-extrabold text-white"
								href={item.link}							>
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
