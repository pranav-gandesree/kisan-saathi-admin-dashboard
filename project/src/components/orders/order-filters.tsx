import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { OrderFilterOptions } from "@/types/order";
import { CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker";
import { format } from "date-fns";

interface OrderFiltersProps {
  filters: OrderFilterOptions;
  onFiltersChange: (filters: OrderFilterOptions) => void;
}

export function OrderFilters({ filters, onFiltersChange }: OrderFiltersProps) {
  const dateRange: DateRange = {
    from: filters.dateRange.from,
    to: filters.dateRange.to,
  };

  return (
    <div className="flex items-center gap-4 mb-6">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className="w-[300px] justify-start">
            <CalendarIcon className="mr-2 h-4 w-4" />
            {dateRange?.from ? (
              dateRange.to ? (
                <>
                  {format(dateRange.from, "LLL dd, y")} -{" "}
                  {format(dateRange.to, "LLL dd, y")}
                </>
              ) : (
                format(dateRange.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date range</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={dateRange?.from}
            selected={dateRange}
            onSelect={(range) => {
              if (range?.from && range?.to) {
                onFiltersChange({
                  ...filters,
                  dateRange: { from: range.from, to: range.to },
                });
              }
            }}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>

      <Select
        value={filters.status}
        onValueChange={(value: any) =>
          onFiltersChange({ ...filters, status: value })
        }
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Filter by status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="delivered">Delivered</SelectItem>
          <SelectItem value="cancelled">Cancelled</SelectItem>
          <SelectItem value="pending">Pending</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}