import { PostType } from "./posts";
import { StrapiMetaTypes } from "./strapi";

export interface TagType {
  id: number;
  attributes: {
    slug: string;
    name: string;
    snippets?: {
      data: PostType[];
    };
  };
}

export interface TagResponseType {
  data: TagType;
  meta: StrapiMetaTypes;
}
