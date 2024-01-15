import Image from "next/image";
import Link from "next/link";

import { Game } from "@/types/games";

type HeaderSearchBarItemProps = {
  product: Game;
};
export function HeaderSearchBarItem({ product }: HeaderSearchBarItemProps) {
  return (
    <Link
      className="flex items-center gap-2 rounded-lg border p-2"
      href={`/games/${product.slug}`}
    >
      <Image
        src={product.cover_img_url}
        alt={product.name}
        height={20}
        width={25}
      />
      <p>{product.name}</p>
    </Link>
  );
}
