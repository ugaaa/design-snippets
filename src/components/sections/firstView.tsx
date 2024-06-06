"use client";

import MovingBouncingBalls from "@/components/snippets/movingBouncingBalls";
import Logo from "@/components/common/logo";
import styles from "./firstView.module.scss";
import { Anonymous_Pro } from "next/font/google";
import { useEffect, useState } from "react";

const anonymousPro = Anonymous_Pro({ subsets: ["latin"], weight: ['400']});
const tagline = process.env.NEXT_PUBLIC_TAGLINE;

const FirstView = () => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className={`${styles.firstView} ${isLoaded ? styles.isLoaded : ''}`}>
      <div className={styles.logo}>
        <Logo as="h1" />
      </div>
      <p className={`${anonymousPro.className} ${styles.tagline}`}>
        <span>
          {tagline}
        </span>
      </p>
      <div className={styles.canvas}>
        <MovingBouncingBalls />
      </div>
    </section>
  );
};

export default FirstView;
