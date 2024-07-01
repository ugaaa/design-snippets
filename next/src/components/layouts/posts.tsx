"use client";

import styles from "./posts.module.scss";
import { PostType } from "@/types/posts";
import useFormattedDate from "@/hooks/useFormattedDate";
import ImageComponent from "../common/ImageComponent";
import Tags from "./tags";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400"] });

export const Post = ({ post }: { post: PostType }) => {
  return (
    <div className={styles.post}>
      <ImageComponent
        src={
          post.attributes.thumbnail?.data &&
          `${process.env.NEXT_PUBLIC_IMAGE_URL}${post.attributes.thumbnail.data.attributes.formats.large.url}`
        }
        alt={post.attributes.title}
      />
      <div className={styles.contents}>
        <div className={styles.head}>
          {post.attributes.tags?.data && (
            <Tags tags={post.attributes.tags.data} />
          )}
          <h3 className={styles.title}>{post.attributes.title}</h3>
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
    <div className={styles.posts}>
      {posts.map((post: PostType) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Posts;
