"use client";

import Button from "../common/button";
import Title from "../common/title";
import { PostProps } from "@/types/posts";
import Posts from "@/components/layouts/posts";
import Container from "../layouts/container";
import Pagination from "../common/pagination";
import { PaginationTypes } from "@/types/strapi";

const LatestPosts = ({
  posts,
  pagination,
  isSecondary,
}: {
  posts: PostProps[];
  pagination?: PaginationTypes;
  isSecondary?: boolean;
}) => {
  return (
    <section>
      <Container
        ball={{
          color: isSecondary ? "pink" : "blue",
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
        {isSecondary ? (
          <Button href="/blog">新着記事をもっと見る</Button>
        ) : (
          <Pagination pagination={pagination} />
        )}
      </Container>
    </section>
  );
};

export default LatestPosts;
