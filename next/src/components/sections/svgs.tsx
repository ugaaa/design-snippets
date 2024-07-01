"use client";

import Button from "../common/button";
import Title from "../common/title";
import Container from "../layouts/container";

const Svgs = () => {
  return (
    <section>
      <Container
        ball={{
          color: "blue",
          position: "right",
        }}
        hasTitle
      >
        <Title as={"h1"} isWhite>
          SVGs
        </Title>

        <Button href="/svgs">SVG画像をもっと見る</Button>
      </Container>
    </section>
  );
};

export default Svgs;
