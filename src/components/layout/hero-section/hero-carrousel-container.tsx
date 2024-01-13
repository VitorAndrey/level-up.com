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
  const [currentAnimationIndex, setCurrentAnimationIndex] = useState(0);

  const handleAnimationChange = (index: number) => {
    setCurrentAnimationIndex(index);
  };

  const handleAnimationComplete = () => {
    setCurrentAnimationIndex((prevIndex) => {
      const nextIndex = (prevIndex + 1) % promotions.length;

      return nextIndex;
    });
  };

  return (
    <div className="h-hero-carrousel md:flex md:gap-2">
      <HeroCarrousel promotions={promotions} />

      <div className="no-scrollbar flex gap-2 overflow-x-auto p-2 child:flex child:flex-1 md:w-60 md:flex-col">
        {promotions.map((game, index) => (
          <HeroPromoCard
            key={game.id}
            game={game.name}
            imageUrl={game.cover_img_url}
            index={index}
            currentIndex={currentAnimationIndex}
            onAnimationChange={handleAnimationChange}
            onAnimationComplete={handleAnimationComplete}
          />
        ))}
      </div>
    </div>
  );
}
