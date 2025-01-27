import { Search } from 'lucide-react';
import { Input } from '~/components/ui/input';
import { cn } from '~/lib/utils';

export const SearchBar = ({ className }: { className?: string }) => {
  return (
    <div className={cn('mx-4 hidden max-w-md flex-1 items-center md:flex', className)}>
      <form className="w-full">
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
          <Input type="search" placeholder="Search products..." className="w-full py-2 pl-8 pr-4" />
        </div>
      </form>
    </div>
  );
};
