import prisma from "@/lib/prisma";
import { Game } from "@/types/games";

export async function getGameById(id: string): Promise<Game | null> {
  const game = prisma.game.findFirst({
    where: {
      id,
    },
  });

  return game;
}
