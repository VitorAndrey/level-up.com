"use client";

import * as React from "react";

import { Loader2Icon } from "lucide-react";
import Link from "next/link";

import GoogleAuthBtn from "@/components/google-auth-btn";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

type ButtonType = "google" | "form" | null;

export type LoadingObjectType = {
  isLoading: boolean;
  spinningButton: ButtonType;
};

const defaltLoadingObject = {
  isLoading: false,
  spinningButton: null,
};

export default function Login() {
  const [isLoadingObject, setIsLoadingObject] =
    React.useState<LoadingObjectType>(defaltLoadingObject);

  const { isLoading } = isLoadingObject;

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoadingObject({
      isLoading: true,
      spinningButton: "form",
    });

    setTimeout(() => {
      setIsLoadingObject(defaltLoadingObject);
    }, 3000);
  }

  return (
    <>
      <Link
        href={"/register"}
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute right-4 top-4 md:right-8 md:top-8",
        )}
      >
        Registrar
      </Link>

      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Fazer Login
            </h1>
            <p className="text-sm text-muted-foreground">
              Entre com seu email e senha para fazer login
            </p>
          </div>

          <div className="grid gap-6">
            <form onSubmit={onSubmit}>
              <div className="grid gap-4">
                <div className="grid gap-1">
                  <Label className="sr-only" htmlFor="email">
                    Email
                  </Label>
                  <Input
                    id="email"
                    placeholder="name@example.com"
                    type="email"
                    autoCapitalize="none"
                    autoComplete="email"
                    autoCorrect="off"
                    disabled={isLoading}
                  />
                </div>
                <div className="grid gap-1">
                  <Label className="sr-only" htmlFor="password">
                    Senha
                  </Label>
                  <Input
                    id="password"
                    placeholder="password"
                    type="password"
                    autoCapitalize="none"
                    autoComplete="password"
                    autoCorrect="off"
                    disabled={isLoading}
                  />
                </div>
                <Button disabled={isLoading}>
                  {isLoadingObject.spinningButton === "form" && (
                    <Loader2Icon className="mr-2 h-4 w-4 animate-spin" />
                  )}
                  <span>Registre com Email</span>
                </Button>
              </div>
            </form>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Ou continue com
                </span>
              </div>
            </div>

            <GoogleAuthBtn
              isLoadingObject={isLoadingObject}
              onStartGoogleAuth={() =>
                setIsLoadingObject({
                  isLoading: true,
                  spinningButton: "google",
                })
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}
