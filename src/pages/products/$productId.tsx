import { Minus, Plus, ShoppingCart } from 'lucide-react';

import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import ProductLoadingSkeleton from '~/components/ProductLoadingSkeleton';
import { Button } from '~/components/ui/button';
import { fetchProduct } from '~/hooks/use-product';

export const Route = createFileRoute('/products/$productId')({
  component: ProductDetail,
  async loader(ctx) {
    return fetchProduct(Number(ctx.params.productId));
  },
  pendingComponent: ProductLoadingSkeleton,
  errorComponent: () => <p>Error</p>,
  preload: true,
  staleTime: Infinity,
});

export default function ProductDetail() {
  const product = Route.useLoaderData();
  const [quantity, setQuantity] = useState(0);

  return (
    <div className="mx-auto flex w-full flex-col gap-10 py-8 xl:w-[60%]">
      <div className="mt-0 grid gap-8 sm:mt-5 md:grid-cols-2">
        <img
          src={product.image}
          alt={product.title}
          className="size-[350px] rounded-lg md:h-[350px] md:w-[713px] lg:size-[470px] xl:size-[400px]"
        />

        {/* Product Information */}
        <div className="flex flex-col items-center gap-4 sm:items-start">
          <h1 className="text-3xl font-bold">{product?.title}</h1>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-semibold">${product?.price}</span>
          </div>

          {/* Quantity Selection */}
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
            >
              <Minus className="h-4 w-4" />
            </Button>
            <span className="text-xl font-semibold">{quantity}</span>
            <Button variant="outline" size="icon" onClick={() => setQuantity(quantity + 1)}>
              <Plus className="h-4 w-4" />
            </Button>
          </div>

          {/* Add to Cart Button */}
          <Button className="mt-4 w-full">
            <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
          </Button>
        </div>
      </div>
      <div className="flex w-full flex-col gap-y-3">
        <h1 className="text-2xl font-bold text-primary">Product Description</h1>
        <p className="text-md">{product?.description}</p>
      </div>
    </div>
  );
}
