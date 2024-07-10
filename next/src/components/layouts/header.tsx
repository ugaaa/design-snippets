"use client";

import { Montserrat } from "next/font/google";
import Logo from "@/components/common/logo";
import Searchbox from "@/components/common/searchbox";
import Container from "@/components/layouts/container";
import styles from "./header.module.scss";
import Link from "next/link";
import IcoArrow from "../svgs/icoArrow";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useInView } from "react-intersection-observer";
import Tools from "../common/tools";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["900"] });

const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  const [animationClass, setAnimationClass] = useState("");
  const [isVisible, setIsVisible] = useState<Boolean>(false);
  const [isScrolled, setIsScrolled] = useState<Boolean>(false);
  const { ref, inView } = useInView({
    rootMargin: "100px 0px 0px 0px",
  });

  useEffect(() => {
    setIsScrolled(!inView);
  }, [inView]);

  const handleMouseOver = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const handleToolsClick = () => {
    setIsOpen((prevState) => !prevState);
  };

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      const timer = setTimeout(() => setAnimationClass("fadeIn"), 10); // アニメーションの時間と一致させる
      return () => clearTimeout(timer);
    } else {
      setAnimationClass("fadeOut");
      const timer = setTimeout(() => setIsVisible(false), 300); // アニメーションの時間と一致させる
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  return (
    <header ref={ref}>
      <div
        className={`${styles.header} ${pathname === "/" ? styles.isHome : ""} ${
          isScrolled ? styles.isScrolled : ""
        }`}
        onMouseLeave={handleMouseLeave}
      >
        <Container disabledYPadding>
          <div className={styles.headerInner}>
            <div className={styles.logo}>
              <Logo isWhite href="/" />
            </div>

            <nav className={styles.gnav}>
              <ul>
                <li>
                  <Link className={montserrat.className} href="/blog">
                    BLOG
                  </Link>
                </li>
                <li>
                  <button
                    type="button"
                    className={montserrat.className}
                    onMouseOver={handleMouseOver}
                    onClick={handleToolsClick}
                  >
                    TOOLS
                    <IcoArrow direction="bottom" />
                  </button>
                </li>
              </ul>
            </nav>

            <div className={styles.search}>
              <Searchbox />
            </div>
          </div>
        </Container>

        {isVisible && (
          <div
            className={`${
              styles.toolsContainer
            } ${`${styles.toolsContainer} ${styles[animationClass]}`}`}
          >
            <Container disabledYPadding>
              <Tools isSmall />
            </Container>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
