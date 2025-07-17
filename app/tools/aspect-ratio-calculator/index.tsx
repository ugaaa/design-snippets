"use client";

import { useState } from "react";
import MovingBouncingBalls from "@/components/snippets/movingBouncingBalls";

const AspectRatioCalculatorInner = () => {
  const [width, setWidth] = useState<string>("");
  const [height, setHeight] = useState<string>("");

  // アスペクト比の定義
  const aspectRatios = [
    {
      ratio: [1, 2],
      className: { w: "aspect-[1/2]", h: "aspect-[2/1]" },
    },
    {
      ratio: [2, 3],
      className: { w: "aspect-[2/3]", h: "aspect-[3/2]" },
    },
    {
      ratio: [3, 4],
      className: { w: "aspect-[3/4]", h: "aspect-[4/3]" },
    },
    {
      ratio: [9, 16],
      className: { w: "aspect-[9/16]", h: "aspect-[16/9]" },
    },
    {
      name: "黄金比",
      ratio: [1, 1.618],
      className: { w: "aspect-[1000/1618]", h: "aspect-[1618/1000]" },
    },
    {
      name: "白銀比",
      ratio: [1, 1.414],
      className: { w: "aspect-[1000/1414]", h: "aspect-[1414/1000]" },
    },
  ];

  // 入力値から計算された高さ
  const calculateHeights = () => {
    const w = parseFloat(width);

    return aspectRatios.map((ar) => ({
      name: ar.name || `${ar.ratio[1]} / ${ar.ratio[0]}`,
      value:
        isNaN(w) || w <= 0 ? 0 : Math.round(w / (ar.ratio[1] / ar.ratio[0])),
      className: ar.className.h,
    }));
  };

  // 入力値から計算された幅
  const calculateWidths = () => {
    const h = parseFloat(height);

    return aspectRatios.map((ar) => ({
      name: ar.name || `${ar.ratio[0]} / ${ar.ratio[1]}`,
      value:
        isNaN(h) || h <= 0 ? 0 : Math.round(h * (ar.ratio[0] / ar.ratio[1])),
      className: ar.className.w,
    }));
  };

  // 現在のアスペクト比を計算
  const getCurrentRatio = () => {
    const w = parseFloat(width);
    const h = parseFloat(height);
    if (isNaN(w) || isNaN(h) || w <= 0 || h <= 0) return null;

    const ratio = w / h;
    const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));
    let numerator: number, denominator: number;

    if (Number.isInteger(w) && Number.isInteger(h)) {
      // 整数同士の場合は直接約分
      numerator = w;
      denominator = h;
    } else {
      // 小数を含む場合は精度のため1000倍
      const precision = 1000;
      numerator = Math.round(ratio * precision);
      denominator = precision;
    }
    const divisor = gcd(numerator, denominator);

    return {
      decimal: ratio.toFixed(3),
      simplified: `${numerator / divisor} / ${denominator / divisor}`,
    };
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full mix-blend-multiply">
        <MovingBouncingBalls />
      </div>
      <div className="relative flex flex-col gap-10 w-full bg-white p-6 md:p-10 rounded-3xl shadow-lg">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {/* 入力フィールド */}
          <div className="grid grid-cols-[auto_1fr] items-center gap-2.5">
            <div className="flex items-center gap-2">
              <span className="block w-1 h-8 bg-pink" />
              <label className="text-sm font-medium">幅</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="number"
                value={width}
                onChange={(e) => setWidth(e.target.value)}
                className="p-2 w-32 border rounded-lg focus:outline-pink"
                placeholder="例）1920"
              />
              <span>px</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="block w-1 h-8 bg-orange" />
              <label className="text-sm font-medium">高さ</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="p-2 w-32 border rounded-lg focus:outline-orange"
                placeholder="例）1080"
              />
              <span>px</span>
            </div>
          </div>

          {/* アスペクト比の選択 */}
          {width && height && getCurrentRatio() && (
            <div>
              <h3 className="text-lg font-semibold mb-4">現在のアスペクト比</h3>
              <div className="bg-blue-100 rounded">
                <div className="text-xl font-bold">
                  {getCurrentRatio()?.simplified}
                </div>
                <div className="text-gray-600">
                  小数: {getCurrentRatio()?.decimal}
                </div>
                <div className="text-gray-600">
                  CSS: {`aspect-ratio: ${getCurrentRatio()?.simplified};`}
                </div>
              </div>
            </div>
          )}
        </div>

        <hr />

        <div>
          <h3 className="text-lg font-semibold mb-4">計算結果（高さ）</h3>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-6">
            {calculateHeights().map((result, index) => (
              <div
                key={index}
                className={`${result.className} p-3 bg-pink text-white rounded-xl`}
              >
                <div className="font-medium mb-4">{result.name}</div>

                <div className="flex items-center gap-2 text-xs">
                  <span>幅:</span>
                  <span>{width || 0}px</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <span>高さ:</span>
                  <span>
                    <span className="font-bold md:text-lg">{result.value}</span>
                    px
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">計算結果（幅）</h3>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-6">
            {calculateWidths().map((result, index) => (
              <div
                key={index}
                className={`${result.className} p-3 bg-orange text-white rounded-xl`}
              >
                <div className="font-medium mb-4">{result.name}</div>

                <div className="flex items-center gap-2 text-xs">
                  <span>高さ:</span>
                  <span>{height || 0}px</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <span>幅:</span>
                  <span>
                    <span className="font-bold md:text-lg">{result.value}</span>
                    px
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AspectRatioCalculatorInner;
