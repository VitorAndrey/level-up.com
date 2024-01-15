"use client";

import { useEffect, useState } from "react";

import { SearchIcon, XIcon } from "lucide-react";

import { HeaderSearchBarItem } from "./header-search-bar-item";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Game } from "@/types/games";

type HeaderSearchBarProps = {
  products: Game[];
};

export function HeaderSearchBar({ products }: HeaderSearchBarProps) {
  const [inputValue, setInputValue] = useState<string>("");
  const [filteredList, setFilteredList] = useState<Game[]>(products);
  const [open, setOpen] = useState(false);

  function handleUpdateFilteredList() {
    if (!inputValue) return setFilteredList(products);

    const filteredList = products.filter((product) =>
      product.name.toLowerCase().includes(inputValue.toLowerCase()),
    );

    setFilteredList(filteredList.slice(0, 5));
  }

  function handleCloseInput() {
    setOpen(false);
    setInputValue("");
  }

  useEffect(() => {
    handleUpdateFilteredList();
  }, [inputValue, products]);

  return (
    <div className="sticky top-0 z-50 mx-auto flex max-w-6xl items-center gap-1 bg-background px-2 py-6">
      <Dialog open={open}>
        <DialogTrigger onClick={() => setOpen(true)} asChild>
          <div className="relative flex items-center">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="z-50 w-full max-w-56 rounded-full pl-10"
              placeholder="Pesquisar na loja"
            />
            <SearchIcon className="absolute left-4" size={14} />
          </div>
        </DialogTrigger>
        <DialogContent className="h-full w-full overflow-hidden py-6 sm:max-h-96 sm:max-w-[525px]">
          <Button
            className="absolute right-6 top-6 rounded-3xl"
            variant="outline"
            size="icon"
            onClick={handleCloseInput}
          >
            <XIcon size={14} />
          </Button>

          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="z-50 w-full max-w-56 rounded-full"
            placeholder="Pesquisar na loja"
          />

          <div className="no-scrollbar flex h-full w-full flex-col overflow-hidden overflow-y-auto pb-8">
            {filteredList.map((product) => (
              <DialogClose
                className="my-2 text-left"
                key={product.id}
                onClick={handleCloseInput}
              >
                <HeaderSearchBarItem product={product} />
              </DialogClose>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
