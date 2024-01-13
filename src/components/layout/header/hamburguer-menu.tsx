"use client";

import {
  BadgePlusIcon,
  Bell,
  LogOutIcon,
  Menu,
  PartyPopperIcon,
  UserPlus2Icon,
} from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { Avatar } from "../../ui/avatar";
import { ScrollArea } from "../../ui/scroll-area";
import { ThemeToggle } from "../../ui/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

export function HamburguerMenu() {
  const navigation = useRouter();

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

        <ScrollArea className="flex-1 pt-12">
          <div className="mb-8 flex items-center">
            <div className="flex flex-1 items-center gap-2">
              <Avatar className="h-8 w-8 bg-red-200" />

              <h3 className="truncate">Vitor Andrey</h3>
            </div>

            <SheetClose asChild>
              <Button size="icon" variant="ghost">
                <LogOutIcon className="h-5 w-5" />
              </Button>
            </SheetClose>
          </div>

          <nav className="space-y-8">
            <div className="flex flex-col gap-1">
              <h3 className="mb-2 px-4 font-semibold">Apresentação</h3>

              <SheetClose asChild>
                <Link href="/welcome">
                  <Button
                    className="w-full justify-start"
                    variant={pathname === "/welcome" ? "secondary" : "ghost"}
                  >
                    <PartyPopperIcon className="mr-2 w-4" /> Boas vindas
                  </Button>
                </Link>
              </SheetClose>
            </div>

            <div className="flex flex-col gap-1">
              <h3 className="mb-2 px-4 font-semibold">Descubra</h3>
              <SheetClose asChild>
                <Link href="/newgroup">
                  <Button
                    className="w-full justify-start"
                    variant={pathname === "/newgroup" ? "secondary" : "ghost"}
                  >
                    <BadgePlusIcon className="mr-2 w-4" /> Criar grupos
                  </Button>
                </Link>
              </SheetClose>

              <SheetClose asChild>
                <Link href="/joingroup">
                  <Button
                    className="w-full justify-start"
                    variant={pathname === "/joingroup" ? "secondary" : "ghost"}
                  >
                    <UserPlus2Icon className="mr-2 w-4" /> Entrar em grupos
                  </Button>
                </Link>
              </SheetClose>

              <SheetClose asChild>
                <Link href="/notifications">
                  <Button
                    className="w-full justify-start"
                    variant={
                      pathname === "/notifications" ? "secondary" : "ghost"
                    }
                  >
                    <Bell className="mr-2 w-4" /> Notificações
                  </Button>
                </Link>
              </SheetClose>
            </div>
          </nav>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
