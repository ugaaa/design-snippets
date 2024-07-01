export type PaginationType = {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
};

export type ImageBaseType = {
  ext: string;
  hash: string;
  height: number;
  mime: string;
  name: string;
  size: number;
  url: string;
  width: number;
};

export type ImageType = ImageBaseType & {
  path: null;
  sizeInBytes: number;
};

export type ThumbnailType = {
  id: number;
  attributes: ImageBaseType & {
    alternativeText: null;
    caption: null;
    createdAt: string;
    previewUrl: null;
    provider: string;
    provider_metadata: null;
    updatedAt: string;
    formats: {
      large: ImageType;
      medium: ImageType;
      small: ImageType;
      thumnmail: ImageType;
    };
  };
};

export type StrapiMetaTypes = {
  pagination: PaginationType;
};
