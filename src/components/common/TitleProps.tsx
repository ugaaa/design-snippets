"use client";
import { ColorProps } from "@/types/colors";

export type TitleProps<T extends React.ElementType> = {
  as?: T;
  ball?: {
    main: ColorProps;
    sub: ColorProps;
  };
  isWhite?: boolean;
  children?: React.ReactNode;
} & React.ComponentPropsWithoutRef<T>;
