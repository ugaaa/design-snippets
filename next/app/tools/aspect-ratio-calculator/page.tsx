"use client";

import Container from "@/components/layouts/container";
import Title from "@/components/common/title";

const AspectRatioCalculatorPage = () => {
  return (
    <Container
      ball={{
        color: "pink",
        position: "right",
      }}
      hasTitle
    >
      <Title as={"h1"} ball={{ main: "green", sub: "yellow" }} isWhite>
        アスペクト比計算
      </Title>
    </Container>
  );
};

export default AspectRatioCalculatorPage;
