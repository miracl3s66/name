import { Heart } from './icons';
import { ProductCard } from './ProductCard';
import { mockProducts } from '../data/products';
import { translations, type Language } from '../utils/translations';
import type { Product } from '../types';

interface FavoritesPageProps {
  favorites: string[];
  onToggleFavorite: (productId: string) => void;
  onProductClick: (product: Product) => void;
  language: Language;
}

export function FavoritesPage({ favorites, onToggleFavorite, onProductClick, language }: FavoritesPageProps) {
  const t = translations[language];
  const favoriteProducts = mockProducts.filter(p => favorites.includes(p.id));

  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-r from-pink-500 to-red-500 text-white px-6 py-8">
        <div className="flex items-center gap-3 mb-2">
          <Heart className="w-8 h-8" filled />
          <h1 className="text-3xl">{t.myFavorites}</h1>
        </div>
        <p className="text-pink-100">Your curated collection</p>
      </div>

      <div className="px-6 py-6">
        {favoriteProducts.length > 0 ? (
          <>
            <p className="text-gray-600 mb-4">{favoriteProducts.length} {t.items} saved</p>
            <div className="grid grid-cols-2 gap-4">
              {favoriteProducts.map(product => (
                <ProductCard
                  key={product.id}
                  product={product}
                  isFavorite={true}
                  onToggleFavorite={onToggleFavorite}
                  onClick={() => onProductClick(product)}
                />
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-12">
            <Heart className="w-16 h-16 mx-auto mb-4 text-gray-300" />
            <h3 className="text-xl mb-2">{t.favoritesEmpty}</h3>
            <p className="text-gray-600 mb-6">
              {t.exploreProducts}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}