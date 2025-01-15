// import { Button } from "@/components/ui/button";
// import { ScrollArea } from "@/components/ui/scroll-area";
// import { cn } from "@/lib/utils";
// import {
//   LayoutDashboard,
//   Package,
//   ClipboardList,
//   Tags,
//   LogOut,
// } from "lucide-react";
// import { Link, useLocation } from "react-router-dom";
// import logo from "../../assets/logo.png"

// const sidebarItems = [
//   {
//     title: "Dashboard",
//     icon: LayoutDashboard,
//     href: "/dashboard",
//   },
//   {
//     title: "All Products",
//     icon: Package,
//     href: "/products",
//   },
//   {
//     title: "Order List",
//     icon: ClipboardList,
//     href: "/orders",
//   },
//   {
//     title: "Categories",
//     icon: Tags,
//     href: "/categories",
//   },

// ];

// export function Sidebar() {
//   const location = useLocation();

//   return (
//     <div className="flex h-screen flex-col border-r">
//       <div className="p-2">
//         <Link to="/" className="flex items-center gap-2 font-semibold">
//         <img src={logo} alt="logo" className="max-w-[75%]"/>
//         </Link>
//       </div>
//       <ScrollArea className="flex-1 px-3">
//         <div className="space-y-1">
//           {sidebarItems.map((item) => (
//             <Button
//               key={item.href}
//               variant={location.pathname === item.href ? "default" : "ghost"}
//               className={cn("w-full justify-start gap-2", {
//                 "bg-[#007537] text-primary-foreground":
//                   location.pathname === item.href,
//               })}
//               asChild
//             >
//               <Link to={item.href}>
//                 <item.icon className="h-4 w-4" />
//                 {item.title}
//               </Link>
//             </Button>
//           ))}
//         </div>
//       </ScrollArea>
//       <div className="p-4 border-t">
//         <Button variant="ghost" className="w-full justify-start gap-2">
//           <LogOut className="h-4 w-4" />
//           Logout
//         </Button>
//       </div>
//     </div>
//   );
// }

























import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Package,
  ClipboardList,
  Tags,
  LogOut,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/logo.png";
import { Category } from "@/types/product";

const sidebarItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
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
];

const mockCategories: Category[] = [
  { id: "1", name: "Lorem Ipsum", count: 24 },
  { id: "2", name: "Lorem Ipsum", count: 32 },
  { id: "3", name: "Lorem Ipsum", count: 18 },
  { id: "4", name: "Lorem Ipsum", count: 12 },
  { id: "5", name: "Lorem Ipsum", count: 8 },
  { id: "6", name: "Lorem Ipsum", count: 16 },
];


export function Sidebar() {
  const location = useLocation();
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  return (
    <div className="flex h-screen flex-col border-r">
      <div className="p-2">
        <Link to="/" className="flex items-center gap-2 font-semibold">
          <img src={logo} alt="logo" className="max-w-[75%]" />
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

          {/* Collapsible Categories */}
          <div>
            <Button
              variant="ghost"
              className="w-full justify-between items-center gap-2"
              onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
            >
              <div className="flex items-center gap-2">
                <Tags className="h-4 w-4" />
                Categories
              </div>
              {isCategoriesOpen ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </Button>
            {isCategoriesOpen && (
              <div className="mt-2 space-y-1 pl-6">
                {mockCategories.map((category) => (
                  <Button
                  key={category.id}
                  // variant={selectedCategory === category.id ? "default" : "ghost"}
                  className="w-full justify-start bg-white text-black"
                  // onClick={() => onSelectCategory(category.id)}
                >
                  <span>{category.name}</span>
                  <span className="ml-auto text-muted-foreground">
                    {category.count}
                  </span>
                </Button>
                ))}
              </div>
            )}
          </div>
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
