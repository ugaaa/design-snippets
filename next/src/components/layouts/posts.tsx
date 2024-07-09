"use client";

import styles from "./posts.module.scss";
import { PostType } from "@/types/posts";
import useFormattedDate from "@/hooks/useFormattedDate";
import ImageComponent from "../common/ImageComponent";
import Tags from "./tags";
import { Montserrat } from "next/font/google";
import Grid, { GridItem } from "./grid";
import Link from "next/link";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400"] });

export const Post = ({ post }: { post: PostType }) => {
  return (
    <div className={styles.post}>
      <div className={styles.thumbnail}>
        <ImageComponent
          src={
            post.attributes.thumbnail?.data &&
            `${process.env.NEXT_PUBLIC_IMAGE_URL}${post.attributes.thumbnail.data.attributes.formats.large.url}`
          }
          alt={post.attributes.title}
        />
      </div>
      <div className={styles.contents}>
        <div className={styles.head}>
          {post.attributes.tags?.data && (
            <div className={styles.tags}>
              <Tags tags={post.attributes.tags.data} />
            </div>
          )}
          <Link href={`/blog/${post.id}`} className={styles.link}>
            <h3 className={styles.title}>{post.attributes.title}</h3>
          </Link>
        </div>
        <p className={`${montserrat.className} ${styles.date} text-black-60`}>
          {useFormattedDate(post.attributes.publishedAt)}
        </p>
      </div>
    </div>
  );
};

const Posts = ({ posts }: { posts: PostType[] }) => {
  return (
    <Grid className={styles.posts}>
      {posts.map((post: PostType) => (
        <GridItem key={post.id} span={4} spanSp={6}>
          <Post post={post} />
        </GridItem>
      ))}
    </Grid>
  );
};

export default Posts;
