"use client";

import Button from "../common/button";
import Title from "../common/title";
import { PostType } from "@/types/posts";
import Posts from "@/components/layouts/posts";
import Container from "../layouts/container";
import Pagination from "../common/pagination";
import { PaginationType } from "@/types/strapi";

const LatestPosts = ({
  posts,
  pagination,
  layout = "section",
}: {
  posts: PostType[];
  pagination?: PaginationType;
  layout?: "section" | "main" | "footer";
}) => {
  return (
    <section>
      <Container
        ball={{
          color: "blue",
          position: layout === "footer" ? "center" : "right",
        }}
        hasTitle
      >
        <Title
          as={layout === "main" ? "h2" : "h1"}
          ball={{ main: "yellow", sub: "pink" }}
          isWhite
        >
          新着記事
        </Title>
        <Posts posts={posts} />
        {layout !== "main" && (
          <Button href="/blog">新着記事をもっと見る</Button>
        )}
        {layout === "main" &&
          pagination?.pageCount &&
          pagination?.pageCount > 1 && (
            <Pagination page={pagination?.page} total={pagination?.pageCount} />
          )}
      </Container>
    </section>
  );
};

export default LatestPosts;
