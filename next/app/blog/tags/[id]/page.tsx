import Container from "@/components/layouts/container";
import { fetchData } from "@/api/fetchData";
import { PostType } from "@/types/posts";
import { TagType } from "@/types/tags";
import Title from "@/components/common/title";
import Header from "@/components/layouts/header";
import Footer from "@/components/layouts/footer";
import Posts from "@/components/layouts/posts";
import { PaginationType } from "@/types/strapi";
import Pagination from "@/components/common/pagination";

export default async function TagPage({ params }: { params: { id: string } }) {
  let tag: TagType | undefined;
  let tagPosts: PostType[] = [];
  let pagination: PaginationType | undefined;

  try {
    // タグデータを取得
    const tagData = await fetchData({
      endpoint: `tags/${params.id}`,
    });

    // 記事データを取得
    const postsData = await fetchData({
      endpoint: "snippets",
      params: {
        "pagination[pageSize]": 12,
        "filters[tags]": params.id,
        "populate[0]": "thumbnail",
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
    pagination = postsData.meta.pagination;

    // コンポーネントをレンダリング
    return (
      <>
        <Header />
        <main>
          <Container ball={{ color: "blue", position: "right" }} hasTitle>
            <Title as="h1" ball={{ main: "yellow", sub: "pink" }} isWhite>
              タグ: #{tag?.attributes.name}
            </Title>
            <Posts posts={tagPosts} />
            <Pagination page={pagination?.page} total={pagination?.total} />
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
