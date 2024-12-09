import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Order } from "@/types/order";
import { MoreHorizontal } from "lucide-react";

interface OrdersTableProps {
  orders: Order[];
  selectedOrders: string[];
  onSelectOrder: (orderId: string) => void;
  onSelectAllOrders: (selected: boolean) => void;
}

export function OrdersTable({
  orders,
  selectedOrders,
  onSelectOrder,
  onSelectAllOrders,
}: OrdersTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[50px]">
            <Checkbox
              checked={selectedOrders.length === orders.length}
              onCheckedChange={(checked) => onSelectAllOrders(!!checked)}
            />
          </TableHead>
          <TableHead>Product</TableHead>
          <TableHead>Order ID</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Customer Name</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Amount</TableHead>
          <TableHead className="w-[50px]"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((order) => (
          <TableRow key={order.id}>
            <TableCell>
              <Checkbox
                checked={selectedOrders.includes(order.id)}
                onCheckedChange={() => onSelectOrder(order.id)}
              />
            </TableCell>
            <TableCell>{order.product}</TableCell>
            <TableCell>{order.orderId}</TableCell>
            <TableCell>{order.date}</TableCell>
            <TableCell>{order.customerName}</TableCell>
            <TableCell>
              <Badge
                variant={
                  order.status === "delivered"
                    ? "default"
                    : order.status === "cancelled"
                    ? "destructive"
                    : "secondary"
                }
              >
                {order.status}
              </Badge>
            </TableCell>
            <TableCell className="text-right">₹{order.amount}</TableCell>
            <TableCell>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>View Details</DropdownMenuItem>
                  <DropdownMenuItem>Update Status</DropdownMenuItem>
                  <DropdownMenuItem className="text-destructive">
                    Cancel Order
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}