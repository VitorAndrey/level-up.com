import { ProductsCarrousel } from "./products-carrousel";
import { getFpsGames } from "@/services/games/getFpsGames";
import { getPlatformGames } from "@/services/games/getPlatformGames";
import { getSandboxGames } from "@/services/games/getSandboxGames";

export async function ProductsSection() {
  const [fpsGames, platformGames, sandboxGames] = await Promise.all([
    getFpsGames(),
    getPlatformGames(),
    getSandboxGames(),
  ]);

  return (
    <section className="flex flex-col gap-16 py-12 pb-12">
      <div>
        <h3 className="mb-4 pl-2 text-lg font-semibold">Jogos de FPS</h3>
        <ProductsCarrousel products={fpsGames} />
      </div>

      {/* <div className="flex h-[250px] gap-8">
        <div className="h-full flex-1 rounded-xl border"></div>
        <div className="h-full flex-1 rounded-xl border"></div>
      </div> */}

      <div>
        <h3 className="mb-4 pl-2 text-lg font-semibold">Jogos de Plataforma</h3>
        <ProductsCarrousel products={platformGames} />
      </div>

      {/* <div className="flex h-[250px] gap-2">
        <div className="h-full flex-1 rounded-xl border"></div>
        <div className="h-full flex-1 rounded-xl border"></div>
        <div className="h-full flex-1 rounded-xl border"></div>
      </div> */}

      <div>
        <h3 className="mb-4 pl-2 text-lg font-semibold">
          Jogos de Mundo Aberto
        </h3>
        <ProductsCarrousel products={sandboxGames} />
      </div>
    </section>
  );
}
