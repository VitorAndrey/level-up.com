import { ArrowLeftIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

import image from "../../../public/login.png.jpg";
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
        <Image
          priority
          alt="image"
          src={image}
          height={0}
          width={0}
          sizes="100vw"
          className="absolute inset-0 h-full w-full bg-[url('/login.png.jpg')] object-cover object-center brightness-50"
        />
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
              Tenha acesso a jogos incríveis e eleve sua experiência gamer para
              o próximo level.
            </p>
          </blockquote>
        </div>
      </div>
      {children}
    </main>
  );
}
