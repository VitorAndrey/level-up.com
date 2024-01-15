import { NextResponse } from "next/server";

import prisma from "@/lib/prisma";

export async function POST(request: Request) {
  const { game_id } = await request.json();

  const comments = await prisma.comment.findMany({
    where: {
      game_id,
    },
  });

  return NextResponse.json(comments);
}
