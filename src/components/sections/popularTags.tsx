"use client";

import styles from './popularTags.module.scss';
import Container from "@/components/layouts/container";
import Title from "../common/title";
import Button from "../common/button";
import Link from 'next/link';

const PopularTags = () => {
  const tags = [
    {
      id: 0,
      name: "WEBsaito",
    },
    {
      id: 1,
      name: "aaa",
    },
    {
      id: 2,
      name: "aaa",
    },
    {
      id: 3,
      name: "aaa",
    },
    {
      id: 4,
      name: "aaa",
    }
  ];
  const list = tags.map((tag: TagProps) => (
    <li key={tag.id}>
      <Link href={`/tags/${tag.id}`}>
        <span>
          {tag.name}
        </span>
      </Link>
    </li>
  ));

  return (
    <section className="bg-white">
      <Container hasTitle>
        <Title as="h2" ball={{main: 'yellow', sub: 'blue'}}>人気のタグ</Title>
        <ul className={styles.list}>
          {list}
        </ul>
        <Button href="/tags">タグをもっと見る</Button>
      </Container>
    </section>
  );
};

export default PopularTags;
