import { useQuery } from '@tanstack/react-query';
import { z } from 'zod';
import { http } from '~/lib/http';

export const ProductCategory = z.object({
  id: z.number(),
  title: z.string(),
});

export type ProductCategory = z.infer<typeof ProductCategory>;

export const Product = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  price: z.coerce.number(),
  category: ProductCategory,
  created_at: z.string().datetime(),
  updated_at: z.string().datetime(),
  image: z.string().url().default('https://placehold.co/5000x5000'),
});

export type Product = z.infer<typeof Product>;

const ResponseSchema = z.object({
  count: z.number(),
  next: z.string().nullable(),
  previous: z.string().nullable(),
  results: z.array(Product),
});

const fetchAllProducts = async () => {
  const response = await http.get('/products');
  const parsedResponse = await ResponseSchema.parseAsync(response.data);
  return parsedResponse;
};

export function useProducts() {
  return useQuery({
    queryKey: ['products'],
    queryFn: fetchAllProducts,
    select: ({ results }) => results,
    refetchOnMount: false,
  });
}
