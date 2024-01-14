"use client";

import { useEffect, useState } from "react";

import { SearchIcon } from "lucide-react";

import { HeaderSearchBarItem } from "./header-search-bar-item";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Game } from "@/types/games";

type HeaderSearchBarProps = {
  products: Game[];
};

export function HeaderSearchBar({ products }: HeaderSearchBarProps) {
  const [inputValue, setInputValue] = useState<string>("");
  const [filteredList, setFilteredList] = useState<Game[]>(products);

  function handleUpdateFilteredList() {
    if (!inputValue) return setFilteredList(products);

    const filteredList = products.filter((product) =>
      product.name.toLowerCase().includes(inputValue.toLowerCase()),
    );

    setFilteredList(filteredList.slice(0, 5));
  }

  useEffect(() => {
    handleUpdateFilteredList();
  }, [inputValue, products]); // Adicionando 'inputValue' e 'products' como dependências

  return (
    <div className="sticky top-0 z-50 mx-auto flex max-w-6xl items-center gap-1 bg-background px-2 py-6">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="relative flex items-center">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="z-50 w-full max-w-56 rounded-full pl-10"
              placeholder="Pesquisar na loja"
            />
            <SearchIcon className="absolute left-4" size={14} />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="h-64 w-96" align="start" forceMount>
          {filteredList.map((product) => (
            <HeaderSearchBarItem key={product.id} product={product} />
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
