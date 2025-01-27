import { useId } from 'react';
import { Skeleton } from '~/components/ui/skeleton';

export default function ProductsLoadingSkeleton() {
  const productsLoader = Array(10).fill(0);
  const id = useId();

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {productsLoader.map((_, idx) => (
        <div className="flex flex-col space-y-3" key={`${id}-${idx}`}>
          <Skeleton className="h-[296px] w-[296px] rounded-xl" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[296px]" />
            <Skeleton className="h-4 w-[296px]" />
          </div>
        </div>
      ))}
    </div>
  );
}
