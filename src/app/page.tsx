import MainLayout from "@/components/MainLayout/MainLayout";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Utku Tekalmaz",
	description: "Frontend Developer personal website",
};

const HomePage = () => {
	return (
		<>
			<MainLayout>
				<div className="grid h-screen w-screen place-items-center overflow-hidden bg-awesomeee-secondary transition-all duration-300">
					<section className="flex flex-col items-end pl-24 text-2xl lg:pl-48 lg:text-4xl">
						<h1 className="font-medium text-awesomeee-primary">utku tekalmaz</h1>
						<p className="font-normal italic text-awesomeee-primary">frontend developer</p>
						<div className="relative cursor-pointer text-xl font-normal text-awesomeee-link lg:text-3xl transition-all duration-300">
							<Link
								className="border-awesomeee-link hover:pb-1 hover:border-b-2 transition-all duration-300"
								href="https://github.com/utkutekalmaz"
							>
								git
							</Link>{" "}
							|{" "}
							<Link
								className="border-awesomeee-link hover:pb-1 hover:border-b-2 transition-all duration-300"
								href="https://linkedin.com/in/utku-tekalmaz"
							>
								in
							</Link>{" "}
							|{" "}
							<Link
								className="border-awesomeee-link hover:pb-1 hover:border-b-2 transition-all duration-300"
								href="/blog"
							>
								blog
							</Link>
						</div>
					</section>
				</div>
			</MainLayout>
		</>
	);
};

export default HomePage;
