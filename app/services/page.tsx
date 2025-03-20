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
		<main className={`${epilogue.className} mt-18 bg-black`}>
			<section className="px-5 xl:px-[50px] md:px-[30px] xl:pt-24 md:pt-28 lg:pt-40 pt-[7rem] pb-10 xl:pb-20 lg:pb-10 md:pb-10 ">
				{" "}
				<Accordion
					type="single"
					collapsible
					defaultValue="item-1"
					className="w-full text-white"
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
						<AccordionContent className=" text-white flex justify-end py-[40px] ">
							<div className="flex-col gap-y-5 flex  lg:w-[50%] md:w-[65%] w-full">
								<p className="text-base font-normal leading-8">     Our graphic and motion design process involves understanding your project goals, target audience, and unique needs.
									We develop customized design concept, creating visually stunning, effective designs that captures attention and conveys your message.
									Our team delivers high-quality design files, optimized for various formats and platforms.</p>
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
						<AccordionContent className=" text-white flex justify-end py-[40px] ">
							<div className="flex-col gap-y-5 flex  lg:w-[50%] md:w-[65%] w-full">
								<p className="text-base font-normal leading-8">Our website development and optimization process begins with a thorough discovery phase to understand your business goals, target audience, and unique needs. We design and develop custom websites that are visually stunning, user-friendly, and optimized for search engines.</p>
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
						<AccordionContent className=" text-white flex justify-end py-[40px] ">
							<div className="flex-col gap-y-5 flex  lg:w-[50%] md:w-[65%] w-full">
								<p className="text-base font-normal leading-8">We&apos;ll help you make a lasting impression online. Our digital marketing services are designed to drive real results, from growing your social media presence and crafting compelling content, to boosting website traffic and sales through targeted advertising, email marketing, and SEO optimization.</p>
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
					{/* <AccordionItem value="item-4" className="py-5">
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
						<AccordionContent className=" text-white flex justify-end py-[40px] ">
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
					</AccordionItem> */}
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
						<AccordionContent className=" text-white flex justify-end py-[40px] ">
							<div className="flex-col gap-y-5 flex  lg:w-[50%] md:w-[65%] w-full">
								<p className="text-base font-normal leading-8">
									Our team creates and curates engaging content, manages social media advertising, and monitors conversations to ensure your brand is always represented in the best possible light.
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
						<AccordionContent className=" text-white flex justify-end py-[40px]">
							<div className="flex-col gap-y-5 flex  lg:w-[50%] md:w-[65%] w-full">
								<p className="text-base font-normal leading-8">
									Our branding process begins with a deep dive into your business, identifying your unique value proposition, target audience, and industry landscape.
									We develop a comprehensive brand strategy, crafting a unique brand identity, messaging framework, and visual system. Our team ensures consistency across all touchpoints, from business cards to website design.
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
