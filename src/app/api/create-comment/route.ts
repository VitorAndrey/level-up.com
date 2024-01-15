import { NextResponse } from "next/server";

import prisma from "@/lib/prisma";

export async function POST(request: Request) {
  const comment = await request.json();

  await prisma.comment.create({
    data: comment,
  });

  return NextResponse.json({ status: 201 });
}
