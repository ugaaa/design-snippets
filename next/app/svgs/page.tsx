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
            color: "blue",
            position: "right",
          }}
          hasTitle
        >
          <Title as={"h1"} isWhite>
            Loading SVG Customizer
          </Title>

          <SvgPageInner />
        </Container>
        <Footer />
      </main>
    </>
  );
};

export default SvgPage;
