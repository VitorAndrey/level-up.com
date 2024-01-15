"use client";

import { useContext } from "react";
import { Button } from "./button";
import { Game } from "@/types/games";
import { ShoppingCartContext } from "@/contexts/ShoppingCartContext";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

type AddToCartButtonProps = {
  product: Game;
};

export function AddToCartButton({ product }: AddToCartButtonProps) {
  const { data: session } = useSession();
  const navigation = useRouter();

  const {
    handleAddShoppingCartItem,
    shoppingCart,
    handleRemoveShoppingCartItem,
  } = useContext(ShoppingCartContext);

  const alreadyInCart = shoppingCart.some((item) => item.id === product.id);

  function handleAddToCart() {
    if (!session?.user) {
      return navigation.push("/register");
    }

    if (alreadyInCart) {
      handleRemoveShoppingCartItem(product.id);
    } else {
      handleAddShoppingCartItem(product);
    }
  }

  return (
    <Button onClick={handleAddToCart} variant={"outline"} className="w-full">
      {alreadyInCart ? "Remover do carrinho" : "Adicionar ao carrinho"}
    </Button>
  );
}
