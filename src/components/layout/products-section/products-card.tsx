import Image from "next/image";
import Link from "next/link";

import { GameWithRating } from "@/types/games";

type ProductsCardProps = {
  product: GameWithRating;
};

export function ProductsCard({ product }: ProductsCardProps) {
  return (
    <Link href={`/games/${product.id}`} className="w-[210px]">
      <Image
        src={product.cover_img_url}
        alt={product.name}
        height={280}
        width={210}
        className="h-[280px] w-full rounded-lg object-cover"
      />

      <div className="w-full p-2 pr-8">
        <h3 className="truncate">{product.name}</h3>
        <span>{product.price}</span>
      </div>
    </Link>
  );
}
