import { Skeleton } from "@/components/ui/skeleton";

export default function ProductsCardLoading() {
  return (
    <div>
      <Skeleton className="h-[270px] w-[200px]" />

      <div className="p-2">
        <Skeleton className="w-[200px]" />
        <Skeleton className="w-[200px]" />
      </div>
    </div>
  );
}
