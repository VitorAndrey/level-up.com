import prisma from "@/lib/prisma";
import { Game } from "@/types/games";

export async function getPromotions(): Promise<Game[]> {
  const gamesWithDynamicAverageRating = await prisma.game.findMany({
    where: {
      discount_percentage: {
        gt: 0,
      },
    },
    orderBy: {
      discount_percentage: "asc",
    },
  });

  return gamesWithDynamicAverageRating;
}
