import type React from "react";
import { Epilogue } from "next/font/google";

const epilogue = Epilogue({ subsets: ["latin"], weight: ["400", "700"] });

const AboutPage: React.FC = () => {
	return (
		<main className={`${epilogue.className} mt-18 bg-[#FDF0E9]`}>
			{/* Hero Section */}
			<section className="bg-[#28293E] text-white  flex flex-col items-center px-5 xl:px-[80px] md:px-[40px] xl:pt-[130px] md:pt-24 lg:pt-36 pt-[7rem] md:pb-16 pb-10 w-full sm:px-2 ">
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
		</main>
	);
};

export default AboutPage;
