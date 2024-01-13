import prisma from "@/lib/prisma";
import { Game } from "@/types/games";

export async function getGameBySlug(slug: string): Promise<Game | null> {
  const game = prisma.game.findFirst({
    where: {
      slug,
    },
  });

  return game;
}
