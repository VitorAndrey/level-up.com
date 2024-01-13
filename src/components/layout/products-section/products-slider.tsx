import { ProductsCard } from "./products-card";
import { GameWithRating } from "@/types/games";

type ProductsSliderProps = {
  products: GameWithRating[];
};

export function ProductsSlider({ products }: ProductsSliderProps) {
  return (
    <div className="flex">
      {products.map((product) => (
        <ProductsCard key={product.id} product={product} />
      ))}
    </div>
  );
}
