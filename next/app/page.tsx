import FirstView from "@/components/sections/firstView";
import About from "@/components/sections/about";
import ToolsFooter from "@/components/sections/toolsFooter";

export default async function Home() {
  return (
    <>
      <FirstView />
      <About />
      <ToolsFooter />
    </>
  );
}
