import React from "react";
import Link from "next/link";
import { Epilogue } from "next/font/google";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const epilogue = Epilogue({ subsets: ["latin"], weight: ["400", "700"] });
const Footer = () => {
  return (
		<footer className={`md:hidden py-6  ${epilogue.className} flex items-center justify-center bg-black container mx-auto`}>
						<ul className="flex gap-x-4 items-center">
							<li className="h-[48px] w-[48px] rounded-full flex items-center justify-center bg-[#FF6600] text-white transition-all duration-300 hover:bg-[#FF944D] hover:-translate-y-1 ">
					<Link href={"https://www.facebook.com/share/1EDuWXtW23/?mibextid=wwXIfr"} rel="noopener noreferrer" target="_blank">
									<FaFacebookF />
								</Link>
							</li>
							<li className="h-[48px] w-[48px] rounded-full flex items-center justify-center bg-[#FF6600] text-white transition-all duration-300 hover:bg-[#FF944D] hover:-translate-y-1">
					<Link href={"https://www.linkedin.com/company/aureatemedia/"} rel="noopener noreferrer" target="_blank">
									<FaLinkedinIn />
								</Link>
							</li>
							<li className="h-[48px] w-[48px] rounded-full flex items-center justify-center bg-[#FF6600] text-white transition-all duration-300 hover:bg-[#FF944D] hover:-translate-y-1">
					<Link href={"https://x.com/aureatemedia"} rel="noopener noreferrer" target="_blank">
									<BsTwitterX />
								</Link>
							</li>
							<li className="h-[48px] w-[48px] rounded-full flex items-center justify-center bg-[#FF6600] text-white transition-all duration-300 hover:bg-[#FF944D] hover:-translate-y-1">
					<Link href={"https://www.instagram.com/aureatemedia"} rel="noopener noreferrer" target="_blank">
									<FaInstagram />
								</Link>
							</li>
						</ul>
			</footer>
		);
};

export default Footer;
