"use client";

import { useEffect, useState } from "react";
import styles from "./home.module.scss";
import FirstView from "@/components/sections/firstView";
import Footer from "@/components/layouts/footer";
import About from "@/components/sections/about";
import LatestArticles from "@/components/sections/latestArticles";
import PopularArticles from "@/components/sections/popularArticles";
import PopularTags from "@/components/sections/popularTags";

interface Snippet {
  id: number;
  title: string;
  description: string;
  code: string;
}

export default function Home() {
  const [snippets, setSnippets] = useState<Snippet[]>([]);

  useEffect(() => {
    const fetchSnippets = async () => {
      try {
        const response = await fetch('http://localhost:1337/api/snippets', {
          headers: {
            'Authorization': 'Bearer f45f5fb315958369b531c1cb69adb87e9835fbd5e54b8869126938df68f3ac86d54e0068eac2dcbed243c1909c5c8a751cb815293230a2d3c8b15d5c1a877ef0be6f13b0382663e7db771952cb4ace5d0dbf861c42f62025313754dccc29f8fe19467699323905b1899a4605997bcd659053b6483488d4c73eee6a01ddaf8cdc', // 作成したAPIトークンをここに挿入
          },
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Fetched data:', data);
        if (Array.isArray(data.data)) {
          setSnippets(data.data.map((item: any) => ({
            id: item.id,
            title: item.attributes.title,
            description: item.attributes.description,
            code: item.attributes.code,
          })));
        } else {
          console.error('API response is not an array:', data);
        }
      } catch (error) {
        console.error('Error fetching snippets:', error);
      }
    };

    fetchSnippets();
  }, []);

  return (
    <main className={styles.home}>
      <FirstView />
      <About />
      <LatestArticles />
      <PopularTags />
      <PopularArticles />
      <Footer />
    </main>
  );
}
