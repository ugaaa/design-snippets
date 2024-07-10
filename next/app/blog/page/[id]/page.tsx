import { fetchData } from "@/api/fetchData";
import { PostType } from "@/types/posts";
import LatestPosts from "@/components/sections/latestPosts";
import { PaginationType } from "@/types/strapi";

export default async function BlogPages({
  params,
}: {
  params: { id: string };
}) {
  let posts: PostType[] = [];
  let pagination: PaginationType | undefined;

  // サーバーコンポーネント内でデータを取得
  try {
    const postsData = await fetchData({
      endpoint: "snippets",
      params: {
        "pagination[page]": Number(params.id),
        "populate[0]": "tags",
        "populate[1]": "thumbnail",
      },
    });
    console.log(postsData);
    posts = postsData.data;
    pagination = postsData.meta.pagination;
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  return <LatestPosts posts={posts} pagination={pagination} />;
}
