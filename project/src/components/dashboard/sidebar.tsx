import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Package,
  ClipboardList,
  Tags,
  LogOut,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png"

const sidebarItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/",
  },
  {
    title: "All Products",
    icon: Package,
    href: "/products",
  },
  {
    title: "Order List",
    icon: ClipboardList,
    href: "/orders",
  },
  {
    title: "Categories",
    icon: Tags,
    href: "/categories",
  },

];

export function Sidebar() {
  const location = useLocation();

  return (
    <div className="flex h-screen flex-col border-r">
      <div className="p-2">
        <Link to="/" className="flex items-center gap-2 font-semibold">
        <img src={logo} alt="logo" />
        </Link>
      </div>
      <ScrollArea className="flex-1 px-3">
        <div className="space-y-1">
          {sidebarItems.map((item) => (
            <Button
              key={item.href}
              variant={location.pathname === item.href ? "default" : "ghost"}
              className={cn("w-full justify-start gap-2", {
                "bg-[#007537] text-primary-foreground":
                  location.pathname === item.href,
              })}
              asChild
            >
              <Link to={item.href}>
                <item.icon className="h-4 w-4" />
                {item.title}
              </Link>
            </Button>
          ))}
        </div>
      </ScrollArea>
      <div className="p-4 border-t">
        <Button variant="ghost" className="w-full justify-start gap-2">
          <LogOut className="h-4 w-4" />
          Logout
        </Button>
      </div>
    </div>
  );
}