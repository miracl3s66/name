import { Heart } from './icons';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
  isFavorite: boolean;
  onToggleFavorite: (productId: string) => void;
  onClick: () => void;
}

export function ProductCard({ product, isFavorite, onToggleFavorite, onClick }: ProductCardProps) {
  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onToggleFavorite(product.id);
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative aspect-[3/4] bg-gray-100" onClick={onClick}>
        {/* Image placeholder removed */}
        <button
          onClick={handleFavoriteClick}
          className="absolute top-2 right-2 p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
        >
          <Heart
            className={`w-5 h-5 ${isFavorite ? 'text-red-500' : 'text-gray-400'}`}
            filled={isFavorite}
          />
        </button>
      </div>
      <div className="p-3" onClick={onClick}>
        <p className="text-xs text-gray-500 mb-1">{product.brand}</p>
        <h3 className="text-sm mb-1 line-clamp-2 cursor-pointer">{product.name}</h3>
        <p className="text-sm">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
}