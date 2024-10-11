import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["900"] });

type ImagePropsType = {
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  objectFit?: "cover" | "contain";
  objectPosition?: string;
};

const ImageComponent = ({
  src,
  width = 16,
  height = 9,
  alt = "",
  objectFit = "cover",
  objectPosition = "center",
}: ImagePropsType) => {
  return (
    <div
      style={{
        aspectRatio: `${width} / ${height}`,
        position: "relative",
        width: "100%",
      }}
    >
      {src ? (
        <Image
          fill
          src={src}
          alt={alt}
          style={{ objectFit, objectPosition, width: "100%", height: "100%" }}
          sizes="(max-width:780px) 100vw, 1280px"
        />
      ) : (
        <div
          className={`${montserrat.className} bg-black-20 text-white`}
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          NO IMAGE
        </div>
      )}
    </div>
  );
};

export default ImageComponent;
