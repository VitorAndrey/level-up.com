import { BadgePlusIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { GameWithRating } from "@/types/games";

type ProductsCardProps = {
  product: GameWithRating;
};

export function ProductsCard({ product }: ProductsCardProps) {
  return (
    <Link
      href={`/games/${product.slug}`}
      className="group relative min-w-[200px] outline-none"
    >
      <Image
        src={product.cover_img_url}
        alt={product.name}
        height={270}
        width={200}
        className="h-[270px] w-[200px] rounded-lg object-cover object-center brightness-75 transition-all duration-500 hover:brightness-90"
      />

      <div className="w-full p-2 pr-8">
        <h3 className="truncate">{product.name}</h3>
        <span>{product.price}</span>
      </div>

      <div className="absolute right-10 top-2 hidden rounded-full bg-black/60 group-hover:block">
        <BadgePlusIcon className="text-white" />
      </div>
    </Link>
  );
}
