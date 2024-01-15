"use client";

import { useContext } from "react";

import { ShoppingCartIcon, XIcon } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { BuyNowButton } from "@/components/ui/buy-now-button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ShoppingCartContext } from "@/contexts/ShoppingCartContext";
import { calcPrice } from "@/utils/calcPrice";

export default function HeaderShoppingCart() {
  const { shoppingCart } = useContext(ShoppingCartContext);

  return (
    <Sheet>
      <SheetTrigger asChild className="-mt-1">
        <Button variant="ghost">
          <ShoppingCartIcon className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent className=" flex flex-col">
        <div className="no-scrollbar flex flex-1 flex-col gap-2 overflow-hidden overflow-y-auto pt-12">
          {shoppingCart.map((product) => (
            <div
              key={product.id}
              className="relative flex items-center gap-2 rounded-lg border p-2"
            >
              <Button
                className="absolute right-0 top-0"
                variant="ghost"
                size="icon"
              >
                <XIcon className="h-4 w-4" />
              </Button>

              <Image
                src={product.cover_img_url}
                alt={product.name}
                height={40}
                width={50}
                className="h-16 w-12 object-cover"
              />
              <div>
                <h3 className="w-52 truncate">{product.name}</h3>
                {product.discount_percentage ? (
                  <div className="flex items-center gap-2">
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
            </div>
          ))}
        </div>
        <BuyNowButton buttonText="Finalizar compra" />
      </SheetContent>
    </Sheet>
  );
}
