import { useQueryState } from 'nuqs';
import { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '~/components/ui/accordion';
import { Button } from '~/components/ui/button';
import { Checkbox } from '~/components/ui/checkbox';
import { Slider } from '~/components/ui/slider';
import { ProductCategory } from '~/hooks/use-products';
import { SearchBar } from '../Search';

export function ProductFilters({ categories }: { categories: Array<ProductCategory> }) {
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [localCategory, setLocalCategory] = useState<number[]>([]);
  const [, setMinPrice] = useQueryState('min_price', { defaultValue: '' });
  const [, setMaxPrice] = useQueryState('max_price', { defaultValue: '' });
  const [, setCategory] = useQueryState('category', { defaultValue: '' });
  const handleCheckboxChange = (category: number) => {
    setLocalCategory((prevCategories) =>
      prevCategories.includes(category)
        ? prevCategories.filter((item) => item !== category)
        : [...prevCategories, category],
    );
  };

  return (
    <div className="fixed bottom-0 left-0 top-20 w-72 overflow-y-auto bg-white p-4 sm:left-6 sm:w-80">
      <SearchBar className="mx-0 mb-10 flex w-full md:hidden" />
      <h2 className="mb-4 font-semibold">Filters</h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="price">
          <AccordionTrigger>Price Range</AccordionTrigger>
          <AccordionContent>
            <div className="px-2">
              <Slider
                defaultValue={[0, 1000]}
                max={1000}
                step={1}
                value={priceRange}
                onValueChange={setPriceRange}
                className="my-4"
              />
              <div className="flex justify-between text-sm">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="categories">
          <AccordionTrigger>Categories</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {categories.map((category: ProductCategory) => (
                <div key={category.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={category.title}
                    checked={localCategory.includes(category.id)}
                    onCheckedChange={() => handleCheckboxChange(category.id)}
                  />
                  <label
                    htmlFor={category.title}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {category.title}
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Button
        className="mt-6 w-full"
        onClick={() => {
          setMinPrice(priceRange[0].toString());
          setMaxPrice(priceRange[1].toString());
          const categories = localCategory.join(',');
          setCategory(categories);
        }}
      >
        Apply Filters
      </Button>
    </div>
  );
}
