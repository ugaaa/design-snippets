"use client";

import { LargeButton } from "../common/button";
import Title from "../common/title";
import Container from "../layouts/container";
import Grid, { GridItem } from "../layouts/grid";
import IcoAspectRatio from "../svgs/icoAspectRatio";
import IcoTextCount from "../svgs/icoTextCount";
import LoadingDots from "../svgs/loadings/loadingDots";
import styles from "./toolsFooter.module.scss";

const ToolsFooter = ({ isSecondary }: { isSecondary?: boolean }) => {
  return (
    <section>
      <Container
        ball={{
          color: "pink",
          position: isSecondary ? "center" : "right",
        }}
        hasTitle
      >
        <Title
          as={isSecondary ? "h2" : "h1"}
          ball={{ main: "green", sub: "yellow" }}
          isWhite
        >
          便利なツール
        </Title>

        <Grid>
          <GridItem span={4} spanSp={6}>
            <LargeButton href={"/svgs"}>
              <div className={styles.button}>
                <LoadingDots />
                <h5 className={styles.btnText}>
                  <span>Loading SVG</span>
                  <span>カスタマイザー</span>
                </h5>
              </div>
            </LargeButton>
          </GridItem>

          <GridItem span={4} spanSp={6}>
            <LargeButton href={""}>
              <div className={styles.button}>
                <IcoTextCount />
                <h5 className={styles.btnText}>文字数カウント</h5>
              </div>
            </LargeButton>
          </GridItem>

          <GridItem span={4} spanSp={6}>
            <LargeButton href={""}>
              <div className={styles.button}>
                <IcoAspectRatio />
                <h5 className={styles.btnText}>アスペクト比計算</h5>
              </div>
            </LargeButton>
          </GridItem>
        </Grid>
      </Container>
    </section>
  );
};

export default ToolsFooter;
