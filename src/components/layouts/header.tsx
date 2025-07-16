"use client";

import { Montserrat } from "next/font/google";
import Logo from "@/components/common/logo";
import Container from "@/components/layouts/container";
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
      className={`${isVisible ? "visible " : ""} ${
        pathname === "/" ? "h-0" : "h-header-sm md:h-header-lg"
      }`}
    >
      <div
        className={`fixed top-0 left-0 w-full z-10 transition-all duration-500 ${
          isScrolled || pathname === "/" || isMenuOpen || isChildMenuOpen
            ? "bg-yellow"
            : ""
        } ${
          pathname === "/"
            ? `-translate-y-full animate-show-down ${
                isScrolled ? "translate-y-0" : ""
              }`
            : ""
        }`}
        onMouseLeave={handleMouseLeave}
      >
        <Container disabledYPadding>
          <div className="h-header-sm md:h-header-lg flex justify-between items-center">
            <div>
              <Logo isWhite href="/" />
            </div>

            <nav className={`gnav ${isMenuOpen ? "open" : ""} hidden md:block`}>
              <ul className="flex flex-col md:flex-row list-none gap-5 md:gap-10 m-0 md:items-center">
                {isPC && (
                  <li>
                    <button
                      type="button"
                      className={`${montserrat.className} flex items-center bg-transparent border-none text-2xl text-white md:hover:text-color-green transition-colors duration-300`}
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
                  className={`tools-container ${animationClass} opacity-0 mt-5 mx-[-30px] transition-opacity duration-300 ease-in-out md:absolute md:top-full md:left-0 md:right-0 md:bg-lightgray md:border-b-[10px] md:border-yellow md:p-10 md:m-0`}
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
                className={`nav-btn relative w-8 h-8 bg-transparent border-none ${
                  isMenuOpen ? "open" : ""
                }`}
              >
                <span className="absolute block transition-all duration-300 w-full h-0.5 rounded-sm bg-white top-2.5" />
                <span className="absolute block transition-all duration-300 w-full h-0.5 rounded-sm bg-white bottom-2.5" />
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
