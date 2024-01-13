import prisma from "@/lib/prisma";
import { GameProtions } from "@/types/games";

export async function getHeroPromotions(): Promise<GameProtions[]> {
  const gamesWithDynamicAverageRating = await prisma.game.findMany({
    select: {
      id: true,
      slug: true,
      name: true,
      cover_img_url: true,
      price: true,
      discount_percentage: true,
      banner_img: true,
    },
    where: {
      discount_percentage: {
        gt: 0,
      },
    },
    orderBy: {
      discount_percentage: "desc",
    },
    take: 5,
  });

  return gamesWithDynamicAverageRating;
}
