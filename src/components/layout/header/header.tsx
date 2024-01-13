import Link from "next/link";

import { HamburguerMenu } from "./hamburguer-menu";
import HeaderAuth from "./header-auth";
import HeaderLogo from "./header-logo";
import { HeaderSearchBar } from "./header-search-bar";
import HeaderShoppingCart from "./header-shoppingCart";

export function Header() {
  return (
    <>
      <header className="flex h-[4.5rem] items-center justify-between border-b px-4 md:px-8">
        <Link href={"/"} className="flex items-center gap-1">
          <HeaderLogo />
          <h2 className="text-lg font-semibold">Level Up</h2>
        </Link>

        <div className="hidden items-center gap-2 md:flex">
          <HeaderAuth />
          <HeaderShoppingCart />
        </div>

        <div className="block md:hidden">
          <HamburguerMenu />
        </div>
      </header>

      <HeaderSearchBar />
    </>
  );
}
