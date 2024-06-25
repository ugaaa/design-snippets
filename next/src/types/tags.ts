import { PostProps } from "./posts";

export interface TagProps {
  id: number;
  attributes: {
    slug: string;
    name: string;
    snippets?: {
      data: PostProps[];
    };
  };
}
