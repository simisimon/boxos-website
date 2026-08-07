import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { AthleteProof } from "@/components/sections/AthleteProof";
import { CtaBand } from "@/components/sections/CtaBand";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Nav />
      <main className="flex-1">
        <Hero />
        <Features />
        <ProductShowcase />
        <AthleteProof />
        <CtaBand />
      </main>
      <Footer />
    </div>
  );
}
