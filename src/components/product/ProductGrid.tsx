import { useQueryState } from 'nuqs';
import { useProducts } from '~/hooks/use-products';
import { Route } from '~/pages/products';
import ProductsLoadingSkeleton from '../ProductsLoadingSkeleton';
import { ProductCard } from './ProductCard';

export function ProductGrid() {
  const searchParams = Route.useSearch();
  const [page] = useQueryState('page', { defaultValue: 1, parse: Number });
  const { data: products = [], isFetching } = useProducts(page, searchParams);

  if (isFetching) {
    return <ProductsLoadingSkeleton />;
  }

  if (products.length === 0) {
    return <>Nothing Found</>;
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
