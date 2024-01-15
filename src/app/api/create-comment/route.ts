import { NextResponse } from "next/server";

import prisma from "@/lib/prisma";

export async function POST(request: Request) {
  const data = await request.json();

  const { user_email, comment, game_id } = data;

  const user = await prisma.user.findFirst({
    where: user_email,
  });

  if (!user) return;

  const createComment = {
    user_id: user.id,
    comment,
    game_id,
  };

  await prisma.comment.create({
    data: createComment,
  });

  return NextResponse.json({ status: 201 });
}
