import prisma from "@/lib/prisma";
import { GameWithRating } from "@/types/games";

export async function getFpsGames(): Promise<GameWithRating[]> {
  const games = await prisma.game.findMany({
    where: {
      category: "fps",
    },
    include: {
      ratings: true,
    },
  });

  const gamesWithRating = games.map((game) => {
    const {
      id,
      name,
      price,
      slug,
      cover_img_url,
      description,
      discount_percentage,
      ratings,
    } = game;

    const totalRating = ratings.reduce((sum, rating) => sum + rating.rating, 0);
    const averageRating = ratings.length > 0 ? totalRating / ratings.length : 0;

    return {
      id,
      name,
      slug,
      price,
      discount_percentage,
      cover_img_url,
      description,
      average_rating: averageRating,
    };
  });

  return gamesWithRating;
}
