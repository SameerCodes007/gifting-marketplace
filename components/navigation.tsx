"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Store, ShoppingCart, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="border-b">
      <div className="flex h-16 items-center px-4 container mx-auto">
        <Link href="/" className="font-semibold text-lg flex items-center gap-2">
          <Store className="h-6 w-6" />
          Marketplace
        </Link>
        
        <div className="ml-auto flex items-center space-x-4">
          <Link href="/products">
            <Button variant="ghost">Products</Button>
          </Link>
          <Link href="/vendors">
            <Button variant="ghost">Vendors</Button>
          </Link>
          <Link href="/cart">
            <Button size="icon" variant="ghost">
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </Link>
          <Link href="/account">
            <Button size="icon" variant="ghost">
              <User className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}