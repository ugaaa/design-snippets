import Container from "@/components/layouts/container";
import { fetchData } from "@/api/fetchData";
import { PostProps } from "@/types/posts";
import { TagProps } from "@/types/tags";
import Title from "@/components/common/title";
import Header from "@/components/layouts/header";
import Footer from "@/components/layouts/footer";
import { Post } from "@/components/layouts/posts";

export default async function TagPage({ params }: { params: { id: number } }) {
  let tag: TagProps | undefined;
  let tagPosts: PostProps[] = [];

  try {
    // タグデータを取得
    const tagData = await fetchData({
      endpoint: `tags/${params.id}`,
      params: { "pagination[pageSize]": 5 },
    });

    // 記事データを取得
    const postsData = await fetchData({
      endpoint: "snippets",
      params: {
        "pagination[pageSize]": 5,
        "filters[tags]": params.id,
      },
    });

    if (!tagData.data) {
      // タグデータが存在しない場合
      console.error("Tag data not found");
      return {
        notFound: true, // ページが見つからない状態を返す
      };
    }

    // タグデータをセット
    tag = tagData.data;

    // 記事データをセット
    tagPosts = postsData.data;

    // コンポーネントをレンダリング
    return (
      <>
        <Header />
        <main>
          <Container ball={{ color: "pink", position: "right" }} hasTitle>
            <Title as="h1" ball={{ main: "green", sub: "yellow" }} isWhite>
              タグ: #{tag?.attributes.name}
            </Title>
            <div>
              {tagPosts.map((post) => {
                return (
                  <div key={post.id}>
                    <h2>{post.attributes.title}</h2>
                    <Post post={post} />
                    {/* メディアや公開日など他の情報を必要に応じて追加 */}
                  </div>
                );
              })}
            </div>
          </Container>
        </main>
        <Footer />
      </>
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      notFound: true, // エラー時にはページが見つからない状態を返す
    };
  }
}
