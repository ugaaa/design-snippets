import {
  BlocksRenderer,
  type BlocksContent,
} from "@strapi/blocks-react-renderer";
import React from "react";

interface RichTextProps {
  content: BlocksContent;
}

const RichText: React.FC<RichTextProps> = ({ content }) => {
  return (
    <article>
      <BlocksRenderer content={content} />;
    </article>
  );
};

export default RichText;
