import type React from "react";
import { Epilogue } from "next/font/google";
import type { EmblaOptionsType } from "embla-carousel";
import Brands from "@/components/carousel";

const OPTIONS: EmblaOptionsType = { loop: true }
const SLIDES = [
	"/brand1.png",
	"/brand2.png",
	"/brand3.png",
	"/brand4.png",
	"/brand5.png",
	"/brand6.png",
]

const epilogue = Epilogue({ subsets: ["latin"], weight: ["400", "700"] });

const AboutPage: React.FC = () => {
	return (
		<main className={`${epilogue.className} mt-18 bg-black container mx-auto `}>
			{/* Hero Section */}
			<section className="text-white flex flex-col items-center xl:px-[80px] md:px-[40px] xl:pt-[120px] md:pt-24 lg:pt-36 pt-[7rem] md:pb-16 pb-10 w-full ">
				<div className=" flex gap-y-5 items-center justify-center text-center 
				">
					<p className="xl:text-[72px] lg:text-[60px] md:text-[55px] text-[40px] font-extrabold lg:leading-[80px] tracking-[-2px] text-white ">
						About Us
					</p>
				</div>
			</section>

			<section className="px-3 xl:px-[80px] md:px-[40px] flex justify-center items-center w-full ">
				<div className="flex flex-col gap-y-5 justify-center items-center lg:w-[55%] md:w-[85%] w-full text-white text-center">
					<p>At Aureate Media, we empower brands to reach new heights by shouldering the weight of marketing, amplifying their brand voice, and driving brand momentum. Our vision is to forge a new standard in marketing excellence, one that is tailored to the unique needs of our clients. </p>

					<p>	We believe in empowering small to medium-sized businesses, entrepreneurs, and established companies to reach new heights, whether that is scaling marketing efforts, establishing a strong brand presence, or expanding into new markets.
					</p>


					<p>	Our approach is built on a foundation of boldness, innovation, authenticity, empathy, and a relentless drive for results. We are not afraid to take risks, challenge the status quo, and push the boundaries of what&apos;s possible</p>
				</div>
			</section>

			<section className=" xl:px-[80px] md:px-[40px] py-[55px] pb-10 flex flex-col  items-center gap-8">
				<p className="text-white md:text-[50px] text-[30px] text-center font-extrabold md:leading-[80px] leading-[40px]">These brands trust us!</p>
				<Brands slides={SLIDES} options={OPTIONS} />
			</section>


		</main>
	);
};

export default AboutPage;
