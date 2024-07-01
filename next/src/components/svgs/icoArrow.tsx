import { directionsType } from "@/types/positions";

const IcoArrow = ({ direction = "right" }: { direction: directionsType }) => {
  const rotationAngle = (() => {
    switch (direction) {
      case "left":
        return "180deg";
      case "bottom":
        return "90deg";
      case "top":
        return "-90deg";
      default:
        return "0deg";
    }
  })();

  const styles = {
    transform: `rotate(${rotationAngle})`,
  };

  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={styles}
    >
      <path
        d="M8.32031 14.1797V5.82031L12.5 10L8.32031 14.1797Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default IcoArrow;
