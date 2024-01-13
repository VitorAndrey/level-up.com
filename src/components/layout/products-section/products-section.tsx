import { ProductsSlider } from "./products-slider";
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
        <h3 className="mb-4 pl-2 font-semibold">Jogos de FPS</h3>
        <ProductsSlider products={fpsGames} />
      </div>

      <div>
        <h3 className="mb-4 pl-2 font-semibold">Jogos de Plataforma</h3>
        <ProductsSlider products={platformGames} />
      </div>

      <div>
        <h3 className="mb-4 pl-2 font-semibold">Jogos de Mundo Aberto</h3>
        <ProductsSlider products={sandboxGames} />
      </div>
    </section>
  );
}
