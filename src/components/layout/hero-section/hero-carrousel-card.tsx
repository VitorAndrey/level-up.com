import Image from "next/image";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { GameProtions } from "@/types/games";

type HeroCarrouselCardProps = {
  game: GameProtions;
};

export default function HeroCarrouselCard({ game }: HeroCarrouselCardProps) {
  return (
    <div className="relative h-hero-carrousel">
      <Image
        priority
        src={game.banner_img}
        alt={game.name}
        height={460}
        width={720}
        className="h-full w-full object-cover brightness-[.4]"
      />

      <div className="absolute bottom-8 left-8 flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-white">{game.name}</h3>
      </div>
    </div>
  );
}
