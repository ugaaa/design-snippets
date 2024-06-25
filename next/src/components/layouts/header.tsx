"use client";

import { Montserrat } from "next/font/google";
import Logo from "@/components/common/logo";
import Searchbox from "@/components/common/searchbox";
import Container from "@/components/layouts/container";
import styles from "./header.module.scss";
import Link from "next/link";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["900"] });

const Header = () => (
  <header className={styles.header}>
    <Container disabledYPadding>
      <div className={styles.headerInner}>
        <div className={styles.logo}>
          <Logo isWhite href="/" />
        </div>

        <nav className={styles.gnav}>
          <ul className={montserrat.className}>
            <li>
              <Link href="/blog">BLOG</Link>
            </li>
            <li>
              <Link href="/svgs">SVGs</Link>
            </li>
          </ul>
        </nav>

        <div className={styles.search}>
          <Searchbox />
        </div>
      </div>
    </Container>
  </header>
);

export default Header;
