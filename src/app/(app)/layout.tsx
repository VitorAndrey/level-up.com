import { Footer } from "@/components/layout/footer/footer";
import { Header } from "@/components/layout/header/header";

type HomeLayoutProps = {
  children: React.ReactNode;
};

export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
