import type React from "react";
import Link from "next/link";
import { Epilogue } from "next/font/google";
import Image from "next/image"
import { ContactForm } from "./contactform";
import { Toaster } from "@/components/ui/sonner"
const epilogue = Epilogue({ subsets: ["latin"], weight: ["400", "700"] });

const ContactPage: React.FC = () => {
	return (
		<main className={`${epilogue.className} mt-18 bg-black container mx-auto `}>
			<section className=" text-white xl:min-h-screen md:min-h-[60vh] flex flex-col md:flex-row md:items-center justify-between items-start xl:px-[50px] md:px-[30px] xl:pt-28 md:pt-28 lg:pt-36 pt-[7rem] pb-10 xl:pb-20 lg:pb-10 md:pb-10 w-full gap-y-6 gap-x-6   ">
				<div className="basis-full md:basis-[50%] flex flex-col gap-y-8 ">
					<p className="xl:text-[62px] lg:text-[58px] md:text-[50px] text-[55px] font-extrabold lg:leading-[64px] md:leading-[60px] leading-[62px] tracking-[-2px] text-white">
						Have an  <span className=" text-[#FF6600]">Idea?</span> <br />
						Let’s do it together!
					</p>
					<p className="text-[18px] font-normal leading-8 lg:w-[80%]  mx-auto md:mx-0">
						Get in touch today and let’s turn your idea into a remarkable success story!
					</p>
					<div className="flex flex-col gap-y-6">
						<div className="inline-flex items-center gap-x-5">
							<Image src={"/whatsapp.png"} alt={"icon"} width={60} height={60} />
							<Link
								href="https://wa.me/2348179196483"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:underline transition-all duration-300 ease-in-out w-fit"
							>
								<h3 className="text-[18px] leading-8 font-normal text-white">
									+234 817-919-6483
								</h3>
							</Link>

						</div>

					</div>
					<div className="flex flex-col gap-y-6">
						<div className="inline-flex items-center gap-x-5">
							<Image src={"/email.png"} alt={"icon"} width={60} height={60} />
							<Link
								href="mailto:aureatemediahq@gmail.com"
								rel="noopener noreferrer"
								className="hover:underline transition-all duration-300 ease-in-out w-fit"
							>
								<h3 className="text-[18px] leading-8 font-normal text-white ">
									aureatemediahq@gmail.com
								</h3>
							</Link>
						</div>

					</div>
				</div>
				<div className="basis-full md:basis-[45%] mt-10 md:mt-0 w-full">
					<ContactForm/>
				</div>
			</section>

			<Toaster />
		</main>
	);
};

export default ContactPage;
