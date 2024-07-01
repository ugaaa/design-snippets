import { type BlocksContent } from "@strapi/blocks-react-renderer";
import { TagType } from "./tags";
import { StrapiMetaTypes, ThumbnailType } from "./strapi";

export interface PostType {
  id: number;
  attributes: {
    title: string;
    content: BlocksContent;
    media?: string;
    tags?: { data?: TagType[] };
    thumbnail?: { data?: ThumbnailType };
    publishedAt: string;
  };
}

export type PostsType = {
  data: PostType[];
  meta: StrapiMetaTypes;
};
