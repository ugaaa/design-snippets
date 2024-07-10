"use client";

import Container from "@/components/layouts/container";
import CharCountPageInner from "./index";
import Title from "@/components/common/title";

const CharCountPage = () => {
  return (
    <Container
      ball={{
        color: "pink",
        position: "right",
      }}
      hasTitle
    >
      <Title as={"h1"} ball={{ main: "green", sub: "yellow" }} isWhite>
        文字数カウントツール
      </Title>

      <CharCountPageInner />
    </Container>
  );
};

export default CharCountPage;
