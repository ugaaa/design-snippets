import type { Metadata } from "next";
import Container from "@/components/layouts/container";
import SvgPageInner from ".";
import Title from "@/components/common/title";

const pageTitle = "Loading SVG カスタマイザー";
const description =
  "Loading SVG カスタマイザーは、SVGアニメーションを簡単にカスタマイズできる無料のWebツールです。色やサイズ、アニメーションの速度などを調整し、オリジナルのLoading SVGを作成できます。";

export const metadata: Metadata = {
  title: `${pageTitle} | ${process.env.NEXT_PUBLIC_SITE_NAME} | ${process.env.NEXT_PUBLIC_TAGLINE}`,
  description,
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/tools/loading-svg-customizer/`,
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

const SvgPage = () => {
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

      <SvgPageInner />
    </Container>
  );
};

export default SvgPage;
