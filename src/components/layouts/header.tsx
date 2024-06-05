"use client";

import Logo from "@/components/common/logo";
import Searchbox from "@/components/common/searchbox";
import styles from "./header.module.scss";

const Header = () => (
  <header className={styles.header}>
    <div className={styles.logo}>
      <Logo isWhite />
    </div>

    <div className={styles.search}>
      <Searchbox />
    </div>
  </header>
);

export default Header;
