"use client";

import { Button } from "./button";
import { Game } from "@/types/games";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

type AddToCartButtonProps = {
  product: Game;
  buttonText?: string;
};

export function BuyNowButton({ product, buttonText }: AddToCartButtonProps) {
  const { data: session } = useSession();
  const navigation = useRouter();

  function handleBuyNow() {
    if (!session?.user) {
      return navigation.push("/register");
    }
    navigation.push("/payment");
  }

  return (
    <Button onClick={handleBuyNow} className="w-full">
      {buttonText || "Comprar Agora"}
    </Button>
  );
}
