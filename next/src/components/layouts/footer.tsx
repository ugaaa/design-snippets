"use client";

import Logo from "@/components/common/logo";
import Container from "@/components/layouts/container";
import styles from "./footer.module.scss";
import Link from "next/link";
import ImgUga from "@/components/svgs/imgUga";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["900"] });

const Footer = () => (
  <footer className={styles.footer}>
    <Container disabledYPadding>
      <div className={styles.head}>
        <nav className={styles.nav}>
          <ul className={montserrat.className}>
            <li>
              <Link href="/">HOME</Link>
            </li>
            <li>
              <Link href="/blog">BLOG</Link>
            </li>
            <li>
              <Link href="/sitemap">SITEMAP</Link>
            </li>
          </ul>
        </nav>

        <div className={styles.profile}>
          <div className={styles.img}>
            <ImgUga />
          </div>

          <div className={styles.contents}>
            <h2 className={`${styles.name} ${montserrat.className}`}>UGA</h2>
            <p className={styles.text}>
              Webデザイナー兼フロントエンドエンジニア
              <br />
              こんなのあったら便利なのになあを詰め込んだ完全に趣味で作ったサイトです。
              <br />
              勉強がてらNext.js/Strapiで作ったよ。
            </p>
            <ul className={styles.links}>
              <li>
                <Link
                  href="https://ugaaa.com/"
                  target="_blank"
                  className={`${styles.btn} bg-orange`}
                >
                  WEBSITE
                </Link>
              </li>
              <li>
                <Link
                  href="https://x.com/ugaaaaa_x"
                  className={`${styles.btn} bg-black`}
                >
                  X
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.instagram.com/ugaaa_world/"
                  className={`${styles.btn} bg-pink`}
                >
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  href="https://zenn.dev/ugaaa"
                  className={`${styles.btn} bg-blue`}
                >
                  Zenn
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Container>

    <div className={styles.bottom}>
      <Container disabledYPadding>
        <div className={styles.bottomInner}>
          <Logo />
          <p className={styles.copy}>© 2024 design-snipeets.com</p>
        </div>
      </Container>
    </div>
  </footer>
);

export default Footer;
