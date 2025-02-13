import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Epilogue } from "next/font/google";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const epilogue = Epilogue({ subsets: ["latin"], weight: ["400", "700"] });
const Footer = () => {
  const menuItem = [
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Service",
      path: "/services",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ];

  return (
    <footer className={`py-6 bg-[#FDF0E9] ${epilogue.className}`}>
      <section className="mx-4 lg:mx-16 h-[1px]" />
      <div className="px-5 xl:px-[80px] md:px-[40px] pb-[55px] flex flex-col md:flex-row justify-between items-start">
        <div className="mb-6 md:mb-0">
          <Image
            src={"/logo2.svg"}
            width={140}
            height={34}
            alt="Logo"
            className="w-auto lg:h-[60px] md:h-[25px] h-[30.63px]"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-y-10 md:gap-y-0 gap-x-20 items-start">
          <ul className="flex flex-col gap-y-1 ">
            <p className="tracking-[3px] leading-8 font-normal text-base text-[#EF6D58] mb-1">
              MENU
            </p>
            {menuItem.map((item) => (
              <li key={item.title}>
                <Link
                  href={item.path}
                  className="font-aeonikRegular text-xl text-[#999999] hover:text-[#262626] transition-all duration-300 ease-in-out"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
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
        </div>
      </div>
      <div className="px-5 xl:px-[80px] md:px-[40px] text-center md:text-left">
        <p className="font-aeonikRegular text-xl text-[#999999]">
          Copyright © Aureate Media {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
