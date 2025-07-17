import type { Metadata } from "next";
import Container from "@/components/layouts/container";
import Title from "@/components/common/title";
import AspectRatioCalculatorInner from "./index";

export const metadata: Metadata = {
  title:
    "アスペクト比計算ツール | Design Snippets | Webデザイン・UI/UX・フロントエンド開発のための便利ツール集",
  description:
    "アスペクト比計算ツールは、入力した幅と高さからアスペクト比を簡単に計算できる無料のWebツールです。WebデザインやUI/UX設計、フロントエンド開発に役立ちます。",
  openGraph: {
    title:
      "アスペクト比計算ツール | Design Snippets | Webデザイン・UI/UX・フロントエンド開発のための便利ツール集",
    description:
      "アスペクト比計算ツールは、入力した幅と高さからアスペクト比を簡単に計算できる無料のWebツールです。WebデザインやUI/UX設計、フロントエンド開発に役立ちます。",
    url: process.env.NEXT_PUBLIC_IMAGE_URL,
    siteName: "Design Snippets",
    type: "website",
    locale: "ja_JP",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_IMAGE_URL}/images/common/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Design SnippetsのOG画像",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "アスペクト比計算ツール | Design Snippets | Webデザイン・UI/UX・フロントエンド開発のための便利ツール集",
    description:
      "WebデザインやUI/アスペクト比計算ツールは、入力した幅と高さからアスペクト比を簡単に計算できる無料のWebツールです。WebデザインやUI/UX設計、フロントエンド開発に役立ちます。",
    images: [`${process.env.NEXT_PUBLIC_IMAGE_URL}/images/common/og-image.png`],
  },
};

const AspectRatioCalculatorPage = () => {
  return (
    <Container
      ball={{
        color: "pink",
        position: "right",
      }}
      hasTitle
    >
      <Title as={"h1"} isWhite>
        アスペクト比計算
      </Title>

      <AspectRatioCalculatorInner />
    </Container>
  );
};

export default AspectRatioCalculatorPage;
