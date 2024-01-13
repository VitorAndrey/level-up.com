import { useEffect, useRef, useState } from "react";
import Slider, { Settings } from "react-slick";

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
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const carrouselRef = useRef<Slider>(null);

  const sliderSettings: Settings = {
    dots: true,
    infinite: true,
    speed: 800,
    fade: true,
    arrows: false,
    slidesToShow: 1,
    cssEase: "ease-in-out",
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

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Slider
      ref={carrouselRef}
      className="h-hero-carrousel overflow-hidden rounded-2xl md:w-[calc(100%-248px)]"
      {...sliderSettings}
    >
      {promotions.map((game) => (
        <HeroCarrouselCard key={game.id} game={game} />
      ))}
    </Slider>
  );
}
