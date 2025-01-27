import { useProducts } from '~/hooks/use-products';
import { Route } from '../../pages/products/index';
import ProductsLoadingSkeleton from '../ProductsLoadingSkeleton';
import { ProductCard } from './ProductCard';

export function ProductGrid() {
  const searchParams = Route.useSearch();
  const { data: products = [], isFetching } = useProducts(searchParams);

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
