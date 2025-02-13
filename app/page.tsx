import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Epilogue } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
const epilogue = Epilogue({ subsets: ["latin"], weight: ["400", "700"] });

export default function Home() {
	return (
		<main className={`${epilogue.className} mt-18 bg-[#FDF0E9]`}>
			{/* Hero Section */}
			<section className="bg-[#28293E] text-white xl:min-h-screen md:min-h-[60vh] flex flex-col md:flex-row md:items-center justify-between items-start px-5 xl:px-[80px] md:px-[40px] xl:pt-24 md:pt-24 lg:pt-36 pt-36 xl:pb-5 lg:pb-10 md:pb-5 w-full sm:px-2 gap-y-6">
				<div className="basis-full md:basis-[50%] flex flex-col gap-y-8 ">
					<p className="xl:text-[72px] lg:text-[60px] md:text-[45px] text-[32px] font-extrabold lg:leading-[80px] tracking-[-2px] text-white relative">
						<span className="z-20 relative">
							We’ll Help <br /> To Build Your <br /> Dream Project
						</span>
						<Image
							src="/Star.svg"
							alt="icon"
							width={140}
							height={140}
							priority
							className="absolute lg:bottom-[130px] md:bottom-[105px] xl:left-[270px] md:left-[140px] lg:left-[220px]"
						/>
					</p>
					<p className="text-base font-normal leading-8 lg:w-[80%] md:w-[90%] mx-auto md:mx-0">
						Our agency provides a plethora of services including Brand
						management, design, Social media marketing, etc.
					</p>
					<div className="flex gap-x-8 items-center">
						<Link
							href={"/contact"}
							className="text-sm font-black items-center text-[#eeeeee] uppercase  w-[138px] h-[48px] flex  justify-center bg-[#FF6600] rounded-[6px] "
						>
							HOW WE WORK
						</Link>
						<Link href={"/contact"} className="font-normal text-base leading-8">
							{" "}
							Contact Us
						</Link>
					</div>
				</div>
				<div className="basis-full md:basis-[45%] mt-10 md:mt-0">
					<Image
						src={"/hero.png"}
						alt={"hero"}
						width={570}
						height={600}
						priority
						className="aspect-[570/600] mx-auto md:mx-0"
					/>
				</div>
			</section>
			{/* About Section  */}
			<section className="px-5 xl:px-[80px] md:px-[40px] flex flex-col-reverse md:flex-row items-center justify-between py-[55px] gap-y-6">
				<div className="basis-full md:basis-[45%] mb-10 md:mb-0">
					<Image
						src={"/abouth.png"}
						alt={"hero"}
						width={566}
						height={585}
						className="aspect-[566/585] mx-auto md:mx-0"
					/>
				</div>
				<div className="basis-full md:basis-[45%] flex flex-col gap-y-5 ">
					<p className="text-base leading-8 font-normal tracking-[3px] text-[#FF6600]">
						{" "}
						ABOUT
					</p>
					<p className="font-black xl:text-[56px] lg:text-[50px] md:text-[40px] text-[32px] leading-[64px] tracking-[-1px] text-[#391400]">
						{" "}
						Aureate Media
					</p>
					<p className="lg:text-[20px] font-normal leading-8 lg:w-[80%] md:w-[90%] mx-auto md:mx-0 text-[#391400] md:text-lg">
						We empower visionary brands to reach new heights with bold,
						innovative, and authentic marketing solutions.
					</p>
					<Link
						href={"/contact"}
						className="text-sm font-black items-center text-[#391400] uppercase  w-[138px] h-[48px] flex  justify-center bg-white rounded-[6px] mt-5 "
					>
						SEE MORE
					</Link>
				</div>
			</section>
			{/* How we work section */}
			<section className="px-5 xl:px-[80px] md:px-[40px] py-[55px]">
				<p className="tracking-[3px] leading-8 font-normal text-base text-[#EF6D58] mb-5">
					HOW WE WORK
				</p>
				<div className="flex flex-col md:flex-row items-start justify-between">
					<div className="basis-full md:basis-[45%] flex flex-col gap-y-4 md:text-[30px] lg:text-[40px] leading-[40px] md:leading-[48px] font-black">
						We bring Your Ideas <br /> To Fruition through
					</div>
					<div className="text-[#391400] flex flex-col gap-y-9 basis-full md:basis-[50%] mt-5 md:mt-0">
						<p className="flex items-center gap-x-4 md:gap-x-8">
							<span className="font-black leading-[40px] md:leading-[80px] text-[40px] md:text-[70px] tracking-[-1px] md:tracking-[-2px]">
								1
							</span>
							<span className="font-bold tracking-normal leading-[24px] md:leading-[32px] text-xl md:text-2xl">
								Strategy-driven, Creative execution.
							</span>
						</p>
						<p className="flex items-center gap-x-4 md:gap-x-8">
							<span className="font-black leading-[40px] md:leading-[80px] text-[40px] md:text-[72px] tracking-[-1px] md:tracking-[-2px]">
								2
							</span>
							<span className="font-bold tracking-normal leading-[24px] md:leading-[32px] text-xl md:text-2xl">
								Expertise in tech, design, and business.
							</span>
						</p>
						<p className="flex items-center gap-x-4 md:gap-x-8">
							<span className="font-black leading-[40px] md:leading-[80px] text-[40px] md:text-[72px] tracking-[-1px] md:tracking-[-2px]">
								3
							</span>
							<span className="font-bold tracking-normal leading-[24px] md:leading-[32px] text-xl md:text-2xl">
								Being client-centric, results-oriented.
							</span>
						</p>
					</div>
				</div>
			</section>
			{/* Services Section */}
			<section className="px-5 xl:px-[80px] md:px-[40px] pb-[55px]">
				<div className="border-t flex flex-col gap-y-5  py-[55px]">
					<p className="tracking-[3px] leading-8 font-normal text-base text-[#EF6D58] mb-5">
						OUR SERVICES
					</p>
					<p className="basis-full md:basis-[45%] flex flex-col gap-y-4 md:text-[30px] lg:text-[40px] text-[30px] leading-[48px] font-black">
						Our Agency <br /> Can Help With
					</p>
				</div>
				<div>
					<Services />
				</div>
			</section>
			{/* Get started section */}
			<section className="px-5 xl:px-[80px] md:px-[40px] py-[55px] ">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-16  border-black items-center place-items-center">
					<div className="flex flex-col gap-y-4 items-start  ">
						<Image
							src={"/contacticon.png"}
							alt={"icon"}
							width={148}
							height={148}
						/>
						<p className="tracking-[3px] leading-8 font-normal text-base text-[#EF6D58] mb-5">
							GET STARTED
						</p>
						<p className="basis-full md:basis-[45%] flex flex-col gap-y-4 text-2xl leading-[32px] font-bold">
							We Help Companies <br /> Move Faster
						</p>
						<Link
							href={"/contact"}
							className="text-sm font-black items-center text-[#eeeeee] leading-[14.35px] w-[154px] h-[48px] flex justify-center bg-[#FF6600] rounded-[6px]"
						>
							CONTACT US
						</Link>
					</div>
					<div className="">
						<Image src={"/consec1.png"} alt={"icon"} width={338} height={192} />
					</div>
					<div className=" flex justify-center items-center ">
						<Image src={"/consec2.png"} alt={"icon"} width={364} height={447} />
					</div>
				</div>
			</section>
			{/* Get in touch section  */}
			<section className="xl:min-h-[80vh]  md:min-h-[50vh] px-5 xl:px-[80px] md:px-[40px] py-[55px]  bg-cover md:bg-fixed bg-scroll bg-center bg-no-repeat bg-[url('/map.png')] w-full ">
				<div className="bg-white lg:w-[40%] md:w-[55%] p-10 flex flex-col gap-y-5 justify-center ">
					<p className="font-bold text-2xl leading-8 text-[#391400] ">
						Get In Touch
					</p>
					<Input placeholder="Your email" />
					<Select>
						<SelectTrigger>
							<SelectValue placeholder="Select a Service" />
						</SelectTrigger>
						<SelectContent>
							<SelectGroup>
								<SelectLabel>Our Services</SelectLabel>
								<SelectItem value="digital-marketing">
									Digital Marketing
								</SelectItem>
								<SelectItem value="design-services">Design Services</SelectItem>
								<SelectItem value="brand-management">
									Brand Management
								</SelectItem>
								<SelectItem value="social-media-management">
									Social Media Management
								</SelectItem>
								<SelectItem value="branding-brand-strategy">
									Branding & Brand Strategy
								</SelectItem>
								<SelectItem value="website-development-management">
									Website development & Management
								</SelectItem>
							</SelectGroup>
						</SelectContent>
					</Select>{" "}
					<Textarea placeholder="Message" />
					<div className="w-full flex justify-end">
						<Link
							href={"/contact"}
							className="text-sm font-black items-center text-[#eeeeee] leading-[14.35px] w-[154px] h-[48px] flex justify-center bg-[#FF6600] rounded-[6px]"
						>
							CONTACT US
						</Link>
					</div>
				</div>
			</section>
			{/* Contact Section  */}
			<section className="px-5 xl:px-[80px] md:px-[40px] py-[55px] flex justify-center items-center">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 border border-[#F3D1BF]">
					<div className="flex flex-col gap-y-6 border-b md:border-r border-r-[#F3D1BF] p-6">
						<p className="inline-flex items-center gap-x-8">
							<Image src={"/phone.png"} alt={"icon"} width={64} height={64} />
							<span className="tracking-[3px] leading-8 font-normal text-base text-[#EF6D58] ">
								PHONE
							</span>
						</p>
						<Link
							href="tel:+2348179196483"
							className="hover:underline transition-all duration-300 ease-in-out w-fit"
						>
							<h3 className="text-[20px] leading-8 font-normal text-[#391400] ">
								+234 817-919-6483{" "}
							</h3>
						</Link>
					</div>
					<div className="flex flex-col gap-y-6 p-6">
						<p className="inline-flex items-center gap-x-8">
							<Image src={"/email.png"} alt={"icon"} width={64} height={64} />
							<span className="tracking-[3px] leading-8 font-normal text-base text-[#EF6D58]">
								EMAIL
							</span>
						</p>
						<Link
							href="mailto:aureatemediahq@gmail.com"
							className="hover:underline transition-all duration-300 ease-in-out w-fit"
						>
							<h3 className="text-[20px] leading-8 font-normal text-[#391400] ">
								aureatemediahq@gmail.com
							</h3>
						</Link>
					</div>
				</div>
			</section>
			{/* Final Section */}
			<section className="px-5 xl:px-[80px] md:px-[40px] py-[55px]">
				<div className="flex flex-col md:flex-row items-center justify-center bg-[#FF9046] gap-10 py-10 px-5 md:px-0 gap-y-6">
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
		</main>
	);
}

function Services() {
	const services = [
		{
			key: crypto.randomUUID(),
			title: "Design Services",
			description:
				"Create a stunning brand identity. Our expert designers craft compelling designs that captivate your audience.",
			image: "/design.png",
		},
		{
			key: crypto.randomUUID(),
			title: "Website Development & Management",
			description:
				"We build and manage user-friendly websites that drive conversions and grow your business.",
			image: "/web.png",
		},
		{
			key: crypto.randomUUID(),
			title: "Digital Marketing",
			description:
				"Grow your online business. We craft data driven strategies that boost visibility and drive results.",
			image: "/dig.png",
		},
		{
			key: crypto.randomUUID(),
			title: "Brand Management",
			description:
				"We craft compelling brand stories that resonate with your audience and drive lasting impact.",
			image: "/brand.png",
		},
		{
			key: crypto.randomUUID(),
			title: "Social Media Management",
			description:
				"We create engaging content and data-driven strategies that grow your audience and drive results. ",
			image: "/soc.png",
		},
		{
			key: crypto.randomUUID(),
			title: "Branding & Brand Strategy",
			description:
				"We define your brand identity and positioning to drive growth and build lasting connections.",
			image: "/brass.png",
		},
	];
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
			{services.map((service, index) => (
				<div
					key={service.key}
					className={`bg-[#FDF0E9] border border-[#F3D1BF] flex flex-col items-start justify-center gap-y-8 h-[400px] p-10 ${index % 3 !== 2 && index !== services.length - 1 && "xl:border-r-0"} ${index % 2 !== 1 && index !== services.length - 1 && "md:border-r-1"} ${index < services.length - 3 && "xl:border-b-0"} ${index < services.length - 2 && "md:border-b-1"}`}
				>
					<Image
						src={service.image}
						alt={service.title}
						width={80}
						height={80}
					/>
					<p className="font-bold text-2xl leading-8 text-[#391400]">
						{service.title}
					</p>
					<p className="text-base font-normal leading-[26px] text-[#391400A3]">
						{service.description}
					</p>
				</div>
			))}
		</div>
	);
}
