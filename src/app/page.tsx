// import Image from "next/image";
import getPostMetadata from "@/utils/getPostMetadata";
import PostCards from "@/components/PostCard";

export default function Home() {
  const postMetadata = getPostMetadata("post");
  return (
    <main className="flex flex-col items-center justify-center py-2">
      <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        {postMetadata?.map((post) => (
          <PostCards post={post} key={post.slug} />
        ))}
      </div>
    </main>
  );
}
