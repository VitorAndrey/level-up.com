import { HeroSection } from "@/components/layout/hero-section/hero-section";
import { ProductsSection } from "@/components/layout/products-section/products-section";

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-2">
      <HeroSection />

      <ProductsSection />
    </main>
  );
}
