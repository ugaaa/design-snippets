import Header from "@/components/layouts/header";
import Footer from "@/components/layouts/footer";
import { fetchData } from "@/api/fetchData";
import { PostProps } from "@/types/posts";
import Container from "@/components/layouts/container";
import LatestPosts from "@/components/sections/latestPosts";

export default async function Home() {
  let posts: PostProps[] = [];

  // サーバーコンポーネント内でデータを取得
  try {
    const postsData = await fetchData({
      endpoint: "snippets",
      params: {
        "pagination[pageSize]": 12,
        "populates[0]": "tags",
        "populates[1]": "thumbnail",
      },
    });

    posts = postsData.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
  console.log(posts);
  return (
    <>
      <Header />
      <main>
        <Container ball={{ color: "pink", position: "right" }} hasTitle>
          <LatestPosts posts={posts} />
        </Container>
      </main>
      <Footer />
    </>
  );
}
