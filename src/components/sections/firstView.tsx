"use client";

import MovingBouncingBalls from "@/components/snippets/movingBouncingBalls";
import Logo from "@/components/common/logo";
import styles from "./firstView.module.scss";
import { Anonymous_Pro } from "next/font/google";

const anonymousPro = Anonymous_Pro({ subsets: ["latin"], weight: ['400']});
const tagline = process.env.NEXT_PUBLIC_TAGLINE;

const FirstView = () => (
  <section className={styles.firstView}>
    <Logo as="h1" />
    <p className={`${anonymousPro.className} ${styles.tagline}`}>{tagline}</p>
    <div className={styles.canvas}>
      <MovingBouncingBalls />
    </div>
  </section>
);

export default FirstView;
