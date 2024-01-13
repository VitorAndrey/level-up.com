import React from "react";

import Image from "next/image";

type HeroPromoCardProps = {
  game: string;
  imageUrl: string;
};

export function HeroPromoCard({ game, imageUrl }: HeroPromoCardProps) {
  return (
    <div className="flex min-w-40 items-center gap-2 p-2 md:min-w-0">
      <Image
        src={imageUrl}
        alt={game}
        height={0}
        width={0}
        sizes="100vw"
        className="h-full w-full max-w-12 rounded-lg object-cover"
      />
      <h3 className="truncate">{game}</h3>
    </div>
  );
}
