"use client";

import { FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import { ProductsCard } from "./products-card";
import { Game, GameWithRating } from "@/types/games";

type ProductsCarrouselProps = {
  products: Game[] | GameWithRating[];
};

export function ProductsCarrousel({ products }: ProductsCarrouselProps) {
  return (
    <Swiper
      freeMode={true}
      grabCursor={true}
      modules={[FreeMode]}
      breakpoints={{
        0: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        380: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        580: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        780: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        980: {
          slidesPerView: 5,
          spaceBetween: 20,
        },
      }}
    >
      {products.map((product) => (
        <SwiperSlide key={product.id}>
          <ProductsCard product={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
