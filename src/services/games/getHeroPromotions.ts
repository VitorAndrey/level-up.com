import prisma from "@/lib/prisma";
import { Game } from "@/types/games";

export async function getHeroPromotions(): Promise<Game[]> {
  const gamesWithDynamicAverageRating = await prisma.game.findMany({
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
