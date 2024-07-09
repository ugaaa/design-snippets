"use client";

import Container from "@/components/layouts/container";
import Title from "../common/title";
import Button, { LargeButton } from "../common/button";
import { TagType } from "@/types/tags";
import Grid, { GridItem } from "../layouts/grid";

const PopularTags = ({ tags }: { tags: TagType[] }) => {
  return (
    <section className="bg-white">
      <Container hasTitle>
        <Title as="h2" ball={{ main: "yellow", sub: "blue" }}>
          人気のタグ
        </Title>
        <Grid>
          {tags.map((tag: TagType) => (
            <GridItem span={4} spanSp={6} key={tag.id}>
              <LargeButton href={`/blog/tags/${tag.id}`} isOrange>
                <span>#{tag.attributes.name}</span>
              </LargeButton>
            </GridItem>
          ))}
        </Grid>
        <Button href="/blog/tags">タグをもっと見る</Button>
      </Container>
    </section>
  );
};

export default PopularTags;
