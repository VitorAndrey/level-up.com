import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

import { LevelUpLogoWhite } from "@/components/ui/level-up-logo-white";
import { authOptions } from "@/utils/auth";

type AuthLayoutProps = {
  children: React.ReactNode;
};

export default async function AuthLayout({ children }: AuthLayoutProps) {
  const session = await getServerSession(authOptions);

  if (session) {
    return redirect("/");
  }

  return (
    <main className="container relative grid h-screen flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
        <div className="absolute inset-0 bg-red-900" />
        <Link
          href={"/"}
          className="relative z-20 flex items-center gap-1 text-lg font-medium"
        >
          <ArrowLeftIcon />
          <LevelUpLogoWhite />
          <h2 className="text-lg font-semibold">Level Up</h2>
        </Link>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              modi et quam maiores laboriosam deserunt!
            </p>
            <footer className="text-sm">Vitor Andrey</footer>
          </blockquote>
        </div>
      </div>
      {children}
    </main>
  );
}
