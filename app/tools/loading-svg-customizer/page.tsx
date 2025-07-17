"use client";

import Container from "@/components/layouts/container";
import SvgPageInner from ".";
import Title from "@/components/common/title";

const SvgPage = () => {
  return (
    <Container
      ball={{
        color: "pink",
        position: "right",
      }}
      hasTitle
    >
      <Title as={"h1"} isWhite>
        Loading SVG カスタマイザー
      </Title>

      <SvgPageInner />
    </Container>
  );
};

export default SvgPage;
