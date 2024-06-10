import Container from "@/components/layouts/container";
import { fetchData } from '@/api/fetchData';
import { ArticleProps, ArticlesProps } from '@/types/articles';
import { TagProps } from '@/types/tags';
import RichText from "@/components/layouts/richtext";
import Title from "@/components/common/title";
import Header from "@/components/layouts/header";
import Footer from "@/components/layouts/footer";

export default async function TagPage({ params }: { params: { id: number } }) {
  let tag: TagProps | undefined;
  let tagArticles: ArticlesProps = [];

  try {
    // タグデータを取得
    const tagData = await fetchData({
      endpoint: `tags/${params.id}`,
      params: { 'pagination[pageSize]': 5 }
    });

    // 記事データを取得
    const articlesData = await fetchData({
      endpoint: 'snippets',
      params: {
        'pagination[pageSize]': 5,
        'filters[tags]': params.id
       }
    });

    if (!tagData.data) {
      // タグデータが存在しない場合
      console.error('Tag data not found');
      return {
        notFound: true, // ページが見つからない状態を返す
      };
    }

    // タグデータをセット
    tag = {
      id: tagData.data.id,
      name: tagData.data.attributes.name,
      slug: tagData.data.attributes.slug,
    };

    // 記事データをセット
    tagArticles = articlesData.data.map((item: { id: number, attributes: ArticleProps }) => ({
      id: item.id,
      title: item.attributes.title,
      content: item.attributes.content,
      media: item.attributes.media,
      publishedAt: item.attributes.publishedAt
    }));

    // コンポーネントをレンダリング
    return (
      <>
        <Header />
        <main>
          <Container ball={{color: 'pink', position: 'right'}} hasTitle>
            <Title as="h1" ball={{main: 'green', sub: 'yellow'}} isWhite>{tag.name}</Title>
            <div>
              {tagArticles.map((article) => (
                <div key={article.id}>
                  <h2>{article.title}</h2>
                  <RichText content={article.content}/>
                  {/* メディアや公開日など他の情報を必要に応じて追加 */}
                </div>
              ))}
            </div>
          </Container>
        </main>
        <Footer />
      </>
    );

  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      notFound: true, // エラー時にはページが見つからない状態を返す
    };
  }
}