"use client";

import MovingBouncingBalls from "@/components/snippets/movingBouncingBalls";
import { useState } from "react";

const CharCountPageInner = () => {
  const [text, setText] = useState("");
  const [charCount, setCharCount] = useState(0);
  const [charCountNoSpaces, setCharCountNoSpaces] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputText = e.target.value;
    setText(inputText);
    setCharCount(inputText.length);
    setCharCountNoSpaces(inputText.replace(/\s+/g, "").length);
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full mix-blend-multiply">
        <MovingBouncingBalls />
      </div>
      <div className="relative w-full bg-white grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[auto_1fr] p-6 gap-8 md:gap-10 md:p-16 rounded-3xl shadow-lg">
        <article className="order-3 text-sm leading-loose md:order-1">
          <p>
            テキストを入力すると、リアルタイムで文字数をカウントできます。
            <br />
            総文字数と、空白や改行を除いた文字数の両方を表示します。
            <br />
            文章作成やSNS投稿、原稿チェックなど、幅広いシーンでご活用ください。
            <br />
            入力内容は保存されませんので、安心してご利用いただけます。
          </p>
        </article>

        <hr className="order-2 md:hidden" />

        <div className="order-1 md:order-2">
          <div className="mb-4">
            <p className="text-xs">
              <span>文字数 :</span>
              <span className="text-2xl font-bold ml-2">{charCount}</span>
            </p>
            <p className="text-xs leading-loose">
              <span>改行・空白なし文字数 :</span>
              <span className="text-2xl font-bold ml-2">
                {charCountNoSpaces}
              </span>
            </p>
          </div>
          <textarea
            className="w-full min-h-48 p-4 border rounded-xl focus:outline-pink"
            value={text}
            onChange={handleChange}
            placeholder="ここにテキストを入力してください"
          />
        </div>
      </div>
    </>
  );
};

export default CharCountPageInner;
