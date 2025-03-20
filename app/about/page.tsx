import type React from "react";
import { Epilogue } from "next/font/google";
import Image from "next/image";

const epilogue = Epilogue({ subsets: ["latin"], weight: ["400", "700"] });

const AboutPage: React.FC = () => {
	return (
		<main className={`${epilogue.className} mt-18 bg-black`}>
			{/* Hero Section */}
			<section className="text-white flex flex-col items-center px-5 xl:px-[80px] md:px-[40px] xl:pt-[120px] md:pt-24 lg:pt-36 pt-[7rem] md:pb-16 pb-10 w-full sm:px-2 ">
				<div className=" flex gap-y-5 items-center justify-center text-center 
				">
					<p className="xl:text-[72px] lg:text-[60px] md:text-[55px] text-[40px] font-extrabold lg:leading-[80px] tracking-[-2px] text-white ">
						About Us
					</p>
				</div>
			</section>

			<section className="px-5 xl:px-[80px] md:px-[40px] flex justify-center items-center w-full ">
				<div className="flex flex-col gap-y-5 justify-center items-center lg:w-[55%] md:w-[85%] w-full text-white text-center">
					<p>At Aureate Media, we empower brands to reach new heights by shouldering the weight of marketing, amplifying their brand voice, and driving brand momentum. Our vision is to forge a new standard in marketing excellence, one that is tailored to the unique needs of our clients. </p>

					<p>	We believe in empowering small to medium-sized businesses, entrepreneurs, and established companies to reach new heights, whether that is scaling marketing efforts, establishing a strong brand presence, or expanding into new markets.
					</p>


					<p>	Our approach is built on a foundation of boldness, innovation, authenticity, empathy, and a relentless drive for results. We are not afraid to take risks, challenge the status quo, and push the boundaries of what&apos;s possible</p>
				</div>
			</section>

			<section className="px-5 xl:px-[80px] md:px-[40px] py-[55px] pb-10 flex flex-col md:flex-row items-center gap-5">
				<div className="md:basis-[50%] basis-full">
					<Image src={"/about1.png"} alt={"icon"} width={570} height={448} />
				</div>
				<div className="md:basis-[50%] basis-full md:flex flex-col gap-y-5 hidden">
					<div className="flex flex-col md:flex-row justify-center items-center gap-5">
						<Image src={"/about2.png"} alt={"icon"} width={270} height={208}  />
						<Image src={"/about3.png"} alt={"icon"} width={270} height={208}  />
					</div>
					<div className="flex flex-col md:flex-row justify-center items-center gap-5">
						<Image src={"/about4.png"} alt={"icon"} width={270} height={208}  />
						<Image src={"/about5.png"} alt={"icon"} width={270} height={208}  />
					</div>
				</div>
			</section>


		</main>
	);
};

export default AboutPage;
