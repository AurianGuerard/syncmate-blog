import type { PostProps } from "@/types/type";
import getPostMetadata from "@/utils/getPostMetadata";
import matter from "gray-matter";
import fs from "node:fs";

export async function generateStaticParams() {
  return getPostMetadata("post").map((post) => {
    return {
      title: post.title,
      content: post.date,
      slug: post.slug,
    };
  });
}

function getPostContent(slug: string) {
  const folder = "post/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");

  const matterResult = matter(content);
  return matterResult;
}

export async function generateMetadata({ params }: PostProps) {
  const id = params?.slug ? ` ⋅ ${params?.slug}` : "";
  return {
    title: `The Bubbly Baker ${id.replaceAll("_", " ")}`,
  };
}

export default function Post({ params }: PostProps) {
  const slug = params.slug;
  const post = getPostContent(slug);
  console.log(post);

  return (
    <div>
      <h1 className="text-6xl font-bold">{post.data.title}</h1>
      <p className="mt-3 text-sm">{post.content}</p>
    </div>
  );
}
