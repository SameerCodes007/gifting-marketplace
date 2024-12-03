import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, ShoppingBag, Store, Truck } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 px-4 text-center bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Your One-Stop Multi-Vendor Marketplace
          </h1>
          <p className="mt-4 text-muted-foreground text-lg">
            Discover unique products from verified vendors, all in one place.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link href="/products">
              <Button size="lg" className="gap-2">
                Start Shopping <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/vendors/register">
              <Button size="lg" variant="outline" className="gap-2">
                Become a Vendor <Store className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-card">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6">
              <Store className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Browse Vendors</h3>
              <p className="text-muted-foreground">
                Explore our curated selection of trusted vendors and their unique products
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <ShoppingBag className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Shop Products</h3>
              <p className="text-muted-foreground">
                Find the perfect items from our vast collection of quality products
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <Truck className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-muted-foreground">
                Get your orders delivered quickly and securely to your doorstep
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}