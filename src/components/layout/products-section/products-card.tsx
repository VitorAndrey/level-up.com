import Image from "next/image";
import Link from "next/link";

import { Game, GameWithRating } from "@/types/games";
import { calcPrice } from "@/utils/calcPrice";

type ProductsCardProps = {
  product: Game | GameWithRating;
};

export function ProductsCard({ product }: ProductsCardProps) {
  return (
    <Link
      href={`/games/${product.slug}`}
      className="group relative w-full outline-none"
    >
      <Image
        src={product.cover_img_url}
        alt={product.name}
        height={260}
        width={190}
        className="h-[260px] w-full rounded-lg object-cover object-center brightness-75 transition-all duration-500 hover:brightness-90"
      />
      <div className="p-2 pr-8 text-sm font-semibold">
        <h3 className="truncate text-base">{product.name}</h3>
        {product.discount_percentage ? (
          <div className="flex items-center justify-between">
            <span>
              R${calcPrice(product.price, product.discount_percentage)}
              <span className="ml-1 text-xs text-foreground/60 line-through">
                {product.price}
              </span>
            </span>

            <div className="rounded-lg border px-1 text-xs">
              -{product.discount_percentage}%
            </div>
          </div>
        ) : (
          <span>R${product.price}</span>
        )}
      </div>
    </Link>
  );
}
