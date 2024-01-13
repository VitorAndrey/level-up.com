"use client";

import { createContext, ReactNode, useEffect, useState } from "react";

import { Game } from "@/types/games";

type ShoppingCartContextProps = {
  shoppingCart: Game[];
  handleClearShoppingCart: () => void;
  handleRemoveShoppingCartItem: (id: string) => void;
  handleAddShoppingCartItem: (game: Game) => void;
};

export const ShoppingCartContext = createContext(
  {} as ShoppingCartContextProps,
);

export function ShoppingCartContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [shoppingCart, setShoppingCart] = useState<Game[]>(
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("shopping-cart") || JSON.stringify([]))
      : [],
  );

  function handleClearShoppingCart() {
    setShoppingCart([]);
  }

  function handleRemoveShoppingCartItem(id: string) {
    setShoppingCart((prev) => {
      const shoppingCartWithoutRemovedOne = prev.filter((game) => {
        return game.id !== id;
      });

      return shoppingCartWithoutRemovedOne;
    });
  }

  function handleAddShoppingCartItem(game: Game) {
    setShoppingCart((prev) => [...prev, game]);
  }

  function handleShoppingCartPersistence() {
    localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
  }

  useEffect(() => {
    handleShoppingCartPersistence();
  }, [shoppingCart]);

  return (
    <ShoppingCartContext.Provider
      value={{
        shoppingCart,
        handleClearShoppingCart,
        handleRemoveShoppingCartItem,
        handleAddShoppingCartItem,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
