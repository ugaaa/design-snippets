import Header from "@/components/layouts/header";
import Footer from "@/components/layouts/footer";
import { fetchData } from "@/api/fetchData";
import Container from "@/components/layouts/container";

export default async function BlogSingle({
  params: { id },
}: {
  params: { id: string };
}) {
  let post;
  // サーバーコンポーネント内でデータを取得
  try {
    const postsData = await fetchData({
      endpoint: `snippets/4`,
    });
    post = {
      id: postsData.data.id,
      ...postsData.data.attributes,
    };
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  return (
    <>
      <Header />
      <main>
        <Container>{/* <Article content={post?.content} /> */}</Container>
      </main>
      <Footer />
    </>
  );
}
