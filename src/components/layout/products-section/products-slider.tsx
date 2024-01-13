"use client";
import { Suspense } from "react";
import Slider, { Settings } from "react-slick";

import ProductsCardLoading from "./loading/products-card-loading";
import { ProductsCard } from "./products-card";
import { GameWithRating } from "@/types/games";

type ProductsSliderProps = {
  products: GameWithRating[];
};

export function ProductsSlider({ products }: ProductsSliderProps) {
  const sliderSettings: Settings = {
    dots: false,
    infinite: false,
    slidesToShow: 5,
    draggable: false,
    slidesToScroll: 1,
  };

  return (
    <Slider {...sliderSettings}>
      {products.map((product) => (
        <Suspense key={product.id} fallback={<ProductsCardLoading />}>
          <ProductsCard product={product} />
        </Suspense>
      ))}
    </Slider>
  );
}
