"use client";

import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
export const svgs = [
  {
    name: "Circle Loader",
    svg: `<svg viewBox="0 0 50 50"><circle cx="25" cy="25" r="20" stroke-width="5" stroke="#000" fill="none"></circle></svg>`,
  },
  {
    name: "Square Loader",
    svg: `<svg viewBox="0 0 50 50"><rect x="5" y="5" width="40" height="40" stroke-width="5" stroke="#000" fill="none"></rect></svg>`,
  },
];

export default function Home() {
  const [color, setColor] = useState("#000");
  const [background, setBackground] = useState("none");
  const [opacity, setOpacity] = useState(1);
  const [speed, setSpeed] = useState(2);
  const [size, setSize] = useState(100);
  const [selectedSvg, setSelectedSvg] = useState(svgs[0]);

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Loading SVG Customizer</h1>
      <select onChange={(e) => setSelectedSvg(svgs[e.target.value])}>
        {svgs.map((svg, index) => (
          <option value={index} key={index}>
            {svg.name}
          </option>
        ))}
      </select>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "20px",
        }}
      >
        <div
          style={{
            width: `${size}px`,
            height: `${size}px`,
            animation: `spin ${speed}s linear infinite`,
            opacity: opacity,
          }}
          dangerouslySetInnerHTML={{
            __html: selectedSvg.svg
              .replace(/stroke="#000"/g, `stroke="${color}"`)
              .replace(/fill="none"/g, `fill="${background}"`),
          }}
        />
      </div>
      <div style={{ margin: "20px" }}>
        <label>
          Color:
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </label>
        <br />
        <label>
          Background:
          <input
            type="color"
            value={background}
            onChange={(e) => setBackground(e.target.value)}
          />
        </label>
        <br />
        <label>
          Opacity:
          <input
            type="number"
            value={opacity}
            step="0.1"
            min="0"
            max="1"
            onChange={(e) => setOpacity(e.target.value)}
          />
        </label>
        <br />
        <label>
          Speed (seconds):
          <input
            type="number"
            value={speed}
            onChange={(e) => setSpeed(e.target.value)}
          />
        </label>
        <br />
        <label>
          Size (px):
          <input
            type="number"
            value={size}
            onChange={(e) => setSize(e.target.value)}
          />
        </label>
      </div>
      <CopyToClipboard text={selectedSvg.svg}>
        <button>Copy SVG</button>
      </CopyToClipboard>
      <a
        href={`data:image/svg+xml;utf8,${encodeURIComponent(selectedSvg.svg)}`}
        download="loader.svg"
      >
        <button>Download SVG</button>
      </a>
      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
