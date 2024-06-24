"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

import { useResize } from "@/hooks/useResize";
import BalloonLg from "../svgs/balloonLg";
import BalloonSm from "../svgs/balloonSm";
import ImgUga2 from "../svgs/imgUga2";
import styles from "./about.module.scss";
import Container from "@/components/layouts/container";
const InViewComponent = dynamic(
  () => import("@/components/snippets/inViewComponent"),
  { ssr: false }
);

const About = () => {
  const [isInView, setIsInView] = useState(false);
  const { isPC } = useResize();

  const handleInViewChange = (inView: boolean) => {
    setIsInView(inView);
  };

  return (
    <section className={`${styles.about} ${isInView ? styles.isInView : ""}`}>
      <InViewComponent onInViewChange={handleInViewChange}>
        <Container disabledYPadding>
          <div className={styles.aboutInner}>
            <div className={styles.img}>
              <ImgUga2 />
            </div>

            <div className={styles.balloon}>
              <div className={styles.balloonBg}>
                {isPC ? <BalloonLg /> : <BalloonSm />}
              </div>
              <p className={styles.balloonTx}>
                Webデザイナー兼フロントエンドエンジニアの管理人が、
                <br />
                ひたすら自分用にデザイン＆ソースコードを上げていくWebサイト
                <br />
                <br />
                HTML/CSS/JSなどのコードもちろんコピペOKでーす
              </p>
            </div>
          </div>
        </Container>
      </InViewComponent>
    </section>
  );
};

export default About;
