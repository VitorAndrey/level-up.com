import { getGameBySlug } from "@/services/games/getGamesBySlug";

interface ParamsTypes {
  params: {
    slug: string;
  };
}

export default async function GamesProductPage({ params }: ParamsTypes) {
  const game = await getGameBySlug(params.slug);

  return (
    <div>
      <p>{JSON.stringify(game)}</p>
    </div>
  );
}
