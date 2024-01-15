"use client";

import { useContext, useState } from "react";
import { Button } from "./button";
import { Game } from "@/types/games";
import { ShoppingCartContext } from "@/contexts/ShoppingCartContext";

type AddToCartButtonProps = {
  product: Game;
};

export function AddToCartButton({ product }: AddToCartButtonProps) {
  const {
    handleAddShoppingCartItem,
    shoppingCart,
    handleRemoveShoppingCartItem,
  } = useContext(ShoppingCartContext);

  const alreadyInCart = shoppingCart.some((item) => item.id === product.id);

  function handleAddToCart() {
    if (alreadyInCart) {
      handleRemoveShoppingCartItem(product.id);
    } else {
      handleAddShoppingCartItem(product);
    }
  }

  return (
    <Button onClick={handleAddToCart} variant="outline" className="w-full">
      {alreadyInCart ? "Remover do carrinho" : "Adicionar o carrinho"}
    </Button>
  );
}
