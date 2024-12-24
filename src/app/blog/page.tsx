// Path: src/app/blog/page.tsx
import path from "path";
import { readFileSync, readdirSync } from "fs";
import matter from "gray-matter";
import Link from "next/link";
import MainLayout from "@/components/MainLayout/MainLayout";

export type BlogPostMetadata = {
	title: string;
	description: string;
	keywords: string;
	date: string;
};

const loadPostWithMetaData = async () => {
	console.log("Loading all blog posts");
	const filePath = path.join(process.cwd(), "src/posts");
	const allPostNames = readdirSync(filePath, "utf-8");

	const allPosts = allPostNames.map((filename) => {
		const fileContents = readFileSync(path.join(filePath, filename), "utf-8");
		const frontmatter = matter(fileContents);
		const { title, description, keywords, date } = frontmatter.data as BlogPostMetadata;

		return { title, description, keywords, date, slug: filename.split(".")[0] };
	});
	// Use gray-matter to parse the front matter from the file

	return allPosts;
};

const BlogDir = async () => {
	const posts = (await loadPostWithMetaData()) || [];

	return (
		<>
			<MainLayout>
				<section className="flex flex-col items-center w-full p-4 overflow-x-hidden">
					<h1 className="text-3xl p-10 text-awesomeee-link font-medium">Blog Directory</h1>
					<ul className="text-awesomeee-primary">
						{posts.map((post) => {
							return (
								<li
									key={post.slug}
									className="flex text-2xl before:content-awesomeee-list-deco before:flex before:items-center before:p-2"
								>
									<Link href={`/blog/${post.slug}`} className="p-2">
										<h2 className="font-medium">{post.title}</h2>
										<span className="flex flex-row justify-between items-end font-normal">
											<span className="brightness-75 text-xl">{post.description}</span>
											<span className="brightness-75 text-sm">{new Date(post.date).toDateString()}</span>
										</span>
									</Link>
								</li>
							);
						})}
					</ul>
				</section>
			</MainLayout>
		</>
	);
};

export default BlogDir;
