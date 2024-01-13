import HeroCarrouselContainer from "./hero-carrousel-container";
import { getHeroPromotions } from "@/services/games/getHeroPromotions";

export async function HeroSection() {
  const promotions = await getHeroPromotions();

  return (
    <section>
      <HeroCarrouselContainer promotions={promotions} />
    </section>
  );
}
