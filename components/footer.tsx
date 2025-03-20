import React from "react";
import Link from "next/link";
import { Epilogue } from "next/font/google";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const epilogue = Epilogue({ subsets: ["latin"], weight: ["400", "700"] });
const Footer = () => {
  return (
			<footer className={`md:hidden py-6  ${epilogue.className} flex items-center justify-center bg-black`}>
						<ul className="flex gap-x-4 items-center">
							<li className="h-[48px] w-[48px] rounded-full flex items-center justify-center bg-[#FF6600] text-white">
								<Link href={"https://facebook.com"}>
									<FaFacebookF />
								</Link>
							</li>
							<li className="h-[48px] w-[48px] rounded-full flex items-center justify-center bg-[#FF6600] text-white">
								<Link href={"https://linkedin.com"}>
									<FaLinkedinIn />
								</Link>
							</li>
							<li className="h-[48px] w-[48px] rounded-full flex items-center justify-center bg-[#FF6600] text-white">
								<Link href={"https://twitter.com"}>
									<BsTwitterX />
								</Link>
							</li>
							<li className="h-[48px] w-[48px] rounded-full flex items-center justify-center bg-[#FF6600] text-white">
								<Link href={"https://instagram.com"}>
									<FaInstagram />
								</Link>
							</li>
						</ul>
			</footer>
		);
};

export default Footer;
