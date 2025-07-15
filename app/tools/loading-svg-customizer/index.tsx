"use client";

import { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import styles from "./loadingSvgCustomizer.module.scss";

export const svgs = [
  {
    name: "Circle Loader",
    svg: `<svg viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="35" stroke="#000" stroke-width="10" fill="none" stroke-linecap="round" stroke-dasharray="31.4 31.4">
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
    svg: `<svg viewBox="0 0 50 50"><circle cx="25" cy="25" r="20" strokeWidth="5" stroke="#000" fill="none"><animateTransform attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="2s" repeatCount="indefinite"/></circle></svg>`,
  },
  {
    name: "Square Loader",
    svg: `<svg viewBox="0 0 50 50"><rect x="5" y="5" width="40" height="40" strokeWidth="5" stroke="#000" fill="none"><animateTransform attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="2s" repeatCount="indefinite"/></rect></svg>`,
  },
  {
    name: "Three Dots",
    svg: `<svg viewBox="0 0 120 30" xmlns="http://www.w3.org/2000/svg"><circle cx="15" cy="15" r="15"><animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite"/><animate attributeName="fillOpacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"/></circle><circle cx="60" cy="15" r="9" fillOpacity="0.3"><animate attributeName="r" from="9" to="9" begin="0s" dur="0.8s" values="9;15;9" calcMode="linear" repeatCount="indefinite"/><animate attributeName="fillOpacity" from="0.5" to="0.5" begin="0s" dur="0.8s" values=".5;1;.5" calcMode="linear" repeatCount="indefinite"/></circle><circle cx="105" cy="15" r="15"><animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite"/><animate attributeName="fillOpacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"/></circle></svg>`,
  },
  {
    name: "Ripple",
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="0" stroke="#000" fill="none" strokeWidth="2"><animate attributeName="r" begin="0s" dur="1.5s" values="0;40" calcMode="linear" repeatCount="indefinite"/><animate attributeName="opacity" begin="0s" dur="1.5s" values="1;0" calcMode="linear" repeatCount="indefinite"/></circle><circle cx="50" cy="50" r="0" stroke="#000" fill="none" strokeWidth="2"><animate attributeName="r" begin="0.75s" dur="1.5s" values="0;40" calcMode="linear" repeatCount="indefinite"/><animate attributeName="opacity" begin="0.75s" dur="1.5s" values="1;0" calcMode="linear" repeatCount="indefinite"/></circle></svg>`,
  },
  {
    name: "Spinner",
    svg: `<svg viewBox="0 0 50 50"><circle cx="25" cy="25" r="20" strokeWidth="5" stroke="#000" fill="none" stroke-dasharray="31.4 31.4"><animateTransform attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="1s" repeatCount="indefinite"/></circle></svg>`,
  },
  {
    name: "Ellipsis",
    svg: `<svg viewBox="0 0 120 30" xmlns="http://www.w3.org/2000/svg"><circle cx="15" cy="15" r="15"><animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite"/><animate attributeName="fillOpacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"/></circle><circle cx="60" cy="15" r="9" fillOpacity="0.3"><animate attributeName="r" from="9" to="9" begin="0s" dur="0.8s" values="9;15;9" calcMode="linear" repeatCount="indefinite"/><animate attributeName="fillOpacity" from="0.5" to="0.5" begin="0s" dur="0.8s" values=".5;1;.5" calcMode="linear" repeatCount="indefinite"/></circle><circle cx="105" cy="15" r="15"><animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite"/><animate attributeName="fillOpacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"/></circle></svg>`,
  },
  {
    name: "Pulse",
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="5" fill="#000"><animate attributeName="r" begin="0s" dur="1.5s" values="5;10;5" calcMode="linear" repeatCount="indefinite"/><animate attributeName="opacity" begin="0s" dur="1.5s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"/></circle></svg>`,
  },
  {
    name: "Bounce",
    svg: `<svg viewBox="0 0 120 30" xmlns="http://www.w3.org/2000/svg"><circle cx="15" cy="15" r="12"><animate attributeName="cy" from="15" to="15" begin="0s" dur="0.8s" values="15;5;15" calcMode="linear" repeatCount="indefinite"/></circle><circle cx="60" cy="15" r="12" fillOpacity="0.3"><animate attributeName="cy" from="15" to="15" begin="0s" dur="0.8s" values="15;5;15" calcMode="linear" repeatCount="indefinite"/></circle><circle cx="105" cy="15" r="12"><animate attributeName="cy" from="15" to="15" begin="0s" dur="0.8s" values="15;5;15" calcMode="linear" repeatCount="indefinite"/></circle></svg>`,
  },
  {
    name: "Bar Loader",
    svg: `<svg viewBox="0 0 100 10" xmlns="http://www.w3.org/2000/svg"><rect width="10" height="10" fill="#000"><animate attributeName="x" from="0" to="90" dur="1s" repeatCount="indefinite"/></rect></svg>`,
  },
  {
    name: "Dual Ring",
    svg: `<svg viewBox="0 0 50 50"><circle cx="25" cy="25" r="20" strokeWidth="5" stroke="#000" fill="none" stroke-dasharray="31.4 31.4"><animateTransform attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="2s" repeatCount="indefinite"/></circle><circle cx="25" cy="25" r="10" strokeWidth="5" stroke="#000" fill="none" stroke-dasharray="15.7 15.7"><animateTransform attributeName="transform" type="rotate" from="0 25 25" to="-360 25 25" dur="2s" repeatCount="indefinite"/></circle></svg>`,
  },
  {
    name: "Heart Beat",
    svg: `<svg viewBox="0 0 32 32"><path d="M16 29s-13-8.28-13-17.32S8.48 1 16 1s13 8.32 13 10.68S16 29 16 29z" fill="#000"><animate attributeName="transform" type="scale" values="1;1.2;1" begin="0s" dur="0.5s" repeatCount="indefinite" calcMode="linear" /></path></svg>`,
  },
  {
    name: "Gear",
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path fill="#000" d="M50,32.67A17.33,17.33,0,1,1,32.67,50,17.35,17.35,0,0,1,50,32.67M91,55.5h-8.23a34.91,34.91,0,0,1-5.9,14.28l5.83,5.83a2.67,2.67,0,0,1-3.77,3.77l-5.83-5.83A34.91,34.91,0,0,1,55.5,91v8.23a2.67,2.67,0,1,1-5.33,0V91a34.91,34.91,0,0,1-14.28-5.9l-5.83,5.83a2.67,2.67,0,0,1-3.77-3.77l5.83-5.83A34.91,34.91,0,0,1,9,55.5H.75a2.67,2.67,0,1,1,0-5.33H9A34.91,34.91,0,0,1,14.92,36L9.09,30.19a2.67,2.67,0,0,1,3.77-3.77l5.83,5.83A34.91,34.91,0,0,1,44.5,9V.75a2.67,2.67,0,0,1,5.33,0V9A34.91,34.91,0,0,1,64.72,14.92l5.83-5.83a2.67,2.67,0,0,1,3.77,3.77l-5.83,5.83A34.91,34.91,0,0,1,91,44.5h8.23a2.67,2.67,0,1,1,0,5.33Z"><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="1s" repeatCount="indefinite"/></path></svg>`,
  },
  {
    name: "Infinity",
    svg: `<svg viewBox="0 0 100 50" xmlns="http://www.w3.org/2000/svg"><path d="M17.5,25A12.5,12.5,0,1,1,30,37.5h0A12.5,12.5,0,1,1,42.5,25,12.5,12.5,0,1,1,55,12.5h0A12.5,12.5,0,1,1,67.5,25,12.5,12.5,0,1,1,80,37.5h0A12.5,12.5,0,1,1,92.5,25" fill="none" stroke="#000" strokeWidth="5"><animate attributeName="stroke-dasharray" values="1, 200; 89, 200; 89, 200" dur="2s" repeatCount="indefinite"/><animate attributeName="stroke-dashoffset" values="0; -124; -124" dur="2s" repeatCount="indefinite"/></path></svg>`,
  },
  {
    name: "Loading Bar",
    svg: `<svg viewBox="0 0 100 20" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="20" fill="#000"><animate attributeName="x" from="-100" to="100" dur="2s" repeatCount="indefinite" /></rect></svg>`,
  },
  {
    name: "Rolling",
    svg: `<svg viewBox="0 0 50 50"><circle cx="25" cy="25" r="20" strokeWidth="5" stroke="#000" fill="none"><animateTransform attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="1s" repeatCount="indefinite"/></circle><circle cx="25" cy="25" r="10" strokeWidth="5" stroke="#000" fill="none" stroke-dasharray="31.4 31.4"><animateTransform attributeName="transform" type="rotate" from="0 25 25" to="-360 25 25" dur="2s" repeatCount="indefinite"/></circle></svg>`,
  },
  {
    name: "Oval",
    svg: `<svg viewBox="0 0 50 50"><circle cx="25" cy="25" r="20" strokeWidth="5" stroke="#000" fill="none" stroke-dasharray="31.4 31.4"><animateTransform attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="2s" repeatCount="indefinite"/></circle></svg>`,
  },
  {
    name: "Triangle",
    svg: `<svg viewBox="0 0 50 50"><polygon points="25,5 45,45 5,45" strokeWidth="5" stroke="#000" fill="none"><animateTransform attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="1s" repeatCount="indefinite"/></polygon></svg>`,
  },
  {
    name: "Hexagon",
    svg: `<svg viewBox="0 0 50 50"><polygon points="25,5 45,20 45,40 25,55 5,40 5,20" strokeWidth="5" stroke="#000" fill="none"><animateTransform attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="2s" repeatCount="indefinite"/></polygon></svg>`,
  },
  {
    name: "Star",
    svg: `<svg viewBox="0 0 50 50"><polygon points="25,5 32,20 45,20 35,30 38,45 25,38 12,45 15,30 5,20 18,20" strokeWidth="5" stroke="#000" fill="none"><animateTransform attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="2s" repeatCount="indefinite"/></polygon></svg>`,
  },
];

const SvgPageInner = () => {
  const [color, setColor] = useState("#000");
  const [background, setBackground] = useState("none");
  const [opacity, setOpacity] = useState(1);
  const [speed, setSpeed] = useState(2);
  const [size, setSize] = useState(5);
  const [selectedSvgIndex, setSelectedSvgIndex] = useState(0);

  console.log(color, background, speed, speed);

  const customizeSvg = (svg: any) => {
    return svg
      .replace(/stroke="#000"/g, `stroke="${color}"`)
      .replace(/fill="none"/g, `fill="${background}"`)
      .replace(/dur="2s"/g, `dur="${speed}s"`)
      .replace(/strokeWidth="5"/g, `strokeWidth="${size / 10}"`);
    // .replace(/width="40"/g, `width="${size - 10}"`)
    // .replace(/height="40"/g, `height="${size - 10}"`);
  };

  const customizedSvg = customizeSvg(svgs[selectedSvgIndex].svg);

  return (
    <div className={styles.container}>
      <div className={styles.controller}>
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
              min="0.1"
              max="20"
              step="0.1"
              value={speed}
              style={{
                background: `linear-gradient(to right, var(--color-pink) 0%, var(--color-pink) ${
                  (speed / 20) * 100
                }%, #ddd ${(speed / 20) * 100}%, #ddd 100%)`,
              }}
              onChange={(e) => setSpeed(Number(e.target.value))}
            />
          </div>

          <div>
            <label>Size (px)</label>
          </div>
          <div>
            <input
              type="range"
              min="1"
              max="10"
              step="1"
              value={size}
              style={{
                background: `linear-gradient(to right, var(--color-pink) 0%, var(--color-pink) ${
                  size * 10
                }%, #ddd ${size * 10}%, #ddd 100%)`,
              }}
              onChange={(e) => setSize(Number(e.target.value))}
            />
          </div>
        </div>
        <CopyToClipboard text={customizedSvg}>
          <button>Copy SVG</button>
        </CopyToClipboard>
        <a
          href={`data:image/svg+xml;utf8,${encodeURIComponent(customizedSvg)}`}
          download="loader.svg"
        >
          <button>Download SVG</button>
        </a>
      </div>

      <div className={styles.icons}>
        {svgs.map((svg, index) => (
          <div className={styles.icon} key={index}>
            <input
              type="radio"
              name="svg"
              value={index}
              checked={selectedSvgIndex === index}
              onChange={() => setSelectedSvgIndex(index)}
            />
            <label>
              {svg.name}
              <div
                style={{
                  // width: `${size}px`,
                  // height: `${size}px`,
                  width: "50px",
                  height: "50px",
                  opacity: opacity,
                }}
                dangerouslySetInnerHTML={{ __html: customizeSvg(svg.svg) }}
              />
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SvgPageInner;
