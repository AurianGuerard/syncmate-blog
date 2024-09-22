// export type PostProps = {
//   post: {
//     slug: string;
//     title: string;
//     content: string;
//   };
// };

export interface PostProps {
  params: { slug: string; title: string; content: string };
  searchParams: { [key: string]: string | string[] | undefined };
}
