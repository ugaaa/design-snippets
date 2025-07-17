"use client";

import dynamic from "next/dynamic";
import styles from "./container.module.scss";
import { useState } from "react";
const InViewComponent = dynamic(
  () => import("@/components/snippets/inViewComponent"),
  { ssr: false }
);

type ContainerProps = {
  disabledXPadding?: boolean;
  disabledYPadding?: boolean;
  hasTitle?: boolean;
  children?: React.ReactNode;
  ball?: {
    color: "pink" | "blue" | "green";
    position: "center" | "right";
  };
};

const Container = ({
  disabledXPadding = false,
  disabledYPadding = false,
  hasTitle,
  children,
  ball,
}: ContainerProps) => {
  const [isInView, setIsInView] = useState(false);

  const containerClasses = [
    styles.container,
    disabledXPadding && styles.noXPadding,
    disabledYPadding && styles.noYPadding,
    hasTitle && styles.hasTitle,
    ball && styles.ball,
    ball && styles[ball.color],
    ball && styles[ball.position],
  ]
    .filter(Boolean)
    .join(" ");

  const handleInViewChange = (inView: boolean) => {
    setIsInView(inView);
  };

  return (
    <InViewComponent onInViewChange={handleInViewChange}>
      <div
        className={`max-w-7xl mx-auto ${disabledYPadding ? "" : "py-32"} ${
          disabledXPadding ? "" : "px-4 sm:px-6 md:px-8 lg:px-10"
        }`}
      >
        {children}
      </div>
      {/* <div className={`${containerClasses} ${isInView ? styles.isInview : ""}`}> */}
      {/* </div> */}
    </InViewComponent>
  );
};

export default Container;
