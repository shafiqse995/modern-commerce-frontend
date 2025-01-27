'use client';

import { useNavigate } from '@tanstack/react-router';
import { ShoppingCart, User } from 'lucide-react';
import { Badge } from '~/components/ui/badge';
import { Button } from '~/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '~/components/ui/dropdown-menu';
import { SearchBar } from './Search';

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="fixed z-10 w-full bg-white shadow-sm">
      <div className="mx-auto flex justify-end px-4 md:block">
        <div className="flex h-16 items-center justify-between">
          <div></div>
          <SearchBar />
          {/* Cart and User Menu */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              className="relative"
              onClick={() => {
                navigate({ to: '/cart' });
              }}
            >
              <ShoppingCart className="h-5 w-5" />
              <Badge className="absolute -right-1 -top-1" variant="destructive">
                3
              </Badge>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Orders</DropdownMenuItem>
                <DropdownMenuItem>Wishlist</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Log out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
