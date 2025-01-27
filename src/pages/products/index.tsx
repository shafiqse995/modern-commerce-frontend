import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/products/')({
  loader: () => fetchCategories(),
  component: ProductsPage,
});

import { SlidersHorizontal } from 'lucide-react';
import { ProductFilters } from '~/components/product/ProductFilters';
import { ProductGrid } from '~/components/product/ProductGrid';
import { Button } from '~/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '~/components/ui/sheet';
import { fetchCategories } from '~/hooks/use-categories';

export function ProductsPage() {
  const categories = Route.useLoaderData();
  return (
    <div className="mx-auto px-4 py-8">
      <div className="flex flex-col space-y-6">
        <div className="flex gap-6">
          <aside className="hidden w-[300px] flex-shrink-0 overflow-y-auto lg:block">
            <ProductFilters categories={categories} />
          </aside>
          <div className="flex flex-col gap-10">
            <h1 className="size-5 text-3xl font-medium">Products</h1>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="w-fit lg:hidden">
                  <SlidersHorizontal className="mr-2 h-4 w-4" />
                  Filters
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <ProductFilters categories={categories} />
              </SheetContent>
            </Sheet>
            <main className="bg flex-1">
              <ProductGrid />
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
