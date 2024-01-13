"use client";

import React, { useState } from "react";

import { HeroCarrousel } from "./hero-carrousel";
import { HeroPromoCard } from "./hero-promo-card";
import { GameProtions } from "@/types/games";

type HeroCarrouselContainerProps = {
  promotions: GameProtions[];
};

export default function HeroCarrouselContainer({
  promotions,
}: HeroCarrouselContainerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleChange = (index: number) => {
    setCurrentIndex(index);
  };

  const handleComplete = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = (prevIndex + 1) % promotions.length;
      return nextIndex;
    });
  };

  return (
    <div className="h-hero-carrousel md:flex md:gap-2">
      <HeroCarrousel
        promotions={promotions}
        currentSlideIndex={currentIndex}
        onAnimationChange={handleChange}
      />

      <div className="no-scrollbar flex gap-2 overflow-x-auto p-2 child:flex child:flex-1 md:w-60 md:flex-col">
        {promotions.map((game, index) => (
          <HeroPromoCard
            key={game.id}
            game={game.name}
            imageUrl={game.cover_img_url}
            index={index}
            currentIndex={currentIndex}
            onAnimationChange={handleChange}
            onAnimationComplete={handleComplete}
          />
        ))}
      </div>
    </div>
  );
}
