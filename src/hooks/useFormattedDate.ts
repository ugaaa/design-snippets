import { useState, useEffect } from "react";

/**
 * ISO形式の日付文字列を `yyyy.mm.dd` 形式に変換するカスタムフック
 * @param {string} isoDate - ISO形式の日付文字列
 * @returns {string} - フォーマットされた日付文字列 `yyyy.mm.dd`
 */
const useFormattedDate = (isoDate: string) => {
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    if (isoDate) {
      // Dateオブジェクトを作成
      const date = new Date(isoDate);

      // Intl.DateTimeFormatを使用してフォーマット
      const formatter = new Intl.DateTimeFormat("ja-JP", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      });

      // フォーマットされた日付を取得して `yyyy.mm.dd` 形式に変換
      const dateStr = formatter.format(date).replace(/\//g, ".");

      // フォーマットされた日付を状態に設定
      setFormattedDate(dateStr);
    }
  }, [isoDate]);

  return formattedDate;
};

export default useFormattedDate;
