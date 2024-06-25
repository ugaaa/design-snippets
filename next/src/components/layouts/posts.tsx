"use client";

import { useEffect, useState } from "react";
import styles from "./posts.module.scss";
import Article from "./article";
import { PostProps } from "@/types/posts";
import useFormattedDate from "@/hooks/useFormattedDate";

export const Post = ({ post }: { post: PostProps }) => {
  return (
    <div>
      <div>{post.attributes.media}</div>
      <div>
        <span>{post.attributes.title}</span>
        <span>{useFormattedDate(post.attributes.publishedAt)}</span>
      </div>
    </div>
  );
};

const Posts = ({ posts }: { posts: PostProps[] }) => {
  return (
    <div>
      {posts.map((post: PostProps) => (
        <div key={post.id}>
          <Post post={post} />
        </div>
      ))}
    </div>
  );
};

export default Posts;
