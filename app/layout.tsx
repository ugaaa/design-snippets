import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "../src/styles/globals.css";
import Header from "@/components/layouts/header";
import Footer from "@/components/layouts/footer";
import Script from "next/script";
import { ReactNode } from "react";
import { headers } from "next/headers";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const notoSansJP = Noto_Sans_JP({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Design Snippets | Webデザイン・UI/UX・フロントエンド開発のための便利ツール集",
  description:
    "WebデザインやUI/UX、フロントエンド開発に役立つデザインスニペット・コード例・便利ツールを多数掲載。React/Next.js対応、最新トレンドや実装テクニックも紹介。初心者からプロまで幅広く活用できるリソース集。",
  keywords: [
    "デザインスニペット",
    "Webデザイン",
    "UI",
    "UX",
    "フロントエンド",
    "React",
    "Next.js",
    "CSS",
    "JavaScript",
    "便利ツール",
    "コード例",
    "開発リソース",
  ],
  openGraph: {
    title:
      "Design Snippets | Webデザイン・UI/UX・フロントエンド開発のための便利ツール集",
    description:
      "WebデザインやUI/UX、フロントエンド開発に役立つデザインスニペット・コード例・便利ツールを多数掲載。React/Next.js対応、最新トレンドや実装テクニックも紹介。",
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
      "Design Snippets | Webデザイン・UI/UX・フロントエンド開発のための便利ツール集",
    description:
      "WebデザインやUI/UX、フロントエンド開発に役立つデザインスニペット・コード例・便利ツールを多数掲載。",
    images: [`${process.env.NEXT_PUBLIC_IMAGE_URL}/images/common/og-image.png`],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
           window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());

           gtag('config', '${GA_ID}');
           `,
        }}
      />
      <body className={` ${notoSansJP.className}`}>
        <div className="relative w-full">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
