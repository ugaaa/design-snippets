"use client";

import IcoSearch from "../svgs/icoSearch";
import styles from "./searchbox.module.scss";

const searchbox = () => (
  <div className={styles.searchbox}>
    <input type="text" />
    <span className={styles.icon}>
      <IcoSearch />
    </span>
  </div>
);

export default searchbox;
