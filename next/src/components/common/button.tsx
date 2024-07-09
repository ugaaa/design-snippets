"use client";

import Link from "next/link";
import styles from "./button.module.scss";

type ButtonProps = {
  href: string;
  target?: "_blank" | "_self";
  isSimple?: boolean;
  isOrange?: boolean;
  children: React.ReactNode;
};

const Button = ({
  href = "",
  target = "_self",
  isSimple,
  children,
}: ButtonProps) => (
  <Link
    href={href}
    target={target}
    className={`${styles.button} ${isSimple ? styles.isSimple : ""}`}
  >
    <span>{children}</span>
  </Link>
);

export default Button;

export const LargeButton = ({
  href = "",
  target = "_self",
  isOrange,
  children,
}: ButtonProps) => (
  <Link
    href={href}
    target={target}
    className={`${styles.largeButton} ${isOrange ? styles.isOrange : ""}`}
  >
    <span>{children}</span>
  </Link>
);
