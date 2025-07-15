"use client";

import MovingBouncingBalls from "@/components/snippets/movingBouncingBalls";
import Logo from "@/components/common/logo";
import { Anonymous_Pro } from "next/font/google";
import { useEffect, useState } from "react";

const anonymousPro = Anonymous_Pro({ subsets: ["latin"], weight: ["400"] });
const tagline = process.env.NEXT_PUBLIC_TAGLINE;

const FirstView = () => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative w-full min-h-[100lvh] flex flex-col items-center justify-center overflow-hidden bg-white">
      <div className={`${isLoaded ? "animate-fall-bounce" : "opacity-0"}`}>
        <Logo as="h1" />
      </div>
      <p className={`${anonymousPro.className} inline-block mt-10`}>
        <span
          className={`
            w-0 text-tagline inline-block border-r-2 border-transparent whitespace-nowrap overflow-hidden
            ${isLoaded ? "animate-typing-with-caret" : ""}
          `}
        >
          {tagline}
        </span>
      </p>
      <div className="fixed top-0 left-0 w-full h-full mix-blend-multiply">
        <MovingBouncingBalls />
      </div>
    </section>
  );
};

export default FirstView;
