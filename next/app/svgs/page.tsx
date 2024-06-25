import Header from "@/components/layouts/header";
import Footer from "@/components/layouts/footer";
import { fetchData } from "@/api/fetchData";
import { PostProps } from "@/types/posts";
import Posts from "@/components/layouts/posts";
import Container from "@/components/layouts/container";
import Title from "@/components/common/title";

export default async function SvgPage() {
  return (
    <>
      <Header />
      <main>
        <Container ball={{ color: "blue", position: "right" }} hasTitle>
          <Title as="h1" isWhite>
            Svgs
          </Title>
        </Container>
      </main>
      <Footer />
    </>
  );
}
