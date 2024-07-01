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
  isSecondary,
}: {
  posts: PostType[];
  pagination?: PaginationType;
  isSecondary?: boolean;
}) => {
  return (
    <section>
      <Container
        ball={{
          color: "pink",
          position: isSecondary ? "center" : "right",
        }}
        hasTitle
      >
        <Title
          as={isSecondary ? "h2" : "h1"}
          ball={{ main: "green", sub: "yellow" }}
          isWhite
        >
          新着記事
        </Title>
        <Posts posts={posts} />
        {isSecondary && <Button href="/blog">新着記事をもっと見る</Button>}
        {!isSecondary && pagination?.pageCount && pagination?.pageCount > 1 && (
          <Pagination page={pagination?.page} total={pagination?.pageCount} />
        )}
      </Container>
    </section>
  );
};

export default LatestPosts;
