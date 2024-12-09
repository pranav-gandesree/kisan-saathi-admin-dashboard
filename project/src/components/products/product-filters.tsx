import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Plus } from "lucide-react";

interface ProductFiltersProps {
  onSearch: (query: string) => void;
}

export function ProductFilters({ onSearch }: ProductFiltersProps) {
  return (
    <div className="flex items-center justify-between pb-4">
      <div className="flex w-full max-w-sm items-center space-x-2">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search products..."
            className="pl-8"
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>
      </div>
      <Button>
        <Plus className="mr-2 h-4 w-4" />
        Add New Product
      </Button>
    </div>
  );
}