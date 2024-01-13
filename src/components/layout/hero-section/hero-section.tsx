import { HeroCarrousel } from "./hero-carrousel";
import { HeroPromoCard } from "./hero-promo-card";
import { HeroSearchBar } from "./hero-search-bar";
import { getHeroPromotions } from "@/services/games/getHeroPromotions";

export async function HeroSection() {
  const promotions = await getHeroPromotions();
  return (
    <section>
      <HeroSearchBar />

      <div className="md:flex">
        <HeroCarrousel promotions={promotions} />

        <div className="no-scrollbar flex gap-2 overflow-x-auto p-3 child:flex child:flex-1 md:w-60 md:flex-col">
          {promotions.map((game) => (
            <HeroPromoCard
              key={game.id}
              game={game.name}
              imageUrl={game.cover_img_url}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
