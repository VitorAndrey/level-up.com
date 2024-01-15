import { NextResponse } from "next/server";

import prisma from "@/lib/prisma";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export async function POST(request: Request) {
  const { game_id } = await request.json();

  const comments = await prisma.comment.findMany({
    where: {
      game_id,
    },
  });

  return NextResponse.json(comments, {
    headers: corsHeaders,
  });
}
