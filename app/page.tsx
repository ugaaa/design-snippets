"use client";

import { useEffect, useState } from "react";
import styles from "./home.module.scss";
import FirstView from "@/components/sections/firstView";
import Footer from "@/components/layouts/footer";
import About from "@/components/sections/about";
import LatestArticles from "@/components/sections/latestArticles";
import PopularArticles from "@/components/sections/popularArticles";
import PopularTags from "@/components/sections/popularTags";
import { fetchData } from "@/api/fetchData";
import { ArticleProps, ArticlesProps } from "@/types/articles";

export default function Home() {
  const [articles, setArticles] = useState<ArticlesProps>([]);
  const [tags, setTags] = useState<TagsProps>([]);

  useEffect(() => {
    const loadSnippets = async () => {
      try {
        const data = await fetchData({
          endpoint: 'snippets',
          params: {
            'pagination[pageSize]': 5
          }
        });
        if (Array.isArray(data.data)) {
          setArticles(data.data.map((item: {
            id: number,
            attributes: ArticleProps
          }) => ({
            id: item.id,
            title: item.attributes.title,
            content: item.attributes.content,
            media: item.attributes.media,
            publishedAt: item.attributes.publishedAt
          })));
        } else {
          console.error('API response is not an array:', data);
        }
      } catch (error) {
        console.error(`Error loading Snippets:`, error);
      }
    };

    const loadTags = async () => {
      try {
        const data = await fetchData({
          endpoint: 'tags',
          params: {
            'pagination[pageSize]': 6
          }
        });
        if (Array.isArray(data.data)) {

          setTags(data.data.map((item: {
            id: number,
            attributes: TagProps
          }) => ({
            id: item.id,
            slug: item.attributes.slug,
            name: item.attributes.name
          })));
        } else {
          console.error('API response is not an array:', data);
        }
      } catch (error) {
        console.error(`Error loading Snippets:`, error);
      }
    };

    loadSnippets();
    loadTags();

  }, []);

  return (
    <main className={styles.home}>
      <FirstView />
      <About />
      <LatestArticles articles={articles} />
      <PopularTags tags={tags} />
      {/* <PopularArticles /> */}
      <Footer />
    </main>
  );
}
