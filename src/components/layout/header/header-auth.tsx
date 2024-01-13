"use client";

import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function HeaderAuth() {
  const { data: session } = useSession();

  return (
    <div>
      {session ? (
        session.user && (
          <div className="flex items-center gap-4">
            <p className="text-sm">{session.user.name}</p>

            <Avatar className="h-8 w-8">
              <AvatarImage
                src={session.user.image || ""}
                alt={session.user.name || ""}
              />
              <AvatarFallback>LV</AvatarFallback>
            </Avatar>

            <Button onClick={() => signOut()}>Sair</Button>
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
  );
}
