"use client";

import Container from "@/components/layouts/container";
import SvgPageInner from ".";
import Title from "@/components/common/title";
import Header from "@/components/layouts/header";
import Footer from "@/components/layouts/footer";

const SvgPage = () => {
  return (
    <>
      <main>
        <Header />
        <Container
          ball={{
            color: "pink",
            position: "right",
          }}
          hasTitle
        >
          <Title as={"h1"} ball={{ main: "green", sub: "yellow" }} isWhite>
            Loading SVG カスタマイザー
          </Title>

          <SvgPageInner />
        </Container>
        <Footer />
      </main>
    </>
  );
};

export default SvgPage;
