"use client";

import Logo from "@/components/common/logo";
import Searchbox from "@/components/common/searchbox";
import Container from "@/components/layouts/container";
import styles from "./header.module.scss";

const Header = () => (
  <header className={styles.header}>
    <Container disabledYPadding>
      <div className={styles.headerInner}>
        <div className={styles.logo}>
          <Logo isWhite href="/" />
        </div>

        <div className={styles.search}>
          <Searchbox />
        </div>
      </div>
    </Container>
  </header>
);

export default Header;
