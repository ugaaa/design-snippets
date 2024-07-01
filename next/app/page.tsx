import FirstView from "@/components/sections/firstView";
import Footer from "@/components/layouts/footer";
import About from "@/components/sections/about";
import LatestPosts from "@/components/sections/latestPosts";
import Svgs from "@/components/sections/svgs";
import { fetchData } from "@/api/fetchData";
import { PostType } from "@/types/posts";
import { TagType } from "@/types/tags";
import PopularTags from "@/components/sections/popularTags";

export default async function Home() {
  let posts: PostType[] = [];
  let tags: TagType[] = [];

  // サーバーコンポーネント内でデータを取得
  try {
    const postsData = await fetchData({
      endpoint: "snippets",
      params: {
        "pagination[pageSize]": 6,
        "populate[0]": "tags",
        "populate[1]": "thumbnail",
      },
    });

    const tagsData = await fetchData({
      endpoint: "tags",
      params: { "pagination[pageSize]": 6 },
    });

    posts = postsData.data;
    tags = tagsData.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
  return (
    <>
      <main>
        <FirstView />
        <About />
        <Svgs />
        <PopularTags tags={tags} />
        <LatestPosts posts={posts} isSecondary />
      </main>
      <Footer />
    </>
  );
}
