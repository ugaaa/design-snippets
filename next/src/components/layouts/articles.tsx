import { useEffect, useState } from "react";
import RichText from "./richtext";
import { ArticleProps, ArticlesProps } from "@/types/articles";

const Article = ({ article }: { article: ArticleProps }) => {
  return (
    <div>
      <span>{article.media}</span>
      <span>{article.title}</span>
      <RichText content={article.content}></RichText>
      <span>{article.publishedAt}</span>
    </div>
  );
};

const Articles = ({ articles }: { articles: ArticlesProps }) => {
  return (
    <div>
      {articles.map((article: ArticleProps) => (
        <div key={article.id}>
          <Article article={article} />
        </div>
      ))}
    </div>
  );
};

export default Articles;
