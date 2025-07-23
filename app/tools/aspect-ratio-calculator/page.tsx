import type { Metadata } from "next";
import Container from "@/components/layouts/container";
import Title from "@/components/common/title";
import AspectRatioCalculatorInner from "./index";

const pageTitle = "アスペクト比計算ツール";
const description =
  "アスペクト比計算ツールは、入力した幅と高さからアスペクト比を簡単に計算できる無料のWebツールです。WebデザインやUI/UX設計、フロントエンド開発に役立ちます。";
const canonicalUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/tools/aspect-ratio-calculator/`;

export const metadata: Metadata = {
  title: `${pageTitle} | ${process.env.NEXT_PUBLIC_SITE_NAME} | ${process.env.NEXT_PUBLIC_TAGLINE}`,
  description,
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title: `${pageTitle} | ${process.env.NEXT_PUBLIC_SITE_NAME} | ${process.env.NEXT_PUBLIC_TAGLINE}`,
    description,
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: process.env.NEXT_PUBLIC_SITE_NAME,
    type: "website",
    locale: "ja_JP",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/images/common/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Design SnippetsのOG画像",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${pageTitle} | ${process.env.NEXT_PUBLIC_SITE_NAME} | ${process.env.NEXT_PUBLIC_TAGLINE}`,
    description,
    images: [`${process.env.NEXT_PUBLIC_SITE_URL}/images/common/og-image.png`],
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
        {pageTitle}
      </Title>

      <AspectRatioCalculatorInner />
    </Container>
  );
};

export default AspectRatioCalculatorPage;
