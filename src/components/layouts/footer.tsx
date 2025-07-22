import Logo from "@/components/common/logo";
import Container from "@/components/layouts/container";
import Link from "next/link";
import ImgUga from "@/components/svgs/imgUga";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["900"] });

const Footer = () => (
  <footer className="relative">
    <Container disabledYPadding>
      <div className="max-w-3xl py-8 md:mx-auto md:py-16">
        <div className="bg-white text-black rounded-3xl p-8 shadow-lg grid grid-cols-1 gap-6 md:p-16 md:grid-cols-[auto_1fr] md:gap-10">
          <div className="aspect-square bg-green rounded-3xl w-40 flex items-end justify-center mx-auto md:mx-0">
            <ImgUga />
          </div>

          <div>
            <h2
              className={`text-2xl font-bold mb-2 text-center md:text-left ${montserrat.className}`}
            >
              UGA
            </h2>
            <p className="mb-4 text-sm">
              Webデザイナー兼フロントエンドエンジニア
              <br />
              こんなのあったら便利なのになあを詰め込んだ完全に趣味で作ったサイトです。
              <br />
              Next.jsで作ったよ。
            </p>
            <ul className="flex flex-wrap list-none justify-center p-0 m-0 gap-2 md:justify-start">
              <li>
                <Link
                  href="https://ugaaa.com/"
                  target="_blank"
                  className={`rounded-full text-white text-xs py-1 px-2.5 bg-orange`}
                >
                  WEBSITE
                </Link>
              </li>
              <li>
                <Link
                  href="https://x.com/ugaaaaa_x"
                  className={`rounded-full text-white text-xs py-1 px-2.5 bg-black`}
                >
                  X
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.instagram.com/ugaaa_world/"
                  className={`rounded-full text-white text-xs py-1 px-2.5 bg-pink`}
                >
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  href="https://zenn.dev/ugaaa"
                  className={`rounded-full text-white text-xs py-1 px-2.5 bg-blue`}
                >
                  Zenn
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Container>

    <div className="bg-white border-b-[var(--color-yellow)] border-b-[10px] py-6">
      <Container disabledYPadding>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <Logo />
          <p className="text-xs text-green font-bold">
            © 2025 design-snipeets.com
          </p>
        </div>
      </Container>
    </div>
  </footer>
);

export default Footer;
