import { type BlocksContent } from "@strapi/blocks-react-renderer";
import { TagProps } from "./tags";

export interface PostProps {
  id: number;
  attributes: {
    title: string;
    content: BlocksContent;
    media?: string;
    tags: { data: TagProps[] };
    publishedAt: string;
  };
}
