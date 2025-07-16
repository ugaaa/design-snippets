import type { Metadata } from "next";
import Container from "@/components/layouts/container";
import CharCountPageInner from "./index";
import Title from "@/components/common/title";

export const metadata: Metadata = {
  title:
    "文字数カウント | Design Snippets | Webデザイン・UI/UX・フロントエンド開発のための便利ツール集",
  description:
    "テキストを入力すると、リアルタイムで文字数をカウントできます。総文字数と、空白や改行を除いた文字数の両方を表示します。文章作成やSNS投稿、原稿チェックなど、幅広いシーンでご活用ください。入力内容は保存されませんので、安心してご利用いただけます。",
  openGraph: {
    title:
      "文字数カウント | Design Snippets | Webデザイン・UI/UX・フロントエンド開発のための便利ツール集",
    description:
      "テキストを入力すると、リアルタイムで文字数をカウントできます。総文字数と、空白や改行を除いた文字数の両方を表示します。文章作成やSNS投稿、原稿チェックなど、幅広いシーンでご活用ください。入力内容は保存されませんので、安心してご利用いただけます。",
    url: process.env.NEXT_PUBLIC_IMAGE_URL,
    siteName: "Design Snippets",
    type: "website",
    locale: "ja_JP",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_IMAGE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Design SnippetsのOG画像",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Design Snippets | Webデザイン・UI/UX・フロントエンド開発のための便利ツール集",
    description:
      "WebデザインやUI/UX、フロントエンド開発に役立つデザインスニペット・コード例・便利ツールを多数掲載。",
    images: [`${process.env.NEXT_PUBLIC_IMAGE_URL}/og-image.png`],
  },
};

const CharCountPage = () => {
  return (
    <Container
      ball={{
        color: "pink",
        position: "right",
      }}
      hasTitle
    >
      <Title as={"h1"} ball={{ main: "green", sub: "yellow" }} isWhite>
        文字数カウントツール
      </Title>

      <CharCountPageInner />
    </Container>
  );
};

export default CharCountPage;
