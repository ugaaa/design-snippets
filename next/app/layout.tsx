import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "../src/styles/globals.css";
import Header from "@/components/layouts/header";
import Footer from "@/components/layouts/footer";
import ToolsFooter from "@/components/sections/toolsFooter";

const notoSansJP = Noto_Sans_JP({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={notoSansJP.className}>
        <Header />
        <div className="site-wrapper">
          <main>
            {children}
            <ToolsFooter />
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
