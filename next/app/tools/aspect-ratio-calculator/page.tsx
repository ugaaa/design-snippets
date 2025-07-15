"use client";

import Container from "@/components/layouts/container";
import Title from "@/components/common/title";
import { useState } from "react";

const AspectRatioCalculatorPage = () => {
  const [mode, setMode] = useState<"width" | "height">("width");
  const [width, setWidth] = useState<string>("");
  const [height, setHeight] = useState<string>("");

  // アスペクト比の定義
  const aspectRatios = [
    { name: "1:2", ratio: 1 / 2 },
    { name: "2:3", ratio: 2 / 3 },
    { name: "3:4", ratio: 3 / 4 },
    { name: "4:3", ratio: 4 / 3 },
    { name: "16:9", ratio: 16 / 9 },
    { name: "黄金比", ratio: 1.618 },
    { name: "白銀比", ratio: 1.414 },
  ];

  // 入力値から計算された高さ
  const calculateHeights = () => {
    const w = parseFloat(width);
    if (isNaN(w) || w <= 0) return [];

    return aspectRatios.map((ar) => ({
      name: ar.name,
      value: Math.round(w / ar.ratio),
    }));
  };

  // 入力値から計算された幅
  const calculateWidths = () => {
    const h = parseFloat(height);
    if (isNaN(h) || h <= 0) return [];

    return aspectRatios.map((ar) => ({
      name: ar.name,
      value: Math.round(h * ar.ratio),
    }));
  };

  // 現在のアスペクト比を計算
  const getCurrentRatio = () => {
    const w = parseFloat(width);
    const h = parseFloat(height);
    if (isNaN(w) || isNaN(h) || w <= 0 || h <= 0) return null;

    const ratio = w / h;
    const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));
    const denominator = 1000; // 精度のため
    const numerator = Math.round(ratio * denominator);
    const divisor = gcd(numerator, denominator);

    return {
      decimal: ratio.toFixed(3),
      simplified: `${numerator / divisor}:${denominator / divisor}`,
    };
  };

  return (
    <Container
      ball={{
        color: "pink",
        position: "right",
      }}
      hasTitle
    >
      <Title as={"h1"} ball={{ main: "green", sub: "yellow" }} isWhite>
        アスペクト比計算
      </Title>

      <div className="space-y-6">
        {/* モード選択 */}
        <div>
          <label className="block text-sm font-medium mb-2">計算モード</label>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input
                type="radio"
                value="width"
                checked={mode === "width"}
                onChange={(e) => setMode(e.target.value as "width")}
                className="mr-2"
              />
              幅から高さを計算
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value="height"
                checked={mode === "height"}
                onChange={(e) => setMode(e.target.value as "height")}
                className="mr-2"
              />
              高さから幅を計算
            </label>
          </div>
        </div>

        {/* 入力フィールド */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">幅 (px)</label>
            <input
              type="number"
              value={width}
              onChange={(e) => setWidth(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="例: 1920"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">高さ (px)</label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="例: 1080"
            />
          </div>
        </div>

        {/* 結果表示 */}
        {mode === "width" && width && (
          <div>
            <h3 className="text-lg font-semibold mb-3">計算結果（高さ）</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {calculateHeights().map((result, index) => (
                <div key={index} className="p-3 bg-gray-100 rounded">
                  <div className="font-medium">{result.name}</div>
                  <div className="text-lg">{result.value}px</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {mode === "height" && height && (
          <div>
            <h3 className="text-lg font-semibold mb-3">計算結果（幅）</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {calculateWidths().map((result, index) => (
                <div key={index} className="p-3 bg-gray-100 rounded">
                  <div className="font-medium">{result.name}</div>
                  <div className="text-lg">{result.value}px</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 現在のアスペクト比 */}
        {width && height && getCurrentRatio() && (
          <div>
            <h3 className="text-lg font-semibold mb-3">現在のアスペクト比</h3>
            <div className="p-4 bg-blue-100 rounded">
              <div className="text-xl font-bold">
                {getCurrentRatio()?.simplified}
              </div>
              <div className="text-gray-600">
                小数: {getCurrentRatio()?.decimal}
              </div>
            </div>
          </div>
        )}
      </div>
    </Container>
  );
};

export default AspectRatioCalculatorPage;
