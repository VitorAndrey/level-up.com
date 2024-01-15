"use client";

import { useContext } from "react";

import { ShoppingCartIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ShoppingCartContext } from "@/contexts/ShoppingCartContext";

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
        <div className="flex-1 pt-12">
          {shoppingCart.map((product) => (
            <p key={product.id}>{product.name}</p>
          ))}
        </div>

        <Button className="w-full">Finalizar compra</Button>
      </SheetContent>
    </Sheet>
  );
}
