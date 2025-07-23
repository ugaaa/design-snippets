"use client";

import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import MovingBouncingBalls from "@/components/snippets/movingBouncingBalls";

export const svgs = [
  {
    name: "Circle Loader",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="35" stroke="#000" stroke-width="1" fill="none" stroke-linecap="round" stroke-dasharray="31.4 31.4">
    <animateTransform 
      attributeName="transform" 
      type="rotate" 
      from="0 50 50" 
      to="360 50 50" 
      dur="1s" 
      repeatCount="indefinite" />
  </circle>
</svg>`,
  },
  {
    name: "Circle Loader",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><circle cx="25" cy="25" r="20" stroke-width="1" stroke="#000" fill="none"><animateTransform attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="2s" repeatCount="indefinite"/></circle></svg>`,
  },
  {
    name: "Spinner",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><circle cx="25" cy="25" r="20" stroke-width="1" stroke="#000" fill="none" stroke-dasharray="31.4 31.4"><animateTransform attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="1s" repeatCount="indefinite"/></circle></svg>`,
  },
  {
    name: "Ellipsis",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 30" xmlns="http://www.w3.org/2000/svg" fill="#000"><circle cx="15" cy="15" r="15"><animate attributeName="r" from="15" to="15" begin="0s" dur="0.5s" values="15;9;15" calcMode="linear" repeatCount="indefinite"/><animate attributeName="fillOpacity" from="1" to="1" begin="0s" dur="0.5s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"/></circle><circle cx="60" cy="15" r="9" fillOpacity="0.3"><animate attributeName="r" from="9" to="9" begin="0s" dur="0.5s" values="9;15;9" calcMode="linear" repeatCount="indefinite"/><animate attributeName="fillOpacity" from="0.5" to="0.5" begin="0s" dur="0.5s" values=".5;1;.5" calcMode="linear" repeatCount="indefinite"/></circle><circle cx="105" cy="15" r="15"><animate attributeName="r" from="15" to="15" begin="0s" dur="0.5s" values="15;9;15" calcMode="linear" repeatCount="indefinite"/><animate attributeName="fillOpacity" from="1" to="1" begin="0s" dur="0.5s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"/></circle></svg>`,
  },
  {
    name: "Bounce",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" fill="#000"><circle cx="15" cy="60" r="12"><animate attributeName="cy" from="60" to="60" begin="0s" dur="0.25s" values="60;50;60" calcMode="linear" repeatCount="indefinite"/></circle><circle cx="60" cy="60" r="12" fillOpacity="0.3"><animate attributeName="cy" from="60" to="60" begin="0s" dur="0.25s" values="60;50;60" calcMode="linear" repeatCount="indefinite"/></circle><circle cx="105" cy="60" r="12"><animate attributeName="cy" from="60" to="60" begin="0s" dur="0.25s" values="60;50;60" calcMode="linear" repeatCount="indefinite"/></circle></svg>`,
  },
  {
    name: "Pulse",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="5" fill="#000"><animate attributeName="r" begin="0s" dur="1.5s" values="5;10;5" calcMode="linear" repeatCount="indefinite"/><animate attributeName="opacity" begin="0s" dur="1.5s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"/></circle></svg>`,
  },
  {
    name: "Dot Spinner",
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill="#000">
  <circle cx="50" cy="50" r="10">
    <animate attributeName="cx" values="10;50;90;50;10" dur="1s" repeatCount="indefinite"/>
  </circle>
</svg>
`,
  },
  {
    name: "Ripple",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="0" stroke="#000" fill="none" stroke-width="1"><animate attributeName="r" begin="0s" dur="1.5s" values="0;40" calcMode="linear" repeatCount="indefinite"/><animate attributeName="opacity" begin="0s" dur="1.5s" values="1;0" calcMode="linear" repeatCount="indefinite"/></circle><circle cx="50" cy="50" r="0" stroke="#000" fill="none" stroke-width="1"><animate attributeName="r" begin="0.75s" dur="1.5s" values="0;40" calcMode="linear" repeatCount="indefinite"/><animate attributeName="opacity" begin="0.75s" dur="1.5s" values="1;0" calcMode="linear" repeatCount="indefinite"/></circle></svg>`,
  },
  {
    name: "Bar Loader",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 10" xmlns="http://www.w3.org/2000/svg"><rect width="10" height="10" fill="#000"><animate attributeName="x" from="0" to="90" dur="1s" repeatCount="indefinite"/></rect></svg>`,
  },
  {
    name: "Dual Ring",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><circle cx="25" cy="25" r="20" stroke-width="1" stroke="#000" fill="none" stroke-dasharray="31.4 31.4"><animateTransform attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="2s" repeatCount="indefinite"/></circle><circle cx="25" cy="25" r="10" stroke-width="1" stroke="#000" fill="none" stroke-dasharray="15.7 15.7"><animateTransform attributeName="transform" type="rotate" from="0 25 25" to="-360 25 25" dur="2s" repeatCount="indefinite"/></circle></svg>`,
  },
  {
    name: "Loading Bar",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 20" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="20" fill="#000"><animate attributeName="x" from="-100" to="100" dur="2s" repeatCount="indefinite" /></rect></svg>`,
  },
  {
    name: "Rolling",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><circle cx="25" cy="25" r="20" stroke-width="1" stroke="#000" fill="none"><animateTransform attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="1s" repeatCount="indefinite"/></circle><circle cx="25" cy="25" r="10" stroke-width="1" stroke="#000" fill="none" stroke-dasharray="31.4 31.4"><animateTransform attributeName="transform" type="rotate" from="0 25 25" to="-360 25 25" dur="2s" repeatCount="indefinite"/></circle></svg>`,
  },
  {
    name: "Oval",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><circle cx="25" cy="25" r="20" stroke-width="1" stroke="#000" fill="none" stroke-dasharray="31.4 31.4"><animateTransform attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="2s" repeatCount="indefinite"/></circle></svg>`,
  },
  {
    name: "Square Loader",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><rect x="10" y="10" width="30" height="30" stroke-width="1" stroke="#000" fill="none"><animateTransform attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="2s" repeatCount="indefinite"/></rect></svg>`,
  },
];

const SvgPageInner = () => {
  const [color, setColor] = useState("#ff5722");
  const [background, setBackground] = useState("#ffc107");
  const [speed, setSpeed] = useState(3);
  const [size, setSize] = useState(64);
  const [strokeWidth, setStrokeWidth] = useState(1);
  const [selectedSvgIndex, setSelectedSvgIndex] = useState(0);

  const customizeSvg = (svg: any) => {
    return svg
      .replace(/stroke="#000"/g, `stroke="${color}"`)
      .replace(/fill="#000"/g, `fill="${color}"`)
      .replace(/fill="none"/g, `fill="${background}"`)
      .replace(/dur="1s"/g, `dur="${speed}s"`)
      .replace(/dur="0.5s"/g, `dur="${speed / 2}s"`)
      .replace(/dur="0.25s"/g, `dur="${speed / 4}s"`)
      .replace(/stroke-width="1"/g, `stroke-width="${strokeWidth}"`);
    // .replace(/width="40"/g, `width="${size - 10}"`)
    // .replace(/height="40"/g, `height="${size - 10}"`);
  };

  const customizedSvg = customizeSvg(svgs[selectedSvgIndex].svg);

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full mix-blend-multiply">
        <MovingBouncingBalls />
      </div>
      <div className="relative w-full grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8">
        <div>
          <div className="bg-white rounded-3xl shadow-lg sticky top-[calc(var(--header-height)+2rem)] p-6 md:p-10">
            <div>
              <div>
                <label>Color</label>
              </div>

              <div>
                <input
                  type="color"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                />
                <input
                  type="text"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                />
              </div>

              <div>
                <label>Background</label>
              </div>
              <div>
                <input
                  type="color"
                  value={background}
                  onChange={(e) => setBackground(e.target.value)}
                />
                <input
                  type="text"
                  value={background}
                  onChange={(e) => setBackground(e.target.value)}
                />
              </div>

              <div>
                <label>Speed (seconds)</label>
              </div>
              <div>
                <input
                  type="range"
                  min="1"
                  max="20"
                  step="1"
                  value={speed}
                  style={{
                    background: `linear-gradient(to right, var(--color-pink) 0%, var(--color-pink) ${
                      (speed / 20) * 100
                    }%, #ddd ${(speed / 20) * 100}%, #ddd 100%)`,
                  }}
                  onChange={(e) => setSpeed(Number(e.target.value))}
                />
                <span>{speed} Seconds</span>
              </div>

              <div>
                <label>Stroke (px)</label>
              </div>
              <div>
                <input
                  type="range"
                  min="1"
                  max="10"
                  step="1"
                  value={strokeWidth}
                  style={{
                    background: `linear-gradient(to right, var(--color-pink) 0%, var(--color-pink) ${
                      strokeWidth * 10
                    }%, #ddd ${strokeWidth * 10}%, #ddd 100%)`,
                  }}
                  onChange={(e) => setStrokeWidth(Number(e.target.value))}
                />
                <span>{strokeWidth} px</span>
              </div>
            </div>

            <div>
              <label>Size (px)</label>
            </div>
            <div>
              <input
                type="range"
                min="32"
                max="128"
                step="1"
                value={size}
                style={{
                  background: `linear-gradient(to right, var(--color-pink) 0%, var(--color-pink) ${
                    size * 10
                  }%, #ddd ${size * 10}%, #ddd 100%)`,
                }}
                onChange={(e) => setSize(Number(e.target.value))}
              />
              <span>{size} px</span>
            </div>

            <CopyToClipboard text={customizedSvg}>
              <button>Copy SVG</button>
            </CopyToClipboard>
            <a
              href={`data:image/svg+xml;utf8,${encodeURIComponent(
                customizedSvg
              )}`}
              download="loader.svg"
            >
              <button>Download SVG</button>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:md:grid-cols-3 xl:grid-cols-4 gap-6">
          {svgs.map((svg, index) => (
            <div key={index}>
              <label className="flex flex-col items-center justify-center gap-4 bg-white rounded-3xl shadow-lg p-4 md:p-8 border-4 border-white cursor-pointer hover:opacity-90 has-[:checked]:border-pink has-[:checked]:hover:opacity-100">
                <input
                  type="radio"
                  name="svg"
                  value={index}
                  checked={selectedSvgIndex === index}
                  onChange={() => setSelectedSvgIndex(index)}
                  className="hidden"
                />
                {svg.name}
                <div
                  style={{
                    width: `${size}px`,
                    height: `${size}px`,
                    // width: "50px",
                    // height: "50px",
                  }}
                  className="flex items-center justify-center"
                  dangerouslySetInnerHTML={{ __html: customizeSvg(svg.svg) }}
                />
              </label>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SvgPageInner;
