import React, { useEffect, useRef } from "react";

import Image from "next/image";

type HeroPromoCardProps = {
  game: string;
  imageUrl: string;
  index: number;
  currentIndex: number;
  onAnimationChange: (index: number) => void;
  onAnimationComplete: () => void;
};

export function HeroPromoCard({
  game,
  imageUrl,
  index,
  currentIndex,
  onAnimationChange,
  onAnimationComplete,
}: HeroPromoCardProps) {
  const animationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!animationRef.current) return;

    if (index === currentIndex) {
      animationRef.current.style.animation = "fillAnimation 6s linear forwards";
    } else {
      animationRef.current.style.animation = "none";
    }
  }, [index, currentIndex]);

  const handleAnimationEnd = () => {
    onAnimationComplete();
  };

  const handleClick = () => {
    onAnimationChange(index);
  };

  return (
    <button
      onClick={handleClick}
      className="relative flex min-w-40 items-center gap-2 overflow-hidden p-2 md:min-w-0"
    >
      <Image
        src={imageUrl}
        alt={game}
        height={0}
        width={0}
        sizes="100vw"
        className="z-10 h-full w-full max-w-12 rounded-lg object-cover"
      />
      <h3 className="z-10 truncate">{game}</h3>

      <div
        ref={animationRef}
        onAnimationEnd={handleAnimationEnd}
        className="absolute inset-0 rounded-lg bg-zinc-300"
        style={{
          width: "0%",
        }}
      ></div>
    </button>
  );
}
