import type React from "react";
import { Epilogue } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const epilogue = Epilogue({ subsets: ["latin"], weight: ["400", "700"] });

const AboutPage: React.FC = () => {
	return (
		<main className={`${epilogue.className} mt-18 bg-[#FDF0E9]`}>
			{/* Hero Section */}
			<section className="bg-[#28293E] text-white  flex flex-col items-center px-5 xl:px-[80px] md:px-[40px] xl:pt-[120px] md:pt-24 lg:pt-36 pt-[7rem] md:pb-16 pb-10 w-full sm:px-2 ">
				<div className=" flex flex-col gap-y-5 items-center justify-center">
					<p className="xl:text-[72px] lg:text-[60px] md:text-[55px] text-[40px] font-extrabold lg:leading-[80px] tracking-[-2px] text-white">
						About
					</p>
					<p className="text-base font-normal text-center leading-8 lg:w-[60%] md:w-[70%] w-full">
						We empower visionary brands to reach new heights with bold,
						innovative, and authentic marketing solutions.
					</p>
				</div>
			</section>

			<section className="px-5 xl:px-[80px] md:px-[40px] py-[55px]">
				<p className="tracking-[3px] leading-8 font-normal text-base text-[#EF6D58] mb-6">
					ABOUT
				</p>
				<div className="flex flex-col md:flex-row items-start justify-between gap-y-8">
					<div className="basis-full md:basis-[45%] flex flex-col gap-y-4 md:text-[30px] text-[32px] lg:text-[40px] leading-[40px] md:leading-[48px] font-black text-[#391400]">
						Aureate <br /> Media
					</div>
					<div className="text-[#391400A3] flex flex-col gap-y-5 basis-full md:basis-[50%] mt-5 md:mt-0">
						<p className="font-normal tracking-normal leading-8  text-base">
							Ability to put themselves in the merchant&apos;s shoes. It is
							meant to partner on the long run, and work as an extension of the
							merchant&apos;s team.
						</p>

						<p className="font-normal tracking-normal leading-8  text-base text-[#391400A3]">
							{" "}
							A digital agency is a business you hire to outsource your digital
							marketing efforts, instead of handling in-house. They can provide
							your business with a variety of digital solutions to promote your
							product or service online and help you.
						</p>
					</div>
				</div>
			</section>

			<section className="px-5 xl:px-[80px] md:px-[40px] py-[55px] pb-10 flex flex-col md:flex-row items-center gap-5">
				<div className="md:basis-[50%] basis-full">
					<Image src={"/about1.png"} alt={"icon"} width={570} height={448}  />
				</div>
				<div className="md:basis-[50%] basis-full md:flex flex-col gap-y-5 hidden">
					<div className="flex flex-col md:flex-row items-center gap-5">
						<Image src={"/about2.png"} alt={"icon"} width={270} height={208} className="w-full h-auto md:w-[270px]" />
						<Image src={"/about3.png"} alt={"icon"} width={270} height={208} className="w-full h-auto md:w-[270px]" />
					</div>
					<div className="flex flex-col md:flex-row items-center gap-5">
						<Image src={"/about4.png"} alt={"icon"} width={270} height={208} className="w-full h-auto md:w-[270px]" />
						<Image src={"/about5.png"} alt={"icon"} width={270} height={208} className="w-full h-auto md:w-[270px]" />
					</div>
				</div>
			</section>

			<section className="px-5 xl:px-[80px] md:px-[40px] pt-[55px] bg-[#28293E] relative">
				<div className="flex flex-col md:flex-row items-center justify-center bg-[#FF9046] gap-10 py-10 px-5 md:px-0 gap-y-6 relative top-10">
					<div className="basis-full md:basis-[45%] flex flex-col gap-y-5">
						<p className="font-black xl:text-[56px] lg:text-[50px] md:text-[40px] text-[32px] lg:leading-[64px] md:leading-[50px] tracking-[-1px] text-white">
							We’re Here <br /> To Build Your Dream Project
						</p>
						<p className="font-normal lg:leading-8 md:leading-6 md:w-[90%] w-full text-white text-base">
							A digital agency is a business you hire to outsource your digital
							marketing efforts, instead of handling in-house.
						</p>
						<Link
							href={"/contact"}
							className="text-sm font-black items-center text-[#391400] w-[138px] h-[48px] flex justify-center bg-white rounded-[6px] mt-5"
						>
							CONTACT US
						</Link>
					</div>
					<div className="basis-full md:basis-[45%] flex justify-center">
						<Image
							src={"/final.png"}
							alt={"hero"}
							width={443}
							height={431}
							className="aspect-[443/431]"
						/>
					</div>
				</div>
			</section>
				<section className="px-[80px]  py-[50px]  "/>

		</main>
	);
};

export default AboutPage;
