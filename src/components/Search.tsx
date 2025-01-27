import { Search } from 'lucide-react';
import { useQueryState } from 'nuqs';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Input } from '~/components/ui/input';
import { cn } from '~/lib/utils';

export const SearchBar = ({ className }: { className?: string }) => {
  const [searchParam, setSearchParam] = useQueryState('search', {
    defaultValue: '',
    throttleMs: 500,
  });
  const [inputValue, setInputValue] = useState(searchParam);
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    setInputValue(searchParam);
  }, [searchParam]);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setInputValue(value);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        setSearchParam(value);
      }, 1000);
    },
    [setSearchParam],
  );

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div className={cn('mx-4 hidden max-w-md flex-1 items-center md:flex', className)}>
      <form
        className="w-full"
        onSubmit={(e) => {
          e.preventDefault();
          setSearchParam(inputValue);
        }}
      >
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
          <Input
            type="search"
            placeholder="Search products..."
            className="w-full py-2 pl-8 pr-4"
            value={inputValue}
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
