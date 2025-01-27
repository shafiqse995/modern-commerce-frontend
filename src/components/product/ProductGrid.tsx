import { ProductCard } from './ProductCard';

const SAMPLE_PRODUCTS = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80',
    description:
      'Premium wireless headphones with noise cancellation and exceptional sound quality.',
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&q=80',
    description: 'Feature-rich smartwatch with health tracking and notifications.',
  },
  {
    id: 3,
    name: 'Smart Watch',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&q=80',
    description: 'Feature-rich smartwatch with health tracking and notifications.',
  },
  {
    id: 4,
    name: 'Smart Watch',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&q=80',
    description: 'Feature-rich smartwatch with health tracking and notifications.',
  },
  {
    id: 5,
    name: 'Smart Watch',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&q=80',
    description: 'Feature-rich smartwatch with health tracking and notifications.',
  },
  {
    id: 6,
    name: 'Smart Watch',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&q=80',
    description: 'Feature-rich smartwatch with health tracking and notifications.',
  },
  {
    id: 7,
    name: 'Smart Watch',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&q=80',
    description: 'Feature-rich smartwatch with health tracking and notifications.',
  },
  {
    id: 8,
    name: 'Smart Watch',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&q=80',
    description: 'Feature-rich smartwatch with health tracking and notifications.',
  },
  {
    id: 9,
    name: 'Smart Watch',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&q=80',
    description: 'Feature-rich smartwatch with health tracking and notifications.',
  },
];

export function ProductGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {SAMPLE_PRODUCTS.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
