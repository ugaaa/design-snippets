import FirstView from "@/components/sections/firstView";
import Footer from "@/components/layouts/footer";
import About from "@/components/sections/about";
import LatestArticles from "@/components/sections/latestArticles";
import PopularTags from "@/components/sections/popularTags";
import { fetchData } from "@/api/fetchData";
import { ArticleProps } from "@/types/articles";
import { TagProps } from "@/types/tags";

export default async function Home() {
  let articles = [];
  let tags = [];

  // サーバーコンポーネント内でデータを取得
  try {
    const articlesData = await fetchData({
      endpoint: "snippets",
      params: { "pagination[pageSize]": 5 },
    });

    const tagsData = await fetchData({
      endpoint: "tags",
      params: { "pagination[pageSize]": 6 },
    });

    articles = articlesData.data.map(
      (item: { id: number; attributes: ArticleProps }) => ({
        id: item.id,
        title: item.attributes.title,
        content: item.attributes.content,
        media: item.attributes.media,
        publishedAt: item.attributes.publishedAt,
      })
    );

    tags = tagsData.data.map((item: { id: number; attributes: TagProps }) => ({
      id: item.id,
      slug: item.attributes.slug,
      name: item.attributes.name,
    }));
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  return (
    <main>
      <FirstView />
      <About />
      <LatestArticles articles={articles} />
      <PopularTags tags={tags} />
      <Footer />
    </main>
  );
}
