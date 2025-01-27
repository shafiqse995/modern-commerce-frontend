import { ArrowLeft, Minus, Plus, ShoppingCart, Star } from 'lucide-react';
import { useState } from 'react';

import { createFileRoute, Link } from '@tanstack/react-router';
import { Button } from '~/components/ui/button';
// import { Card, CardContent } from '~/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '~/components/ui/carousel';
// import { RadioGroup, RadioGroupItem } from '~/components/ui/radio-group';
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from '~/components/ui/select';
import { cn } from '~/lib/utils';

export const Route = createFileRoute('/products/$productId')({
  component: ProductDetail,
});

const product = {
  name: 'Classic Leather Jacket',
  price: 299.99,
  rating: 4.5,
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ab quidem ipsam? Et hic in aliquid minima eveniet culpa ullam accusantium, quae aliquam inventore fugiat, quis vitae quibusdam maxime aspernatur eius enim amet architecto beatae sit laboriosam officiis, ut modi? Maxime optio, porro dolores exercitationem necessitatibus molestiae harum non consequuntur.',
  colors: ['Black', 'Brown', 'Tan'],
  sizes: ['XS', 'S', 'M', 'L', 'XL'],
  images: [
    'https://placehold.co/1000x1000',
    'https://placehold.co/400x400',
    'https://placehold.co/400x400',
    'https://placehold.co/400x400',
  ],
};

export default function ProductDetail() {
  // const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="mx-auto flex w-[80%] flex-col gap-10  px-4 py-8">
      <Button className="w-fit" asChild>
        <Link to={'/products'}>
          <ArrowLeft color="white" />
        </Link>
      </Button>
      <div className="grid gap-8 md:grid-cols-2">
        {/* Product Image Gallery */}
        <Carousel className="mx-auto w-full max-w-xs md:max-w-md">
          <CarouselContent>
            {product.images.map((src, index) => (
              <CarouselItem key={index}>
                <img
                  src={src || '/placeholder.svg'}
                  alt={`${product.name} - View ${index + 1}`}
                  className="h-auto w-full rounded-lg object-cover"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        {/* Product Information */}
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-semibold">${product.price}</span>
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={cn(
                    'h-5 w-5',
                    i < Math.floor(product.rating)
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'text-gray-300',
                  )}
                />
              ))}
              <span className="ml-2 text-sm text-gray-600">({product.rating})</span>
            </div>
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
          <div>
            <p>{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
