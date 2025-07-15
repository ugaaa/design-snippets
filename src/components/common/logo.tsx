"use client";

import React from "react";
import { Montserrat } from "next/font/google";
import styles from "./logo.module.scss";

type LogoProps<T extends React.ElementType> = {
  as?: T;
  href?: string; // リンクの場合のURL
  isWhite?: boolean;
  children?: React.ReactNode;
} & React.ComponentPropsWithoutRef<T>;

const montserrat = Montserrat({ subsets: ["latin"], weight: ["900"] });
const siteName: string = process.env.NEXT_PUBLIC_SITE_NAME || "";

const formatSiteName = (name: string) => {
  const [firstWord, secondWord] = name.split(" ");
  return (
    <>
      <span className="text-pink">{firstWord.charAt(0)}</span>
      {firstWord.slice(1)}{" "}
      <span className="text-blue">{secondWord.charAt(0)}</span>
      {secondWord.slice(1)}
    </>
  );
};

const Logo = <T extends React.ElementType = "div">({
  as,
  href,
  isWhite,
  ...rest
}: LogoProps<T>) => {
  const Component = href ? "a" : as || "div";
  const classNames = [
    montserrat.className,
    styles.logo,
    isWhite ? "text-white" : "text-yellow",
    Component === "h1" && styles.isLarge,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Component {...rest} className={classNames} href={href}>
      {formatSiteName(siteName)}
    </Component>
  );
};

export default Logo;
