import axios from "axios";

import { Comment } from "@/types/games";

export async function getComments(game_id: string): Promise<Comment[]> {
  const url = "https://level-up-com.vercel.app/api/get-products";

  const response = await axios.post(url, game_id);

  return response.data;
}
