"use client";

import Button from "../common/button";
import Title from "../common/title";
import Container from "../layouts/container";

const Svgs = ({ isSecondary }: { isSecondary?: boolean }) => {
  return (
    <section>
      <Container
        ball={{
          color: isSecondary ? "pink" : "blue",
          position: isSecondary ? "center" : "right",
        }}
        hasTitle
      >
        <Title as={isSecondary ? "h2" : "h1"} isWhite>
          SVGs
        </Title>

        <Button href="/svgs">SVG画像をもっと見る</Button>
      </Container>
    </section>
  );
};

export default Svgs;
