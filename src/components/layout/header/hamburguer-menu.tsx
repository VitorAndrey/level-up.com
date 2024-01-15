"use client";

import { useContext } from "react";

import { LogOutIcon, Menu, XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";

import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";
import { ScrollArea } from "../../ui/scroll-area";
import { ThemeToggle } from "../../ui/theme-toggle";
import { Button, buttonVariants } from "@/components/ui/button";
import { BuyNowButton } from "@/components/ui/buy-now-button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ShoppingCartContext } from "@/contexts/ShoppingCartContext";
import { cn } from "@/lib/utils";
import { calcPrice } from "@/utils/calcPrice";

export function HamburguerMenu() {
  const navigation = useRouter();
  const { data: session } = useSession();
  const { shoppingCart, handleRemoveShoppingCartItem } =
    useContext(ShoppingCartContext);

  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className="p-2">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>

      <SheetContent className="flex flex-col">
        <SheetHeader className="-mt-1">
          <ThemeToggle />
        </SheetHeader>

        <div className="my-2">
          {session ? (
            session.user && (
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Avatar className="h-10 w-10">
                    <AvatarImage
                      src={session.user.image || ""}
                      alt={session.user.name || ""}
                    />
                    <AvatarFallback>LV</AvatarFallback>
                  </Avatar>

                  <h3 className="truncate text-sm">{session.user.name}</h3>
                </div>

                <Button onClick={() => signOut()} size="icon" variant="ghost">
                  <LogOutIcon className="h-5 w-5" />
                </Button>
              </div>
            )
          ) : (
            <div className="hidden items-center gap-2 md:flex">
              <Link
                href={"/login"}
                className={cn(buttonVariants({ variant: "link" }), "text-sm")}
              >
                login
              </Link>
              <Link
                href={"/register"}
                className={cn(buttonVariants({ variant: "default" }), "")}
              >
                Registar
              </Link>
            </div>
          )}
        </div>

        <div className="no-scrollbar flex flex-1 flex-col gap-2 overflow-hidden overflow-y-auto">
          {shoppingCart.map((product) => (
            <div
              key={product.id}
              className="relative flex items-center gap-2 rounded-lg border p-2"
            >
              <Button
                onClick={() => handleRemoveShoppingCartItem(product.id)}
                className="absolute right-0 top-0"
                variant="link"
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
                      R$
                      {calcPrice(product.price, product.discount_percentage)}
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
