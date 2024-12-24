import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeHighlight from "rehype-highlight";
import rehypeStringify from "rehype-stringify";
import { readFileSync } from "fs";
import path from "path";
import matter from "gray-matter";

export interface BlogPostFrontmatter {
  title: string;
  date: string;
  excerpt?: string;
  description?: string;
  slug?: string;
}

export interface BlogPostProps {
  content: string;
  frontmatter: BlogPostFrontmatter;
}

export async function loadBlogPost(slug: string): Promise<BlogPostProps> {
  console.log("Loading blog post");
  const filePath = path.join(process.cwd(), "src/posts", `${slug}.md`);
  const fileContents = readFileSync(filePath, "utf-8");

  // Use gray-matter to parse the front matter from the file
  const { data, content } = matter(fileContents);

  // Process the markdown content to convert it into HTML and highlight the syntax
  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeHighlight) // Automatically detects the language for syntax highlighting
    .use(rehypeStringify)
    .process(content);

  const contentHtml = processedContent.toString();

  return {
    content: contentHtml,
    frontmatter: data as BlogPostFrontmatter,
  };
}
