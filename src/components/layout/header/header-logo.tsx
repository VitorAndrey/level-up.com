"use client";

import { useTheme } from "next-themes";

import { LevelUpLogo } from "@/components/ui/level-up-logo";
import { LevelUpLogoWhite } from "@/components/ui/level-up-logo-white";

export default function HeaderLogo() {
  const { theme } = useTheme();

  return <>{theme === "light" ? <LevelUpLogo /> : <LevelUpLogoWhite />}</>;
}
