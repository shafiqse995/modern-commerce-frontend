import { useProducts } from '~/hooks/use-products';
import ProductsLoadingSkeleton from '../ProductsLoadingSkeleton';
import { ProductCard } from './ProductCard';

export function ProductGrid() {
  const { data: products = [], isFetching } = useProducts();

  if (isFetching) {
    return <ProductsLoadingSkeleton />;
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
