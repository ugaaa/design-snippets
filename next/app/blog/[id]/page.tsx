import Header from "@/components/layouts/header";
import Footer from "@/components/layouts/footer";
import { fetchData } from "@/api/fetchData";
import { PostType } from "@/types/posts";
import Posts from "@/components/layouts/posts";
import Container from "@/components/layouts/container";
import Title from "@/components/common/title";
import Article from "@/components/layouts/article";

export default async function BlogSingle({
  params: { id },
}: {
  params: { id: string };
}) {
  let post: PostType;
  // サーバーコンポーネント内でデータを取得
  try {
    const postsData = await fetchData({
      endpoint: `snippets/4`,
    });
    post = postsData.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  return (
    <>
      <Header />
      <main className="bg-white">
        <Container>
          {/* <p>{post.attributes.publishedAt}</p>
          <h1>{post.attributes.title}</h1>
          <Article content={post.attributes.content} /> */}
        </Container>
      </main>
      <Footer />
    </>
  );
}
