import { Game } from "@/types/games";

type HeaderSearchBarItemProps = {
  product: Game;
};
export function HeaderSearchBarItem({ product }: HeaderSearchBarItemProps) {
  return <div>{product.name}</div>;
}
