import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<main className="bg-[#FDF0E9]">
			{/* Hero Section */}
			<section className="bg-[#28293E] text-white xl:min-h-screen md:min-h-[60vh]  flex justify-between items-center px-5 xl:px-[80px] md:px-[40px] xl:pt-24 md:pt-24 lg:pt-36 xl:pb-5 lg:pb-10 md:pb-5 w-full sm:px-2">
				<div className="basis-[50%] flex flex-col gap-y-8  ">
					<p className="xl:text-[72px] lg:text-[60px] md:text-[45px] font-extrabold leading-[80px] tracking-[-2px] text-white relative">
						<span className="z-20 relative">
							We’ll Help <br /> To Build Your <br /> Dream Project
						</span>
						<Image
							src="/Star.svg"
							alt="icon"
							width={140}
							height={140}
							className="absolute bottom-[130px] xl:left-[300px] md:left-[160px] lg:left-[240px]"
						/>
					</p>
					<p className="text-base font-normal leading-8 lg:w-[80%] md:w-[90%]">
						Our agency provides a plethora of services including Brand
						management, design, Social media marketing, etc.
					</p>
					<div className="flex gap-x-8 items-center">
						<Link
							href={"/contact"}
							className="text-sm font-black items-center text-[#eeeeee] uppercase  w-[138px] h-[48px] md:flex  justify-center bg-[#FF6600] rounded-[6px] "
						>
							HOW WE WORK
						</Link>
						<Link href={"/contact"} className="font-normal text-base leading-8">
							{" "}
							Contact Us
						</Link>
					</div>
				</div>
				<div className="basis-[45%]">
					<Image
						src={"/hero.png"}
						alt={"hero"}
						width={570}
						height={600}
						className="aspect-[570/600]"
					/>
				</div>
			</section>
			{/* About Section  */}

			<section className="px-5 xl:px-[80px] md:px-[40px] flex items-center justify-between py-[55px]">
				<div className="basis-[45%]">
					<Image
						src={"/abouth.png"}
						alt={"hero"}
						width={566}
						height={585}
						className="aspect-[566/585]"
					/>
				</div>
				<div className="basis-[45%] flex flex-col gap-y-5">
					<p className="text-base leading-8 font-normal tracking-[3px] text-[#FF6600]">
						{" "}
						ABOUT
					</p>
					<p className="font-black xl:text-[56px] lg:text-[50px] md:text-[40px] leading-[64px] tracking-[-1px] text-[#391400]">
						{" "}
						Aureate Media
					</p>
					<p className="font-normal text-[#391400] leading-8 lg:text-[20px] tracking-[0] md:text-base lg:w-[80%] md:w-[90%]">
						We empower visionary brands to reach new heights with bold,
						innovative, and authentic marketing solutions.
					</p>
					<Link
						href={"/contact"}
						className="text-sm font-black items-center text-[#391400] uppercase  w-[138px] h-[48px] md:flex  justify-center bg-white  rounded-[6px] mt-5 "
					>
						SEE MORE
					</Link>
				</div>
			</section>

	<section> 
		</section>	
		</main>
	);
}
