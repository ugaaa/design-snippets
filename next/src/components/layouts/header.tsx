"use client";

import { Montserrat } from "next/font/google";
import Logo from "@/components/common/logo";
import Container from "@/components/layouts/container";
import styles from "./header.module.scss";
import Link from "next/link";
import IcoArrow from "../svgs/icoArrow";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useInView } from "react-intersection-observer";
import Tools from "../common/tools";
import { useResize } from "@/hooks/useResize";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["900"] });

const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setMenuOpen] = useState<Boolean>(false);
  const [isChildMenuOpen, setChildMenuOpen] = useState<Boolean>(false);
  const [animationClass, setAnimationClass] = useState("");
  const [isVisible, setIsVisible] = useState<Boolean>(false);
  const [isScrolled, setIsScrolled] = useState<Boolean>(false);
  const { ref, inView } = useInView({
    rootMargin: "100px 0px 0px 0px",
  });
  const { isSP, isPC } = useResize();

  useEffect(() => {
    if (isSP) {
      setChildMenuOpen(true);
    }
  }, [isSP]);

  useEffect(() => {
    setIsScrolled(!inView);
  }, [inView]);

  const handleMouseOver = () => {
    if (isPC) {
      setChildMenuOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (isPC) {
      setChildMenuOpen(false);
    }
  };

  const handleToolsClick = () => {
    if (isPC) {
      setChildMenuOpen((prevState) => !prevState);
    }
  };

  const handleLinkClick = () => {
    if (isPC) {
      setChildMenuOpen(false);
    }
    if (isSP) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isChildMenuOpen) {
      setIsVisible(true);
      const timer = setTimeout(() => setAnimationClass("fadeIn"), 10); // アニメーションの時間と一致させる
      return () => clearTimeout(timer);
    } else {
      setAnimationClass("fadeOut");
      const timer = setTimeout(() => setIsVisible(false), 300); // アニメーションの時間と一致させる
      return () => clearTimeout(timer);
    }
  }, [isChildMenuOpen]);

  return (
    <header
      ref={ref}
      className={`${styles.headerContainer} ${
        isVisible ? styles.isVisible : ""
      } ${pathname === "/" ? styles.isHome : ""} ${
        isScrolled ? styles.isScrolled : ""
      }`}
    >
      <div className={styles.header} onMouseLeave={handleMouseLeave}>
        <Container disabledYPadding>
          <div className={styles.headerInner}>
            <div className={styles.logo}>
              <Logo isWhite href="/" />
            </div>

            <nav
              className={`${styles.gnav} ${isMenuOpen ? styles.isOpen : ""}`}
            >
              <ul>
                <li>
                  <Link
                    className={`${montserrat.className} ${styles.button}`}
                    onClick={handleLinkClick}
                    href="/blog"
                  >
                    BLOG
                  </Link>
                </li>
                {isPC && (
                  <li>
                    <button
                      type="button"
                      className={`${montserrat.className} ${styles.button}`}
                      onMouseOver={handleMouseOver}
                      onClick={handleToolsClick}
                    >
                      TOOLS
                      <IcoArrow direction="bottom" />
                    </button>
                  </li>
                )}
              </ul>
              {isVisible && (
                <div
                  className={`${
                    styles.toolsContainer
                  } ${`${styles.toolsContainer} ${styles[animationClass]}`}`}
                >
                  <Container disabledYPadding>
                    <Tools isSmall onClick={handleLinkClick} />
                  </Container>
                </div>
              )}
            </nav>

            {isSP && (
              <button
                type="button"
                onClick={() => setMenuOpen(!isMenuOpen)}
                className={`${styles.navBtn} ${
                  isMenuOpen ? styles.isOpen : ""
                }`}
              >
                <span />
                <span />
              </button>
            )}

            {/* <div className={styles.search}>
              <Searchbox />
            </div> */}
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
