import { HamburguerMenu } from "./hamburguer-menu";
import HeaderAuth from "./header-auth";
import HeaderShoppingCart from "./header-shoppingCart";
import { LevelUpLogo } from "@/components/ui/level-up-logo";

export function Header() {
  return (
    <header className="flex h-[4.5rem] items-center justify-between border-b px-8">
      <div className="flex items-center gap-1">
        <LevelUpLogo />
        <h2 className="text-lg font-semibold">Level Up</h2>
      </div>

      <div className="hidden items-center gap-2 md:flex">
        <HeaderAuth />
        <HeaderShoppingCart />
      </div>

      <div className="block md:hidden">
        <HamburguerMenu />
      </div>
    </header>
  );
}
