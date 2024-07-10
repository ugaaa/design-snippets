import { fetchData } from "@/api/fetchData";
import { PostType } from "@/types/posts";
import LatestPosts from "@/components/sections/latestPosts";
import { PaginationType } from "@/types/strapi";

export default async function Blog() {
  let posts: PostType[] = [];
  let pagination: PaginationType | undefined;

  // サーバーコンポーネント内でデータを取得
  try {
    const postsData = await fetchData({
      endpoint: "snippets",
      params: {
        "pagination[page]": 1,
        "populate[0]": "tags",
        "populate[1]": "thumbnail",
      },
    });

    posts = postsData.data;
    pagination = postsData.meta.pagination;
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  return <LatestPosts posts={posts} pagination={pagination} />;
}
