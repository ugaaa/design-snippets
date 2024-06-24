"use client";

import { ArticlesProps } from "@/types/articles";
import Button from "../common/button";
import Title from "../common/title";
import Articles from "../layouts/articles";
import Container from "../layouts/container";

const LatestArticles = ({ articles }: { articles: ArticlesProps }) => {
  return (
    <section>
      <Container ball={{ color: "blue", position: "right" }} hasTitle>
        <Title as="h2" isWhite>
          新着記事
        </Title>
        <Articles articles={articles} />
        <Button href="/article">新着記事をもっと見る</Button>
      </Container>
    </section>
  );
};

export default LatestArticles;
