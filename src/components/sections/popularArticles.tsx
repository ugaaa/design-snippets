"use client";

import Title from "../common/title";
import Container from "../layouts/container";

const PopularArticles = () => (
  <section>
    <Container ball={{color: 'pink', position: 'center'}}>
      <Title as="h2" ball={{main: 'green', sub: 'yellow'}} isWhite>人気の記事</Title>
      
    </Container>
  </section>
);

export default PopularArticles;
