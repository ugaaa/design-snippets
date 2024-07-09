import Footer from "@/components/layouts/footer";
import { fetchData } from "@/api/fetchData";
import { TagType } from "@/types/tags";
import Header from "@/components/layouts/header";
import Button from "@/components/common/button";
import Container from "@/components/layouts/container";
import Title from "@/components/common/title";
import LatestPosts from "@/components/sections/latestPosts";
import { PostType } from "@/types/posts";
import styles from "./tags.module.scss";

export default async function Tags() {
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
      params: { "pagination[pageSize]": 100, "populate[0]": "snippets" },
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
                    <Button isSimple href={`/blog/tags/${tag.id}`}>
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

        <LatestPosts posts={posts} layout="footer" />
      </main>
      <Footer />
    </>
  );
}
