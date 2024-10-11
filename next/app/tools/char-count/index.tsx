"use client";

import { useState } from "react";
import styles from "./charCount.module.scss";
import Grid, { GridItem } from "@/components/layouts/grid";

const CharCountPageInner = () => {
  const [text, setText] = useState("");
  const [charCount, setCharCount] = useState(0);
  const [charCountNoSpaces, setCharCountNoSpaces] = useState(0);

  const handleChange = (e: { target: { value: any } }) => {
    const inputText = e.target.value;
    setText(inputText);
    setCharCount(inputText.length);
    setCharCountNoSpaces(inputText.replace(/\s+/g, "").length);
  };

  return (
    <div className={styles.container}>
      <article className={styles.text}>
        <p>入力したテキストの文字数を簡単にカウントできるよ。</p>
        <p>
          空白や改行を含む総文字数と、空白や改行を除いた純文字数の両方が表示されます。
        </p>
        <p>
          ライティングやコードの最適化など、さまざまな用途にお役立てください！
        </p>
        <p>
          AIと違って入力されたデータはどこにも保存していないので安心して使ってね。
        </p>
      </article>

      <Grid>
        <GridItem span={7}>
          <textarea
            className={styles.textarea}
            value={text}
            onChange={handleChange}
            placeholder="ここにテキストを入力してください"
          />
        </GridItem>
        <GridItem span={5}>
          <div className={styles.charCountContainer}>
            <p className={styles.charCountLabel}>文字数:</p>
            <p className={styles.charCount}>{charCount}</p>
            <p className={styles.charCountLabel}>改行・空白なし文字数:</p>
            <p className={styles.charCount}>{charCountNoSpaces}</p>
          </div>
        </GridItem>
      </Grid>
    </div>
  );
};

export default CharCountPageInner;
