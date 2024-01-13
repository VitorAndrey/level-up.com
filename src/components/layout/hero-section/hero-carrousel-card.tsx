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
    <div className="h-hero-carrousel relative">
      <Image
        priority
        src={game.banner_img}
        alt={game.name}
        height={0}
        width={0}
        sizes="100vw"
        className="h-full w-full rounded-lg object-cover brightness-[.4]"
      />

      <div className="absolute bottom-8 left-8 flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-white">{game.name}</h3>
        <Link
          href={`games/${game.id}`}
          className={cn(buttonVariants({ variant: "secondary" }), "max-w-max")}
        >
          Comprar
        </Link>
      </div>
    </div>
  );
}
