"use client";

import { Montserrat } from "next/font/google";
import Logo from "@/components/common/logo";
import Searchbox from "@/components/common/searchbox";
import Container from "@/components/layouts/container";
import styles from "./header.module.scss";
import Link from "next/link";
import IcoArrow from "../svgs/icoArrow";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["900"] });

const Header = () => (
  <header className={styles.header}>
    <Container disabledYPadding>
      <div className={styles.headerInner}>
        <div className={styles.logo}>
          <Logo isWhite href="/" />
        </div>

        <nav className={styles.gnav}>
          <ul>
            <li>
              <Link className={montserrat.className} href="/blog">
                BLOG
              </Link>
            </li>
            <li>
              <button
                type="button"
                className={montserrat.className}
                onClick={() => {}}
              >
                TOOLS
                <IcoArrow direction="bottom" />
              </button>
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
