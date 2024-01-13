import React, { useEffect, useRef, useState } from "react";

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
  const [isActive, setIsActive] = useState<boolean>(false);
  const animationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!animationRef.current) return;

    if (index === currentIndex) {
      setIsActive(true);
      animationRef.current.style.animation =
        "fillAnimation 10s linear forwards";
    } else {
      setIsActive(false);
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
      data-active={isActive}
      onClick={handleClick}
      className="relative flex min-w-40 items-center gap-2 overflow-hidden rounded-2xl p-3 hover:bg-zinc-100 data-[active=true]:bg-zinc-100 md:min-w-0"
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
        className="absolute inset-0 rounded-xl bg-zinc-300"
        style={{
          width: "0%",
        }}
      ></div>
    </button>
  );
}
