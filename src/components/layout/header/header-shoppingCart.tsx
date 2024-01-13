import { ShoppingCartIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function HeaderShoppingCart() {
  return (
    <Sheet>
      <SheetTrigger asChild className="-mt-1">
        <Button variant="ghost">
          <ShoppingCartIcon className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent></SheetContent>
    </Sheet>
  );
}
