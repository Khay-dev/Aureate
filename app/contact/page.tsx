import type React from "react";
import Image from "next/image";
import Link from "next/link";
import { Epilogue } from "next/font/google";
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
const epilogue = Epilogue({ subsets: ["latin"], weight: ["400", "700"] });

const ContactPage: React.FC = () => {
	return (
		<main className={`${epilogue.className} mt-18 bg-[#FDF0E9]`}>
			{/* Hero Section */}
			<section className="bg-[#28293E] text-white  flex flex-col items-center px-5 xl:px-[80px] md:px-[40px] xl:pt-[120px] md:pt-24 lg:pt-36 pt-[7rem] md:pb-16 pb-10 w-full sm:px-2 ">
				<div className=" flex flex-col gap-y-5 items-center justify-center">
					<p className="xl:text-[72px] lg:text-[60px] md:text-[55px] text-[40px] font-extrabold lg:leading-[80px] tracking-[-2px] text-white">
						Contact
					</p>
					<p className="text-base font-normal text-center leading-8 lg:w-[60%] md:w-[70%] w-full">
						Agency provides a full service range including technical skills,
						design, business understanding.
					</p>
				</div>
			</section>
			<section className="xl:min-h-[80vh]  md:min-h-[50vh] px-5 xl:px-[80px] md:px-[40px] py-[55px]  bg-cover md:bg-fixed bg-scroll bg-center bg-no-repeat bg-[url('/map.png')] w-full ">
				<div className="bg-white lg:w-[40%] md:w-[55%] p-10 flex flex-col gap-y-5 justify-center ">
					<p className="font-bold text-2xl leading-8 text-[#391400] ">
						Get In Touch
					</p>
					<Input placeholder="Full name" />
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
					<Textarea placeholder=" A short brief about your project." />
					<div className="w-full flex justify-end">
						<Link
							href={"/contact"}
							className="text-sm font-black items-center text-[#eeeeee] leading-[14.35px] w-[154px] h-[48px] flex justify-center bg-[#FF6600] rounded-[6px]"
						>
							SUBMIT
						</Link>
					</div>
				</div>
			</section>
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
		</main>
	);
};

export default ContactPage;
