import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/products/')({
  component: ProductsPage,
});

import { SlidersHorizontal } from 'lucide-react';
import { ProductFilters } from '~/components/product/ProductFilters';
import { ProductGrid } from '~/components/product/ProductGrid';
import { Button } from '~/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '~/components/ui/sheet';

export function ProductsPage() {
  return (
    <div className="mx-auto px-4 py-8">
      <div className="flex flex-col space-y-6">
        <div className="flex gap-6">
          <aside className="hidden w-[300px] flex-shrink-0 overflow-y-auto lg:block">
            <ProductFilters onFilterChange={() => {}} />
          </aside>
          <div className="flex flex-col gap-10">
            <div className="flex justify-between">
              <h1 className="size-5 text-3xl font-bold">Products</h1>
              <div className="flex items-center justify-between">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" className="lg:hidden">
                      <SlidersHorizontal className="mr-2 h-4 w-4" />
                      Filters
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                    <ProductFilters onFilterChange={() => {}} />
                  </SheetContent>
                </Sheet>
              </div>
            </div>
            <main className="bg flex-1">
              <ProductGrid />
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
