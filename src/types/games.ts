import { Game as PrismaGame } from "@prisma/client";

export type Game = PrismaGame;

type OmittedProps = "category" | "banner_img";
type OmmitedPromotionsProps = "category" | "description";

type GameWithoutOmittedProps = Omit<Game, OmittedProps>;
export type GameProtions = Omit<Game, OmmitedPromotionsProps>;

export interface GameWithRating extends GameWithoutOmittedProps {
  average_rating: number;
}
