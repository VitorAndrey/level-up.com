import Image from "next/image";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { GameProtions } from "@/types/games";

type HeroCarrouselProps = {
  promotions: GameProtions[];
};

export function HeroCarrousel({ promotions }: HeroCarrouselProps) {
  return (
    <Carousel className="flex-1">
      <CarouselContent>
        {promotions.map((game) => (
          <CarouselItem key={game.id}>
            <div className="relative h-[460px] p-2">
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
                <h3 className="text-lg font-semibold text-white">
                  {game.name}
                </h3>
                <Link
                  href={`games/${game.id}`}
                  className={cn(
                    buttonVariants({ variant: "secondary" }),
                    "max-w-max",
                  )}
                >
                  Comprar
                </Link>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
