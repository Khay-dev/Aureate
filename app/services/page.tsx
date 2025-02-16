import type React from "react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Epilogue } from "next/font/google";
import Image from "next/image";

const epilogue = Epilogue({ subsets: ["latin"], weight: ["400", "700"] });

const ServicePage: React.FC = () => {
	return (
		<main className={`${epilogue.className} mt-18 bg-[#FDF0E9]`}>
			{/* Hero Section */}
			<section className="bg-[#28293E] text-white  flex flex-col items-center px-5 xl:px-[80px] md:px-[40px] xl:pt-[120px] md:pt-24 lg:pt-36 pt-[7rem] md:pb-16 pb-10 w-full sm:px-2 ">
				<div className=" flex flex-col gap-y-5 items-center justify-center">
					<p className="xl:text-[72px] lg:text-[60px] md:text-[55px] text-[40px] font-extrabold lg:leading-[80px] tracking-[-2px] text-white">
						Our Services
					</p>
					<p className="text-base font-normal text-center leading-8 lg:w-[60%] md:w-[70%] w-full">
						Agency provides a full service range including technical skills,
						design, business understanding.
					</p>
				</div>
			</section>
			<section className="px-5 xl:px-[80px] md:px-[40px] py-[55px]">
				<p className="tracking-[3px] leading-8 font-normal text-base text-[#EF6D58] mb-6">
					SERVICES
				</p>
				<div className="flex flex-col md:flex-row items-start justify-between gap-y-8">
					<div className="basis-full md:basis-[45%] flex flex-col gap-y-4 md:text-[30px] text-[32px] lg:text-[40px] leading-[40px] md:leading-[48px] font-black text-[#391400]">
						Digital agency is a business you hire to outsource your digital
						marketing efforts
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
			<section className="px-5 xl:px-[80px] md:px-[40px] py-[55px]">
				{" "}
				<Accordion type="single" collapsible className="w-full text-[#391400]">
					<AccordionItem value="item-1" className="py-5">
						<AccordionTrigger>
							<p className="inline-flex items-center md:gap-x-7 gap-x-4">
								<Image
									src={"/design.png"}
									alt={"icon"}
									width={50}
									height={50}
								/>
								<span
									className="md:text-[40px] lg:text-[50px] text-[23px] md:leading-[64px] leading-8 font-extrabold w-fit"
									title="Design Services"
								>
									{" "}
									Design Services
								</span>
							</p>
						</AccordionTrigger>
						<AccordionContent className=" text-[#391400A3] flex justify-end py-[40px] ">
							<div className="flex-col gap-y-5 flex">
								<p className="inline-flex gap-x-3 items-center">
									<Image
										src={"/check.png"}
										alt={"icon"}
										width={30}
										height={30}
									/>
									<span>
										Branding: (Logo Design, Identity Design, Brand Standards,
										etc.)
									</span>
								</p>
								<p className="inline-flex gap-x-3 items-center">
									<Image
										src={"/check.png"}
										alt={"icon"}
										width={30}
										height={30}
									/>
									<span>
										Branding: (Logo Design, Identity Design, Brand Standards,
										etc.)
									</span>
								</p>
								<p className="inline-flex gap-x-3 items-center">
									<Image
										src={"/check.png"}
										alt={"icon"}
										width={30}
										height={30}
									/>
									<span>
										Branding: (Logo Design, Identity Design, Brand Standards,
										etc.)
									</span>
								</p>
								<p className="inline-flex gap-x-3 items-center">
									<Image
										src={"/check.png"}
										alt={"icon"}
										width={30}
										height={30}
									/>
									<span>
										Branding: (Logo Design, Identity Design, Brand Standards,
										etc.)
									</span>
								</p>
								<p className="inline-flex gap-x-3 items-center">
									<Image
										src={"/check.png"}
										alt={"icon"}
										width={30}
										height={30}
									/>
									<span>
										Branding: (Logo Design, Identity Design, Brand Standards,
										etc.)
									</span>
								</p>{" "}
							</div>
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-2" className="py-5">
						<AccordionTrigger>
							<p className="inline-flex items-center md:gap-x-7 gap-x-4">
								<Image src={"/web.png"} alt={"icon"} width={50} height={50} />
								<span
									className="md:text-[40px] lg:text-[50px] text-[23px] md:leading-[64px] leading-8 font-extrabold w-fit"
									title="Website Development & Management"
								>
									{" "}
									Website Development <br /> & Management
								</span>
							</p>
						</AccordionTrigger>
						<AccordionContent className=" text-[#391400A3] flex justify-end py-[40px] ">
							<div className="flex-col gap-y-5 flex">
								<p className="inline-flex gap-x-3 items-center">
									<Image
										src={"/check.png"}
										alt={"icon"}
										width={30}
										height={30}
									/>
									<span>
										Branding: (Logo Design, Identity Design, Brand Standards,
										etc.)
									</span>
								</p>
								<p className="inline-flex gap-x-3 items-center">
									<Image
										src={"/check.png"}
										alt={"icon"}
										width={30}
										height={30}
									/>
									<span>
										Branding: (Logo Design, Identity Design, Brand Standards,
										etc.)
									</span>
								</p>
								<p className="inline-flex gap-x-3 items-center">
									<Image
										src={"/check.png"}
										alt={"icon"}
										width={30}
										height={30}
									/>
									<span>
										Branding: (Logo Design, Identity Design, Brand Standards,
										etc.)
									</span>
								</p>
								<p className="inline-flex gap-x-3 items-center">
									<Image
										src={"/check.png"}
										alt={"icon"}
										width={30}
										height={30}
									/>
									<span>
										Branding: (Logo Design, Identity Design, Brand Standards,
										etc.)
									</span>
								</p>
								<p className="inline-flex gap-x-3 items-center">
									<Image
										src={"/check.png"}
										alt={"icon"}
										width={30}
										height={30}
									/>
									<span>
										Branding: (Logo Design, Identity Design, Brand Standards,
										etc.)
									</span>
								</p>{" "}
							</div>
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-3" className="py-5">
						<AccordionTrigger>
							<p className="inline-flex items-center md:gap-x-7 gap-x-4">
								<Image src={"/dig.png"} alt={"icon"} width={50} height={50} />
								<span
									className="md:text-[40px] lg:text-[50px] text-[23px] md:leading-[64px] leading-8 font-extrabold w-fit"
									title="Digital Marketing"
								>
									{" "}
									Digital Marketing
								</span>
							</p>
						</AccordionTrigger>
						<AccordionContent className=" text-[#391400A3] flex justify-end py-[40px] ">
							<div className="flex-col gap-y-5 flex">
								<p className="inline-flex gap-x-3 items-center">
									<Image
										src={"/check.png"}
										alt={"icon"}
										width={30}
										height={30}
									/>
									<span>
										Branding: (Logo Design, Identity Design, Brand Standards,
										etc.)
									</span>
								</p>
								<p className="inline-flex gap-x-3 items-center">
									<Image
										src={"/check.png"}
										alt={"icon"}
										width={30}
										height={30}
									/>
									<span>
										Branding: (Logo Design, Identity Design, Brand Standards,
										etc.)
									</span>
								</p>
								<p className="inline-flex gap-x-3 items-center">
									<Image
										src={"/check.png"}
										alt={"icon"}
										width={30}
										height={30}
									/>
									<span>
										Branding: (Logo Design, Identity Design, Brand Standards,
										etc.)
									</span>
								</p>
								<p className="inline-flex gap-x-3 items-center">
									<Image
										src={"/check.png"}
										alt={"icon"}
										width={30}
										height={30}
									/>
									<span>
										Branding: (Logo Design, Identity Design, Brand Standards,
										etc.)
									</span>
								</p>
								<p className="inline-flex gap-x-3 items-center">
									<Image
										src={"/check.png"}
										alt={"icon"}
										width={30}
										height={30}
									/>
									<span>
										Branding: (Logo Design, Identity Design, Brand Standards,
										etc.)
									</span>
								</p>{" "}
							</div>
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-4" className="py-5">
						<AccordionTrigger>
							<p className="inline-flex items-center md:gap-x-7 gap-x-4">
								<Image src={"/brand.png"} alt={"icon"} width={50} height={50} />
								<span
									className="md:text-[40px] lg:text-[50px] text-[23px] md:leading-[64px] leading-8 font-extrabold w-fit"
									title="brand Management"
								>
									{" "}
									Brand Management
								</span>
							</p>
						</AccordionTrigger>
						<AccordionContent className=" text-[#391400A3] flex justify-end py-[40px] ">
							<div className="flex-col gap-y-5 flex">
								<p className="inline-flex gap-x-3 items-center">
									<Image
										src={"/check.png"}
										alt={"icon"}
										width={30}
										height={30}
									/>
									<span>
										Branding: (Logo Design, Identity Design, Brand Standards,
										etc.)
									</span>
								</p>
								<p className="inline-flex gap-x-3 items-center">
									<Image
										src={"/check.png"}
										alt={"icon"}
										width={30}
										height={30}
									/>
									<span>
										Branding: (Logo Design, Identity Design, Brand Standards,
										etc.)
									</span>
								</p>
								<p className="inline-flex gap-x-3 items-center">
									<Image
										src={"/check.png"}
										alt={"icon"}
										width={30}
										height={30}
									/>
									<span>
										Branding: (Logo Design, Identity Design, Brand Standards,
										etc.)
									</span>
								</p>
								<p className="inline-flex gap-x-3 items-center">
									<Image
										src={"/check.png"}
										alt={"icon"}
										width={30}
										height={30}
									/>
									<span>
										Branding: (Logo Design, Identity Design, Brand Standards,
										etc.)
									</span>
								</p>
								<p className="inline-flex gap-x-3 items-center">
									<Image
										src={"/check.png"}
										alt={"icon"}
										width={30}
										height={30}
									/>
									<span>
										Branding: (Logo Design, Identity Design, Brand Standards,
										etc.)
									</span>
								</p>{" "}
							</div>
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-5" className="py-5">
						<AccordionTrigger>
							<p className="inline-flex items-center md:gap-x-7 gap-x-4">
								<Image src={"/soc.png"} alt={"icon"} width={50} height={50} />
								<span
									className="md:text-[40px] lg:text-[50px] text-[23px] md:leading-[64px] leading-8 font-extrabold w-fit"
									title="Social Media Management"
								>
									{" "}
									Social Media Management
								</span>
							</p>
						</AccordionTrigger>
						<AccordionContent className=" text-[#391400A3] flex justify-end py-[40px] ">
							<div className="flex-col gap-y-5 flex">
								<p className="inline-flex gap-x-3 items-center">
									<Image
										src={"/check.png"}
										alt={"icon"}
										width={30}
										height={30}
									/>
									<span>
										Branding: (Logo Design, Identity Design, Brand Standards,
										etc.)
									</span>
								</p>
								<p className="inline-flex gap-x-3 items-center">
									<Image
										src={"/check.png"}
										alt={"icon"}
										width={30}
										height={30}
									/>
									<span>
										Branding: (Logo Design, Identity Design, Brand Standards,
										etc.)
									</span>
								</p>
								<p className="inline-flex gap-x-3 items-center">
									<Image
										src={"/check.png"}
										alt={"icon"}
										width={30}
										height={30}
									/>
									<span>
										Branding: (Logo Design, Identity Design, Brand Standards,
										etc.)
									</span>
								</p>
								<p className="inline-flex gap-x-3 items-center">
									<Image
										src={"/check.png"}
										alt={"icon"}
										width={30}
										height={30}
									/>
									<span>
										Branding: (Logo Design, Identity Design, Brand Standards,
										etc.)
									</span>
								</p>
								<p className="inline-flex gap-x-3 items-center">
									<Image
										src={"/check.png"}
										alt={"icon"}
										width={30}
										height={30}
									/>
									<span>
										Branding: (Logo Design, Identity Design, Brand Standards,
										etc.)
									</span>
								</p>{" "}
							</div>
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-6" className="py-5">
						<AccordionTrigger>
							<p className="inline-flex items-center md:gap-x-7 gap-x-4">
								<Image src={"/brass.png"} alt={"icon"} width={50} height={50} />
								<span
									className="md:text-[40px] lg:text-[50px] text-[23px] md:leading-[64px] leading-8 font-extrabold w-fit"
									title="Branding & Brand Strategy"
								>
									{" "}
									Branding & Brand Strategy
								</span>
							</p>
						</AccordionTrigger>
						<AccordionContent className=" text-[#391400A3] flex justify-end py-[40px]">
							<div className="flex-col gap-y-5 flex">
								<p className="inline-flex gap-x-3 items-center">
									<Image
										src={"/check.png"}
										alt={"icon"}
										width={30}
										height={30}
									/>
									<span>
										Branding: (Logo Design, Identity Design, Brand Standards,
										etc.)
									</span>
								</p>
								<p className="inline-flex gap-x-3 items-center">
									<Image
										src={"/check.png"}
										alt={"icon"}
										width={30}
										height={30}
									/>
									<span>
										Branding: (Logo Design, Identity Design, Brand Standards,
										etc.)
									</span>
								</p>
								<p className="inline-flex gap-x-3 items-center">
									<Image
										src={"/check.png"}
										alt={"icon"}
										width={30}
										height={30}
									/>
									<span>
										Branding: (Logo Design, Identity Design, Brand Standards,
										etc.)
									</span>
								</p>
								<p className="inline-flex gap-x-3 items-center">
									<Image
										src={"/check.png"}
										alt={"icon"}
										width={30}
										height={30}
									/>
									<span>
										Branding: (Logo Design, Identity Design, Brand Standards,
										etc.)
									</span>
								</p>
								<p className="inline-flex gap-x-3 items-center">
									<Image
										src={"/check.png"}
										alt={"icon"}
										width={30}
										height={30}
									/>
									<span>
										Branding: (Logo Design, Identity Design, Brand Standards,
										etc.)
									</span>
								</p>{" "}
							</div>
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</section>
		</main>
	);
};

export default ServicePage;
