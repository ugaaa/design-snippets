import { fetchData } from "@/api/fetchData";
import Title from "@/components/common/title";
import Container from "@/components/layouts/container";
import { PostType } from "@/types/posts";
import { TagType } from "@/types/tags";

type PageType = {
  href: string;
  title: string;
};

export default async function Sitemap() {
  let tags: TagType[] = [];
  let posts: PostType[] = [];

  // サーバーコンポーネント内でデータを取得
  try {
    const postsData = await fetchData({
      endpoint: "snippets",
      params: {
        "pagination[pageSize]": 100,
      },
    });

    const tagsData = await fetchData({
      endpoint: "tags",
      params: { "pagination[pageSize]": 100 },
    });

    posts = postsData.data;
    tags = tagsData.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  console.log(posts, tags);

  const staticPages: PageType[] = [{ href: "/", title: "TOPページ" }];
  const toolsPages: PageType[] = [
    { href: "/loading-svg-customizer", title: "Loading SVG カスタマイザー" },
    { href: "/char-count", title: "文字数カウント" },
    { href: "/aspect-ratio-calculator", title: "アスペクト比計算" },
  ];

  return (
    <section className="bg-white">
      <Container hasTitle>
        <Title as={"h1"}>サイトマップ</Title>

        <div>
          <section>
            {staticPages.map((page, index) => (
              <a key={index} href={page.href}>
                {page.title}
              </a>
            ))}
          </section>

          <section>
            <h2>便利なツール</h2>
            {toolsPages.map((page, index) => (
              <a key={index} href={page.href}>
                {page.title}
              </a>
            ))}
          </section>

          <section>
            <h2>ブログ</h2>
            <section>
              <h3>
                <a href="/blog">タグ一覧</a>
              </h3>
              {tags.map((tag, index) => (
                <a key={index} href={`/blog/tags/${tag.id}`}>
                  #{tag.attributes.name}
                </a>
              ))}
            </section>
            <section>
              <h3>
                <a href="/blog">最新記事一覧</a>
              </h3>
              {posts.map((post, index) => (
                <a key={index} href={`/blog/${post.id}`}>
                  {post.attributes.title}
                </a>
              ))}
            </section>
          </section>
        </div>
      </Container>
    </section>
  );
}
