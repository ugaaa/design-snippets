import Grid, { GridItem } from "../layouts/grid";
import IcoAspectRatio from "../svgs/icoAspectRatio";
import IcoCharCount from "../svgs/icoCharCount";
import LoadingDots from "../svgs/loadings/loadingDots";
import { LargeButton } from "./button";
import styles from "./tools.module.scss";

const Tools = ({ isSmall }: { isSmall?: boolean }) => (
  <Grid>
    <GridItem span={4} spanSp={6}>
      <LargeButton href={"/svgs"}>
        <div className={`${styles.button} ${isSmall ? styles.isSmall : ""}`}>
          <LoadingDots />
          <h5>
            Loading SVG
            <br />
            カスタマイザー
          </h5>
        </div>
      </LargeButton>
    </GridItem>

    <GridItem span={4} spanSp={6}>
      <LargeButton href="/char-count">
        <div className={`${styles.button} ${isSmall ? styles.isSmall : ""}`}>
          <IcoCharCount />
          <h5>文字数カウント</h5>
        </div>
      </LargeButton>
    </GridItem>

    <GridItem span={4} spanSp={6}>
      <LargeButton href={""}>
        <div className={`${styles.button} ${isSmall ? styles.isSmall : ""}`}>
          <IcoAspectRatio />
          <h5>アスペクト比計算</h5>
        </div>
      </LargeButton>
    </GridItem>
  </Grid>
);

export default Tools;
