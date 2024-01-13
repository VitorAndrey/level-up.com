import { NextAuthProvider } from "./next-auth-provider";
import { ThemeProvider } from "./theme-provider";
import { ShoppingCartContextProvider } from "@/contexts/ShoppingCartContext";

type AppProviderProps = {
  children: React.ReactNode;
};

export default function AppProvider({ children }: AppProviderProps) {
  return (
    <ShoppingCartContextProvider>
      <NextAuthProvider>
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
        </ThemeProvider>
      </NextAuthProvider>
    </ShoppingCartContextProvider>
  );
}
