import { useNavigate } from '@tanstack/react-router';
import { ShoppingCart } from 'lucide-react';
import { Badge } from '~/components/ui/badge';
import { Button } from '~/components/ui/button';
import { cartStore } from '~/store/cart-store';
import { SearchBar } from './Search';

const Navbar = () => {
  const navigate = useNavigate();
  const { totalProducts } = cartStore();

  return (
    <nav className="fixed z-10 w-full bg-white shadow-sm">
      <div className="mx-auto flex justify-end px-4 md:block">
        <div className="flex h-16 items-center justify-between">
          <div></div>
          <SearchBar />
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              className="relative"
              onClick={() => navigate({ to: '/cart' })}
            >
              <ShoppingCart className="h-5 w-5" />
              {totalProducts > 0 && (
                <Badge className="absolute -right-1 -top-1" variant="destructive">
                  {totalProducts}
                </Badge>
              )}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
