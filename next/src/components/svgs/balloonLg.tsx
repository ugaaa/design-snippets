type balloonLgProps = {
  width?: number | string;
  height?: number | string;
  color?: string;
  bgColor?: string;
};

const BalloonLg = ({
  width = 862,
  height = 573,
  color = "#FF5722",
  bgColor = "white",
}: balloonLgProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 862 573"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M842.118 321.043C829.658 425.759 724.144 507.971 600.68 536.592C461.108 560.792 199.972 521.397 176.897 468.494C116.242 500.966 89.6645 505.639 54.7711 504.831C111.613 498.322 117.804 444.857 117.804 444.857C71.0924 422.908 36.1984 388.015 36.1985 310.986C68.841 117.312 309.853 17.2083 506.13 46.3322C705.601 62.1061 852.901 184.687 842.118 321.043Z"
      fill={bgColor}
    />
    <path
      d="M822.118 311.043C809.658 415.759 704.144 497.971 580.68 526.592C441.108 550.792 179.972 511.397 156.897 458.494C96.2416 490.966 69.6645 495.639 34.7711 494.831C91.6134 488.322 97.804 434.857 97.804 434.857C51.0924 412.908 16.1984 378.015 16.1985 300.986C48.841 107.312 289.853 7.2083 486.13 36.3322C685.601 52.1061 832.901 174.687 822.118 311.043Z"
      stroke={color}
      strokeWidth="12"
      strokeLinejoin="round"
    />
  </svg>
);

export default BalloonLg;
