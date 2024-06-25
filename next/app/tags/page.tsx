import Footer from "@/components/layouts/footer";
import { fetchData } from "@/api/fetchData";
import { TagProps } from "@/types/tags";
import Header from "@/components/layouts/header";
import Button from "@/components/common/button";
import Container from "@/components/layouts/container";
import Title from "@/components/common/title";
import LatestPosts from "@/components/sections/latestPosts";
import { PostProps } from "@/types/posts";
import styles from "./tags.module.scss";

export default async function Home() {
  let posts: PostProps[] = [];
  let tags: TagProps[] = [];

  // サーバーコンポーネント内でデータを取得
  try {
    const postsData = await fetchData({
      endpoint: "snippets",
      params: { "pagination[pageSize]": 6, populate: "tags" },
    });

    const tagsData = await fetchData({
      endpoint: "tags",
      params: { "pagination[pageSize]": 100, populate: "snippets" },
    });

    posts = postsData.data;
    tags = tagsData.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
  return (
    <>
      <Header />
      <main>
        <section className="bg-white">
          <Container hasTitle>
            <Title as="h1" ball={{ main: "yellow", sub: "blue" }}>
              タグ
            </Title>

            {tags.length > 0 ? (
              <ul className={styles.tagList}>
                {tags.map((tag) => (
                  <li key={tag.id}>
                    <Button isSimple href={`/tags/${tag.id}`}>
                      #{tag.attributes.name}
                      {tag.attributes.snippets && (
                        <span>
                          （{tag.attributes.snippets?.data.length || 0}）
                        </span>
                      )}
                    </Button>
                  </li>
                ))}
              </ul>
            ) : (
              <p>タグがありません。</p>
            )}
          </Container>
        </section>

        <LatestPosts posts={posts} isSecondary />
      </main>
      <Footer />
    </>
  );
}
