"use client";

import styles from "./popularTags.module.scss";
import Container from "@/components/layouts/container";
import Title from "../common/title";
import Button from "../common/button";
import Link from "next/link";
import { TagProps } from "@/types/tags";

const PopularTags = ({ tags }: { tags: TagProps[] }) => {
  const list = tags.map((tag: TagProps) => (
    <li key={tag.id}>
      <Link href={`/tags/${tag.id}`}>
        <span>#{tag.name}</span>
      </Link>
    </li>
  ));

  return (
    <section className="bg-white">
      <Container hasTitle>
        <Title as="h2" ball={{ main: "yellow", sub: "blue" }}>
          人気のタグ
        </Title>
        <ul className={styles.list}>{list}</ul>
        <Button href="/tags">タグをもっと見る</Button>
      </Container>
    </section>
  );
};

export default PopularTags;
