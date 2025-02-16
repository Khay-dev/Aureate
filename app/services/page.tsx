import type React from "react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Epilogue } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

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
				<Accordion
					type="single"
					collapsible
					defaultValue="item-1"
					className="w-full text-[#391400]"
				>
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
							<div className="flex-col gap-y-5 flex  lg:w-[50%] md:w-[65%] w-full">
								<p className="flex gap-x-3 items-center">
									<Image
										src={"/check.png"}
										alt={"icon"}
										width={30}
										height={30}
										className="md:h-[30px] md:w-[30px] h-[20px] w-[20px] flex-shrink-0"
									/>
									<span>
										Branding: (Logo Design, Identity Design, Brand Standards,
										etc.)
									</span>
								</p>
								<p className="flex gap-x-3 items-center">
									<Image
										src={"/check.png"}
										alt={"icon"}
										width={30}
										height={30}
										className="md:h-[30px] md:w-[30px] h-[20px] w-[20px] flex-shrink-0"
									/>
									<span>
										Graphic Design: ( Brochures, flyers, posters, business
										cards, etc)
									</span>
								</p>
								<p className="flex gap-x-3 items-center">
									<Image
										src={"/check.png"}
										alt={"icon"}
										width={30}
										height={30}
										className="md:h-[30px] md:w-[30px] h-[20px] w-[20px] flex-shrink-0"
									/>
									<span>
										Digital Design: (Social media graphics, email newsletters,
										etc.)
									</span>
								</p>
								<p className="flex gap-x-3 items-center">
									<Image
										src={"/check.png"}
										alt={"icon"}
										width={30}
										height={30}
										className="md:h-[30px] md:w-[30px] h-[20px] w-[20px] flex-shrink-0"
									/>
									<span>
										Advertising Design: (Billboards, magazine ads, online ads,
										etc)
									</span>
								</p>
								<p className="flex gap-x-3 items-center">
									<Image
										src={"/check.png"}
										alt={"icon"}
										width={30}
										height={30}
										className="md:h-[30px] md:w-[30px] h-[20px] w-[20px] flex-shrink-0"
									/>
									<span>
										UI/UX Design: (Wireframing, Prototyping, Mobile app design,
										etc)
									</span>
								</p>
								<Link
									href={"/contact"}
									className="text-sm font-black items-center text-[#eeeeee] leading-[14.35px] w-[154px] h-[48px] flex justify-center bg-[#FF6600] mt-5 rounded-[6px]"
								>
									CONTACT US
								</Link>
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
							<div className="flex-col gap-y-5 flex  lg:w-[50%] md:w-[65%] w-full">
								<p className="flex gap-x-3 items-center">
									<Image
										src={"/check.png"}
										alt={"icon"}
										width={30}
										height={30}
										className="md:h-[30px] md:w-[30px] h-[20px] w-[20px] flex-shrink-0"
									/>
									<span>
										Custom Website Design: Personalized design, wireframing, and
										user experience optimization
									</span>
								</p>
								<p className="flex gap-x-3 items-center">
									<Image
										src={"/check.png"}
										alt={"icon"}
										width={30}
										height={30}
										className="md:h-[30px] md:w-[30px] h-[20px] w-[20px] flex-shrink-0"
									/>
									<span>
										E-commerce Development: Product pages, shopping cart,
										payment integration, customer management
									</span>
								</p>
								<p className="flex gap-x-3 items-center">
									<Image
										src={"/check.png"}
										alt={"icon"}
										width={30}
										height={30}
										className="md:h-[30px] md:w-[30px] h-[20px] w-[20px] flex-shrink-0"
									/>
									<span>
										Website Redesign: Revamping outdated sites with modern
										aesthetics and functionality
									</span>
								</p>
								<p className="flex gap-x-3 items-center">
									<Image
										src={"/check.png"}
										alt={"icon"}
										width={30}
										height={30}
										className="md:h-[30px] md:w-[30px] h-[20px] w-[20px] flex-shrink-0"
									/>
									<span>
										Landing Page Design: One-page sites for specific campaigns
										or products
									</span>
								</p>
								<p className="flex gap-x-3 items-center">
									<Image
										src={"/check.png"}
										alt={"icon"}
										width={30}
										height={30}
										className="md:h-[30px] md:w-[30px] h-[20px] w-[20px] flex-shrink-0"
									/>
									<span>
										Maintenance & Support: Regular updates, security checks, and
										performance optimization
									</span>
								</p>
								<Link
									href={"/contact"}
									className="text-sm font-black items-center text-[#eeeeee] leading-[14.35px] w-[154px] h-[48px] flex justify-center bg-[#FF6600] mt-5 rounded-[6px]"
								>
									CONTACT US
								</Link>
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
							<div className="flex-col gap-y-5 flex  lg:w-[50%] md:w-[65%] w-full">
								<p className="flex gap-x-3 items-center">
									<Image
										src={"/check.png"}
										alt={"icon"}
										width={30}
										height={30}
										className="md:h-[30px] md:w-[30px] h-[20px] w-[20px] flex-shrink-0"
									/>
									<span>
										Content Marketing: Blog posts, articles, and guides
									</span>
								</p>
								<p className="flex gap-x-3 items-center">
									<Image
										src={"/check.png"}
										alt={"icon"}
										width={30}
										height={30}
										className="md:h-[30px] md:w-[30px] h-[20px] w-[20px] flex-shrink-0"
									/>
									<span>
										Email Marketing: Newsletter design, campaign management,
										lead nurturing
									</span>
								</p>
								<p className="flex gap-x-3 items-center">
									<Image
										src={"/check.png"}
										alt={"icon"}
										width={30}
										height={30}
										className="md:h-[30px] md:w-[30px] h-[20px] w-[20px] flex-shrink-0"
									/>
									<span>
										Paid Advertising: Google Ads, Social media ads (Facebook,
										Instagram, LinkedIn, etc.) retargeting ads
									</span>
								</p>
								<p className="flex gap-x-3 items-center">
									<Image
										src={"/check.png"}
										alt={"icon"}
										width={30}
										height={30}
										className="md:h-[30px] md:w-[30px] h-[20px] w-[20px] flex-shrink-0"
									/>
									<span>
										Influencer Marketing: Researching influencers, managing
										collaborations, tracking campaign success
									</span>
								</p>
								<p className="flex gap-x-3 items-center">
									<Image
										src={"/check.png"}
										alt={"icon"}
										width={30}
										height={30}
										className="md:h-[30px] md:w-[30px] h-[20px] w-[20px] flex-shrink-0"
									/>
									<span>
										Video Marketing: Video creation, YouTube channel
										optimization, video ads
									</span>
								</p>
								<Link
									href={"/contact"}
									className="text-sm font-black items-center text-[#eeeeee] leading-[14.35px] w-[154px] h-[48px] flex justify-center bg-[#FF6600] mt-5 rounded-[6px]"
								>
									CONTACT US
								</Link>
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
							<div className="flex flex-col-reverse md:flex-row items-start justify-end md:gap-x-10 gap-y-5 lg:w-[50%] md:w-[65%] w-full ">
								<div className="flex-col gap-y-5 flex">
									<p className="flex gap-x-3 items-center">
										<Image
											src={"/check.png"}
											alt={"icon"}
											width={30}
											height={30}
											className="md:h-[30px] md:w-[30px] h-[20px] w-[20px] flex-shrink-0"
										/>
										<span>Brand strategy</span>
									</p>
									<p className="flex gap-x-3 items-center">
										<Image
											src={"/check.png"}
											alt={"icon"}
											width={30}
											height={30}
											className="md:h-[30px] md:w-[30px] h-[20px] w-[20px] flex-shrink-0"
										/>
										<span>Brand positioning</span>
									</p>
									<p className="flex gap-x-3 items-center">
										<Image
											src={"/check.png"}
											alt={"icon"}
											width={30}
											height={30}
											className="md:h-[30px] md:w-[30px] h-[20px] w-[20px] flex-shrink-0"
										/>
										<span>Brand identity management</span>
									</p>
									<p className="flex gap-x-3 items-center">
										<Image
											src={"/check.png"}
											alt={"icon"}
											width={30}
											height={30}
											className="md:h-[30px] md:w-[30px] h-[20px] w-[20px] flex-shrink-0"
										/>
										<span>Brand asset management</span>
									</p>
									<Link
										href={"/contact"}
										className="text-sm font-black items-center text-[#eeeeee] leading-[14.35px] w-[154px] h-[48px] flex justify-center bg-[#FF6600] mt-5 rounded-[6px]"
									>
										CONTACT US
									</Link>
								</div>
								<div className="flex-col gap-y-5 flex">
									<p className="flex gap-x-3 items-center">
										<Image
											src={"/check.png"}
											alt={"icon"}
											width={30}
											height={30}
											className="md:h-[30px] md:w-[30px] h-[20px] w-[20px] flex-shrink-0"
										/>
										<span>Brand compliance</span>
									</p>
									<p className="flex gap-x-3 items-center">
										<Image
											src={"/check.png"}
											alt={"icon"}
											width={30}
											height={30}
											className="md:h-[30px] md:w-[30px] h-[20px] w-[20px] flex-shrink-0"
										/>
										<span>Brand risk management</span>
									</p>
									<p className="flex gap-x-3 items-center">
										<Image
											src={"/check.png"}
											alt={"icon"}
											width={30}
											height={30}
											className="md:h-[30px] md:w-[30px] h-[20px] w-[20px] flex-shrink-0"
										/>
										<span>Brand performance analysis</span>
									</p>
									<p className="flex gap-x-3 items-center">
										<Image
											src={"/check.png"}
											alt={"icon"}
											width={30}
											height={30}
											className="md:h-[30px] md:w-[30px] h-[20px] w-[20px] flex-shrink-0"
										/>
										<span>Brand asset management</span>
									</p>
								</div>
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
							<div className="flex-col gap-y-5 flex  lg:w-[50%] md:w-[65%] w-full">
								<p className="flex gap-x-3 items-center">
									<Image
										src={"/check.png"}
										alt={"icon"}
										width={30}
										height={30}
										className="md:h-[30px] md:w-[30px] h-[20px] w-[20px] flex-shrink-0"
									/>
									<span>
										Content Creation: Graphic design, reels, Video snippets,
										Stories
									</span>
								</p>
								<p className="flex gap-x-3 items-center">
									<Image
										src={"/check.png"}
										alt={"icon"}
										width={30}
										height={30}
										className="md:h-[30px] md:w-[30px] h-[20px] w-[20px] flex-shrink-0"
									/>
									<span>
										Community Management: Engaging with followers, responding to
										comments, handling inquiries.
									</span>
								</p>
								<p className="flex gap-x-3 items-center">
									<Image
										src={"/check.png"}
										alt={"icon"}
										width={30}
										height={30}
										className="md:h-[30px] md:w-[30px] h-[20px] w-[20px] flex-shrink-0"
									/>
									<span>
										Analytics & reporting: Tracking engagement, growth metrics,
										and Sentiment.
									</span>
								</p>
								<p className="flex gap-x-3 items-center">
									<Image
										src={"/check.png"}
										alt={"icon"}
										width={30}
										height={30}
										className="md:h-[30px] md:w-[30px] h-[20px] w-[20px] flex-shrink-0"
									/>
									<span>
										Social Media strategy development: Audience research,
										content calendar planning.
									</span>
								</p>
								<p className="flex gap-x-3 items-center">
									<Image
										src={"/check.png"}
										alt={"icon"}
										width={30}
										height={30}
										className="md:h-[30px] md:w-[30px] h-[20px] w-[20px] flex-shrink-0"
									/>
									<span>
										Social Media Advertising: Targeted ad campaigns on various
										platforms
									</span>
								</p>
								<Link
									href={"/contact"}
									className="text-sm font-black items-center text-[#eeeeee] leading-[14.35px] w-[154px] h-[48px] flex justify-center bg-[#FF6600] mt-5 rounded-[6px]"
								>
									CONTACT US
								</Link>
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
							<div className="flex-col gap-y-5 flex  lg:w-[50%] md:w-[65%] w-full">
								<p className="flex gap-x-3 items-center">
									<Image
										src={"/check.png"}
										alt={"icon"}
										width={30}
										height={30}
										className="md:h-[30px] md:w-[30px] h-[20px] w-[20px] flex-shrink-0"
									/>
									<span>
										Brand Identity Development: Logo design, typography, color
										palette, brand voice
									</span>
								</p>
								<p className="flex gap-x-3 items-center">
									<Image
										src={"/check.png"}
										alt={"icon"}
										width={30}
										height={30}
										className="md:h-[30px] md:w-[30px] h-[20px] w-[20px] flex-shrink-0"
									/>
									<span>
										Market Positioning: Competitive analysis, target audience
										insights, positioning strategy
									</span>
								</p>
								<p className="flex gap-x-3 items-center">
									<Image
										src={"/check.png"}
										alt={"icon"}
										width={30}
										height={30}
										className="md:h-[30px] md:w-[30px] h-[20px] w-[20px] flex-shrink-0"
									/>
									<span>
										Brand Guidelines: Document detailing logo usage, voice and
										tone, style guidelines
									</span>
								</p>
								<p className="flex gap-x-3 items-center">
									<Image
										src={"/check.png"}
										alt={"icon"}
										width={30}
										height={30}
										className="md:h-[30px] md:w-[30px] h-[20px] w-[20px] flex-shrink-0"
									/>
									<span>
										Content Strategy: Crafting messaging frameworks, content
										pillars, storytelling techniques
									</span>
								</p>
								<p className="flex gap-x-3 items-center">
									<Image
										src={"/check.png"}
										alt={"icon"}
										width={30}
										height={30}
										className="md:h-[30px] md:w-[30px] h-[20px] w-[20px] flex-shrink-0"
									/>
									<span>
										Rebranding Services: Redesigning logos, updating brand
										assets, repositioning
									</span>
								</p>
								<Link
									href={"/contact"}
									className="text-sm font-black items-center text-[#eeeeee] leading-[14.35px] w-[154px] h-[48px] flex justify-center bg-[#FF6600] mt-5 rounded-[6px]"
								>
									CONTACT US
								</Link>
							</div>
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</section>
		</main>
	);
};

export default ServicePage;
