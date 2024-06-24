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
    <Container>
      <div className={styles.head}>
        <nav className={styles.nav}>
          <ul className={montserrat.className}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/latest-articles">LATEST ARTICLES</Link>
            </li>
            <li>
              <Link href="/tags">TAGS</Link>
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
                <a href="" className={`${styles.btn} bg-orange`}>
                  WEBSITE
                </a>
              </li>
              <li>
                <a href="" className={`${styles.btn} bg-black`}>
                  X
                </a>
              </li>
              <li>
                <a href="" className={`${styles.btn} bg-pink`}>
                  Instagram
                </a>
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
