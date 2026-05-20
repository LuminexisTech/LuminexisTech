import { CurvedLoopBand } from "@/components/CurvedLoopBand";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Pillars } from "@/components/Pillars";
import { Products } from "@/components/Products";
import { Values } from "@/components/Values";
import { Mission } from "@/components/Mission";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CurvedLoopBand />
        <Pillars />
        <Products />
        <Values />
        <Mission />
      </main>
      <Footer />
    </>
  );
}
