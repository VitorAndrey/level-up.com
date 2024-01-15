import { StarIcon } from "lucide-react";
import Image from "next/image";

import { AddToCartButton } from "@/components/ui/add-to-cart-button";
import { Button } from "@/components/ui/button";
import { getGameBySlug } from "@/services/games/getGamesBySlug";
import { calcPrice } from "@/utils/calcPrice";

interface ParamsTypes {
  params: {
    slug: string;
  };
}

export default async function GamesProductPage({ params }: ParamsTypes) {
  const product = await getGameBySlug(params.slug);

  if (!product) return <p>Loading..</p>;

  return (
    <section className="py-8">
      <h3 className="mb-4 text-2xl font-semibold">{product.name}</h3>

      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="flex flex-1 flex-col">
          <Image
            priority
            src={product.banner_img}
            alt={product.name}
            height={400}
            width={720}
            className="h-[400px] w-full rounded-xl object-cover brightness-[.4]"
          />
          <p className="hidden p-2 text-sm text-foreground/70 sm:block">
            {product.description}
          </p>
        </div>
        <div className="mx-auto flex w-full flex-1 flex-col gap-2 sm:max-w-72 md:flex-1">
          <Image
            src={product.cover_img_url}
            alt={product.name}
            height={460}
            width={288}
            className="mb-8 hidden h-[200px] w-full rounded-xl object-cover brightness-[.4] sm:block"
          />

          <div className="flex justify-between">
            <span className="flex items-center gap-1 text-sm">
              4
              <StarIcon className="h-3 w-3" />
            </span>
            <span className="text-xs">+500 avaliações</span>
          </div>

          {product.discount_percentage ? (
            <div className="flex items-center justify-between text-xl">
              <span>
                R${calcPrice(product.price, product.discount_percentage)}
                <span className="ml-1 text-base text-foreground/60 line-through">
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

          <Button className="mt-4 w-full">Compre Agora</Button>
          <AddToCartButton product={product} />
        </div>
      </div>

      <div>Comments section</div>
    </section>
  );
}
