import HeroCarrouselContainer from "./hero-carrousel-container";
import { HeroSearchBar } from "./hero-search-bar";
import { getHeroPromotions } from "@/services/games/getHeroPromotions";

export async function HeroSection() {
  const promotions = await getHeroPromotions();

  return (
    <section>
      <HeroSearchBar />

      <HeroCarrouselContainer promotions={promotions} />
    </section>
  );
}
