import prisma from "@/lib/prisma";
import { Game } from "@/types/games";

export async function getGames(): Promise<Game[]> {
  const games = await prisma.game.findMany({});

  return games;
}
