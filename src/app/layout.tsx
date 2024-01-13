import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "@/styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AppProvider from "@/components/providers/app-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Level up",
  description: "Compre os mais incriveis jogos eletrônicos.",
  icons: {
    icon: "../../public/level-up-logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
