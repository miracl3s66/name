import { Home, Search, ShoppingCart, User, Heart } from './icons';
import type { Page } from '../types';

interface BottomNavProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  cartCount: number;
}

export function BottomNav({ currentPage, onNavigate, cartCount }: BottomNavProps) {
  const navItems: { page: Page; icon: typeof Home }[] = [
    { page: 'home', icon: Home },
    { page: 'search', icon: Search },
    { page: 'cart', icon: ShoppingCart },
    { page: 'favorites', icon: Heart },
    { page: 'account', icon: User }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
      <div className="flex items-center justify-around px-2 py-3">
        {navItems.map(({ page, icon: Icon }) => (
          <button
            key={page}
            onClick={() => onNavigate(page)}
            className={`flex items-center justify-center p-3 rounded-lg transition-colors relative ${
              currentPage === page
                ? 'text-black'
                : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            <Icon className="w-6 h-6" />
            
            {page === 'cart' && cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        ))}
      </div>
    </nav>
  );
}