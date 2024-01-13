"use client";
import Slider, { Settings } from "react-slick";

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
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Slider {...sliderSettings}>
      {products.map((product) => (
        <ProductsCard key={product.id} product={product} />
      ))}
    </Slider>
  );
}
