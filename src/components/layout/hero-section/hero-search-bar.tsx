import { SearchIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function HeroSearchBar() {
  return (
    <div className="flex items-center gap-1 py-6">
      <Button size="icon" className="rounded-full">
        <SearchIcon className="h-4 w-4" />
      </Button>
      <Input
        className="w-full max-w-56 rounded-full"
        placeholder="Pesquisar na loja"
      />
    </div>
  );
}
