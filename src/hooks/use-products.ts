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

const fetchAllProducts = async (queryParameter: QueryParams) => {
  const { search = '', min_price = '', max_price = '', category = '' } = queryParameter;
  const response = await http.get(
    `/products?search=${search}&min_price=${min_price}&max_price=${max_price}&category=${category}`,
  );
  const parsedResponse = await ResponseSchema.parseAsync(response.data);
  return parsedResponse;
};

const QueryParams = z.object({
  search: z.string().optional(),
  min_price: z.number().optional(),
  max_price: z.number().optional(),
  category: z.string().optional(),
});

export type QueryParams = z.infer<typeof QueryParams>;

export function useProducts(queryParameter: QueryParams) {
  return useQuery({
    queryKey: ['products', queryParameter],
    queryFn: () => fetchAllProducts(queryParameter),
    select: ({ results }) => results,
    staleTime: Infinity,
    refetchOnMount: false,
  });
}
