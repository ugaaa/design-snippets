"use client";

import Link from "next/link";
import styles from "./button.module.scss";

type ButtonProps = {
  href: string;
  target?: "_blank" | "_self";
  isSimple?: boolean;
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
