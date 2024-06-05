"use client";

import styles from "./container.module.scss";

type ContainerProps = {
  disabledXPadding?: boolean,
  disabledYPadding?: boolean,
  children?: React.ReactNode;
};

const Container = ({
  disabledXPadding = false,
  disabledYPadding = false,
  children,
}: ContainerProps) =>{
  const containerClasses = `${styles.container} ${disabledXPadding ? styles.noXPadding : ''} ${disabledYPadding ? styles.noYPadding : ''}`;

  return <div className={containerClasses}>{children}</div>;
};

export default Container;