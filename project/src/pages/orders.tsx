import { useState } from "react";
import { OrderFilters } from "@/components/orders/order-filters";
import { OrdersTable } from "@/components/orders/orders-table";
import { Order, OrderFilterOptions } from "@/types/order";
import { Button } from "@/components/ui/button";
import { Download, Upload } from "lucide-react";

// Mock data
const mockOrders: Order[] = Array.from({ length: 10 }, (_, i) => ({
  id: `${i + 1}`,
  product: "Lorem ipsum",
  orderId: `#${25428 - i}`,
  date: "Nov 9th 2024",
  customerName: i % 2 === 0 ? "Bunny" : "Rahul",
  status: i % 2 === 0 ? "delivered" : "cancelled",
  amount: 200.00,
}));

export function OrdersPage() {
  const [selectedOrders, setSelectedOrders] = useState<string[]>([]);
  const [filters, setFilters] = useState<OrderFilterOptions>({
    dateRange: {
      from: new Date(2024, 10, 1),
      to: new Date(2024, 11, 31),
    },
  });

  const handleSelectOrder = (orderId: string) => {
    setSelectedOrders((prev) =>
      prev.includes(orderId)
        ? prev.filter((id) => id !== orderId)
        : [...prev, orderId]
    );
  };

  const handleSelectAllOrders = (selected: boolean) => {
    setSelectedOrders(selected ? mockOrders.map((order) => order.id) : []);
  };

  return (
    <div className="flex-1 space-y-4 p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Orders List</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Upload className="mr-2 h-4 w-4" />
            Import
          </Button>
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      <OrderFilters filters={filters} onFiltersChange={setFilters} />

      <div className="rounded-md border">
        <OrdersTable
          orders={mockOrders}
          selectedOrders={selectedOrders}
          onSelectOrder={handleSelectOrder}
          onSelectAllOrders={handleSelectAllOrders}
        />
      </div>
    </div>
  );
}