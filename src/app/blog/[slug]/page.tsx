// Path: src/app/blog/[slug]/page.tsx
import fs from "fs";
import { loadBlogPost } from "./post.server";
import MainLayout from "@/components/MainLayout/MainLayout";
import type { Metadata } from "next";
import { readFileSync } from "fs";
import path from "path";
import matter from "gray-matter";
import { BlogPostMetadata } from "../page";

type MetadataProps = {
	params: { slug: string };
	searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params: { slug } }: MetadataProps): Promise<Metadata> {
	const filePath = path.join(process.cwd(), "src/posts", `${slug}.md`);
	const fileContents = readFileSync(filePath, "utf-8");

	// Use gray-matter to parse the front matter from the file
	const frontmatter = matter(fileContents);
	const data = frontmatter.data as BlogPostMetadata;

	return {
		title: data.title,
		description: data.description,
		keywords: data.keywords,
	};
}

const BlogPostPage = async ({
	params,
}: {
	params: {
		slug: string;
	};
}) => {
	const post = await loadBlogPost(params.slug);

	return (
		<>
			<MainLayout>
				<article id="blogpost">
					<h1>{post.frontmatter.title}</h1>
					<p className="date-posted">Date: {new Date(post.frontmatter.date).toDateString()}</p>
					<div dangerouslySetInnerHTML={{ __html: post.content }} />
				</article>
			</MainLayout>
		</>
	);
};

export default BlogPostPage;

export async function generateStaticParams() {
	console.log("Generating static paths");
	const postsDirectory = path.join(process.cwd(), "src/posts");
	const filenames = fs.readdirSync(postsDirectory);

	const paths = filenames.map((filename) => {
		const slug = filename.replace(/\.md$/, "");
		return { params: { slug } };
	});

	return paths;
}
