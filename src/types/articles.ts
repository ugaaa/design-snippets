import { type BlocksContent } from '@strapi/blocks-react-renderer';

export interface ArticleProps {
  id: number;
  title: string;
  content: BlocksContent;
  media?: string;
  publishedAt: string;
}

export type ArticlesProps = ArticleProps[];