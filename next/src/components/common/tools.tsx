import { useResize } from "@/hooks/useResize";
import Grid, { GridItem } from "../layouts/grid";
import IcoAspectRatio from "../svgs/icoAspectRatio";
import IcoCharCount from "../svgs/icoCharCount";
import LoadingDots from "../svgs/loadings/loadingDots";
import { LargeButton } from "./button";
import styles from "./tools.module.scss";
import Link from "next/link";

const Tools = ({
  isSmall,
  onClick,
}: {
  isSmall?: boolean;
  onClick?: () => void;
}) => {
  const { isSP } = useResize();
  const Component = isSP && isSmall ? Link : LargeButton;
  return (
    <Grid>
      <GridItem span={4} spanSp={6}>
        <Component href={"/tools/loading-svg-customizer"} onClick={onClick}>
          <div className={`${styles.button} ${isSmall ? styles.isSmall : ""}`}>
            <LoadingDots />
            <h5>
              Loading SVG <br />
              カスタマイザー
            </h5>
          </div>
        </Component>
      </GridItem>

      <GridItem span={4} spanSp={6}>
        <Component href="/tools/char-count" onClick={onClick}>
          <div className={`${styles.button} ${isSmall ? styles.isSmall : ""}`}>
            <IcoCharCount />
            <h5>文字数カウント</h5>
          </div>
        </Component>
      </GridItem>

      <GridItem span={4} spanSp={6}>
        <Component href={"/tools/aspect-ratio-calculator"} onClick={onClick}>
          <div className={`${styles.button} ${isSmall ? styles.isSmall : ""}`}>
            <IcoAspectRatio />
            <h5>アスペクト比計算</h5>
          </div>
        </Component>
      </GridItem>
    </Grid>
  );
};

export default Tools;
