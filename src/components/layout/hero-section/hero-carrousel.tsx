"use client";

import Slider from "react-slick";

import HeroCarrouselCard from "./hero-carrousel-card";
import { GameProtions } from "@/types/games";

type HeroCarrouselProps = {
  promotions: GameProtions[];
};

export function HeroCarrousel({ promotions }: HeroCarrouselProps) {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider className="hero-carrousel w-[calc(100%-248px)]" {...sliderSettings}>
      {promotions.map((game) => (
        <HeroCarrouselCard key={game.id} game={game} />
      ))}
    </Slider>
  );
}
