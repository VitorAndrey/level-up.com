import { Comment as PrismaComment, Game as PrismaGame } from "@prisma/client";

export type Game = PrismaGame;
export type Comment = PrismaComment;

export type CreateComment = {
  comment: string;
  game_id: string;
  user_email: string;
};

type OmittedProps = "category" | "banner_img";
type OmmitedPromotionsProps = "category" | "description";

type GameWithoutOmittedProps = Omit<Game, OmittedProps>;
export type GameProtions = Omit<Game, OmmitedPromotionsProps>;

export interface GameWithRating extends GameWithoutOmittedProps {
  average_rating: number;
}
