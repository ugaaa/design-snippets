"use client";

import styles from "@/components/common/title.module.scss";
import { ColorProps } from "@/types/colors";

type TitleProps<T extends React.ElementType> = {
  as?: T;
  ball?: {
    main: ColorProps;
    sub: ColorProps;
  };
  isWhite?: boolean;
  children?: React.ReactNode;
} & React.ComponentPropsWithoutRef<T>;

const Title = <T extends React.ElementType = "div">({
  as,
  ball = {
    main: "pink",
    sub: "blue",
  },
  isWhite,
  children,
}: TitleProps<T>) => {
  const Component = as || "div";

  return (
    <Component
      className={`mb-6 md:mb-10 ${styles.title} ${
        isWhite ? styles.isWhite : ""
      }`}
    >
      <span className={styles.balls}>
        <span className={`${styles.ball} ${styles.main} bg-${ball.main}`} />
        <span className={`${styles.ball} ${styles.sub} bg-${ball.sub}`} />
      </span>
      <span className={styles.text}>{children}</span>
    </Component>
  );
};

export default Title;
