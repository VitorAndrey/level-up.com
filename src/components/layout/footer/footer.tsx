import React from "react";

import { ThemeToggle } from "@/components/ui/theme-toggle";

export function Footer() {
  return (
    <div className="hidden md:block">
      <ThemeToggle />
    </div>
  );
}
