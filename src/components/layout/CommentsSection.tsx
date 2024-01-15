"use client";

import React, { FormEvent, useEffect, useState } from "react";

import { LoaderIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { createComment } from "@/services/posts/createComment";
import { getComments } from "@/services/posts/getComments";
import { Comment, CreateComment } from "@/types/games";

export default function CommentsSection({ gameId }: { gameId: string }) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [commentInput, setCommentInput] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const navigation = useRouter();

  const { data: session } = useSession();

  async function handleCrateComment(e: FormEvent) {
    e.preventDefault();

    if (!session || !session.user) return navigation.push("/register");

    setIsLoading(true);

    const comment: CreateComment = {
      comment: commentInput,
      game_id: gameId,
      user_email: session?.user.email || "",
    };

    await createComment(comment);

    setIsLoading(false);
  }

  async function handleGetComments() {
    const comments = await getComments(gameId);
    setComments(comments);
  }

  useEffect(() => {
    handleGetComments();
  }, []);

  return (
    <section className="py-8">
      <form onSubmit={handleCrateComment} className="flex gap-2">
        <Input
          value={commentInput}
          onChange={(e) => setCommentInput(e.target.value)}
          type="text"
          required
          placeholder="Deixe seu commentario"
          className="w-full max-w-80 rounded-lg border px-4"
        />
        <Button type="submit" variant="outline">
          {isLoading ? (
            <LoaderIcon className="h-4 w-4 animate-spin" />
          ) : (
            "Enviar"
          )}
        </Button>
      </form>

      <div>
        {comments.map((comment) => (
          <div key={comment.id}>
            <p>{comment.comment}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
