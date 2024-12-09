import { useState } from "react";
import { ProductCard } from "@/components/products/product-card";
import { CategoryList } from "@/components/products/category-list";
import { ProductFilters } from "@/components/products/product-filters";
import { Product, Category } from "@/types/product";

// Mock data
const mockProducts: Product[] = Array.from({ length: 12 }, (_, i) => ({
  id: `product-${i + 1}`,
  name: "Lorem Ipsum",
  price: 799.49,
  summary: "Lorem ipsum placeholder text covering text that normally goes here.",
  sales: 1299,
  remainingProducts: 1299,
}));

const mockCategories: Category[] = [
  { id: "1", name: "Lorem Ipsum", count: 24 },
  { id: "2", name: "Lorem Ipsum", count: 32 },
  { id: "3", name: "Lorem Ipsum", count: 18 },
  { id: "4", name: "Lorem Ipsum", count: 12 },
  { id: "5", name: "Lorem Ipsum", count: 8 },
  { id: "6", name: "Lorem Ipsum", count: 16 },
];

export function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = mockProducts.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || true; // Add category filtering logic
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="h-full flex">
      <aside className="w-64 border-r p-4 flex flex-col">
        <h2 className="font-semibold mb-4">Categories</h2>
        <CategoryList
          categories={mockCategories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
      </aside>
      <main className="flex-1 p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold mb-4">All Products</h1>
          <ProductFilters onSearch={setSearchQuery} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
}