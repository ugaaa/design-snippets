import {
  BlocksRenderer,
  type BlocksContent,
} from "@strapi/blocks-react-renderer";
import React from "react";

interface PostProps {
  content: BlocksContent;
}

const Article: React.FC<PostProps> = ({ content }) => {
  return (
    <article>
      <BlocksRenderer content={content} />;
    </article>
  );
};

export default Article;
