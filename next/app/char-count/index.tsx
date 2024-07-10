"use client";

import { useState } from "react";
import styles from "./charCount.module.scss";

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
      <p>
        このツールを使用して、入力したテキストの文字数を簡単にカウントできます。
      </p>
      <p>
        空白や改行を含む総文字数と、空白や改行を除いた純文字数の両方が表示されます。
      </p>
      <p>
        ライティングやコードの最適化など、さまざまな用途にお役立てください。
      </p>

      <textarea
        className={styles.textarea}
        value={text}
        onChange={handleChange}
        placeholder="ここにテキストを入力してください"
      />
      <p>文字数: {charCount}</p>
      <p>改行・空白なし文字数: {charCountNoSpaces}</p>
    </div>
  );
};

export default CharCountPageInner;
