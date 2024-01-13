import { useEffect, useRef } from "react";
import Slider from "react-slick";

import HeroCarrouselCard from "./hero-carrousel-card";
import { GameProtions } from "@/types/games";

type HeroCarrouselProps = {
  promotions: GameProtions[];
  currentSlideIndex: number;
  onAnimationChange: (index: number) => void;
};

export function HeroCarrousel({
  promotions,
  currentSlideIndex,
  onAnimationChange,
}: HeroCarrouselProps) {
  const carrouselRef = useRef<Slider>(null);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index: number) => {
      onAnimationChange(index);
    },
  };

  useEffect(() => {
    if (carrouselRef.current) {
      carrouselRef.current.slickGoTo(currentSlideIndex);
    }
  }, [currentSlideIndex]);

  return (
    <Slider
      ref={carrouselRef}
      className="hero-carrousel w-[calc(100%-248px)]"
      {...sliderSettings}
    >
      {promotions.map((game) => (
        <HeroCarrouselCard key={game.id} game={game} />
      ))}
    </Slider>
  );
}
