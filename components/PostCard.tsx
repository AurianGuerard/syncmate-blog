import Link from "next/link";

interface Post {
  title: string;
  date: string;
  slug: string;
  tags: string[];
}

export default function PostCard({ post }: { post: Post }) {
  console.log(post);
  return (
    <Link href={`post/${post.slug}`}>
      <div
        key={post.slug}
        className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center"
      >
        <h1 className="text-6xl font-bold">{post.title}</h1>
        <p className="mt-3 text-2xl">{post.date}</p>
        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          {post.tags?.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-sm font-semibold text-white bg-blue-500 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
