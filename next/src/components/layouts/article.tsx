import {
  BlocksRenderer,
  type BlocksContent,
} from "@strapi/blocks-react-renderer";
import React from "react";

interface PostType {
  content: BlocksContent;
}

const Article: React.FC<PostType> = ({ content }) => {
  return (
    <article>
      <BlocksRenderer content={content} />;
    </article>
  );
};

export default Article;
