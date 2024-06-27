import { type BlocksContent } from "@strapi/blocks-react-renderer";
import { TagProps } from "./tags";
import { ThumbnailType } from "./strapi";

export interface PostProps {
  id: number;
  attributes: {
    title: string;
    content: BlocksContent;
    media?: string;
    tags?: { data?: TagProps[] };
    thumbnail?: { data?: ThumbnailType };
    publishedAt: string;
  };
}
