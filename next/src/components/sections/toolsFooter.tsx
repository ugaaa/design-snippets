"use client";

import Title from "../common/title";
import Tools from "../common/tools";
import Container from "../layouts/container";

const ToolsFooter = () => {
  return (
    <section>
      <Container
        ball={{
          color: "pink",
          position: "right",
        }}
        hasTitle
      >
        <Title as={"h2"} ball={{ main: "green", sub: "yellow" }} isWhite>
          便利なツール
        </Title>
        <Tools />
      </Container>
    </section>
  );
};

export default ToolsFooter;
