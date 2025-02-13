"use client";
import { Epilogue } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React, {useState } from "react";
import { HiOutlineMenuAlt4, HiX } from "react-icons/hi";

interface Menu {
  title: string;
  link: string;
}

const epilogue = Epilogue({ subsets: ["latin"], weight: ["400", "700"] });

const menu: Menu[] = [
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Services",
    link: "/services",
  }
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(() => {
      setIsMenuOpen(false);
      setIsExiting(false);
    }, 500);
  };


  return (
			<header className="relative ">
				<div
					className={`${
						epilogue.className
					} bg-[#28293E]  px-5 lg:px-[80px] md:px-[40px] py-4   fixed top-0 left-0 w-screen z-50 `}
				>
					<div className="flex justify-between items-center">
						<div>
							<Link
								href="/"
								className="uppercase tracking-wider text-2xl font-medium"
							>
								<Image src={"/logo.svg"} alt={"logo"} width={140} height={34} />
							</Link>
						</div>
						<nav className="hidden md:flex items-center gap-x-28">
							{menu.map((item) => (
								<div className="group relative " key={item.title}>
									<Link
										href={item.link}
										className="text-base leading-[32px] items-center text-white font-normal hover:border-b border-black transition-all duration-200 ease-in-out w-fit flex gap-x-1"
									>
										{item.title}
									</Link>
									<span className="absolute inset-x-0 bottom-0 h-[1px] scale-x-0 bg-white origin-bottom-right transition-transform duration-200 ease-out group-hover:scale-x-100 group-hover:origin-bottom-left" />
								</div>
							))}
						</nav>
						<Link
							href={"/contact"}
							className="text-sm font-black items-center text-[#eeeeee] uppercase border w-[138px] h-[48px] md:flex  justify-center gap-x-1 rounded-md hidden"
						>
							Contact
						</Link>
						<div className="flex md:hidden">
							<button type="button" onClick={toggleMenu}>
								{isMenuOpen ? (
									<HiX className="text-3xl text-white" />
								) : (
									<HiOutlineMenuAlt4 className="text-3xl text-white" />
								)}
							</button>
						</div>
					</div>
				</div>
				{/* Side menu */}
				{isMenuOpen && (
					<div
						className={`${
							isExiting ? "animate-slideRight" : "animate-slideLeft"
						} fixed bg-[#28293E]  top-[60px] h-screen py-8 px-5 flex flex-col items-end md:hidden w-full z-40`}
					>
						{menu.map((item) => (
							<Link
								href={item.link}
								key={item.title}
								className="text-[42px] uppercase font-medium  flex items-center gap-x-2 text-white"
								onClick={() => setIsMenuOpen(false)}
							>
								{item.title}
							</Link>
						))}
						<Link
							href={"/contact"}
							className="text-[42px] uppercase font-medium  flex items-center gap-x-2 text-white"
							onClick={() => setIsMenuOpen(false)}
						>
							Contact
						</Link>
						<Link
							href=""
							className="uppercase text-base text-white mt-10"
							onClick={handleClose} // Close menu on click
						>
							Linkedin
						</Link>
					</div>
				)}
			</header>
		);
};

export default Navbar;
