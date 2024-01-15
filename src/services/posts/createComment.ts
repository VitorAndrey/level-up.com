import axios from "axios";

import { CreateComment } from "@/types/games";

export async function createComment(comment: CreateComment) {
  const url = "https://level-up-com.vercel.app/api/create-comment";

  const response = await axios.post(url, comment);

  return response.data;
}
