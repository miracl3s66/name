import { useState } from 'react';
import { X, Heart, Check } from './icons';
import { translations, type Language } from '../utils/translations';
import type { Product } from '../types';

interface ProductDetailModalProps {
  product: Product;
  onClose: () => void;
  isFavorite: boolean;
  onToggleFavorite: (productId: string) => void;
  onAddToCart: (product: Product, size: string, color: string) => void;
  language: Language;
}

export function ProductDetailModal({
  product,
  onClose,
  isFavorite,
  onToggleFavorite,
  onAddToCart,
  language
}: ProductDetailModalProps) {
  const t = translations[language];
  
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) return;
    
    onAddToCart(product, selectedSize, selectedColor);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 1500);
  };

  const canAddToCart = selectedSize && selectedColor;

  return (
    <div
      className="fixed inset-0 bg-black/50 z-50 flex items-end sm:items-center justify-center"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto sm:rounded-t-2xl rounded-b-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between">
          <h2>{t.details}</h2>
          <div className="flex items-center gap-2">
            <button
              onClick={() => onToggleFavorite(product.id)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Heart
                className={`w-5 h-5 ${isFavorite ? 'text-red-500' : 'text-gray-400'}`}
                filled={isFavorite}
              />
            </button>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* Product Info */}
          <div>
            <p className="text-sm text-gray-500 mb-1">{product.brand}</p>
            <h2 className="text-2xl mb-2">{product.name}</h2>
            <p className="text-2xl mb-4">${product.price.toFixed(2)}</p>
            <p className="text-gray-600">{product.description}</p>
          </div>

          {/* Size Selection */}
          <div>
            <label className="block mb-3">{t.selectSize} *</label>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map(size => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border rounded-lg transition-colors ${
                    selectedSize === size
                      ? 'bg-black text-white border-black'
                      : 'border-gray-300 hover:border-black'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Color Selection */}
          <div>
            <label className="block mb-3">{t.selectColor} *</label>
            <div className="flex flex-wrap gap-2">
              {product.colors.map(color => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`px-4 py-2 border rounded-lg transition-colors ${
                    selectedColor === color
                      ? 'bg-black text-white border-black'
                      : 'border-gray-300 hover:border-black'
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Favorites First Message */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm text-blue-800">
              💡 Tip: {t.mustBeInFavorites}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button
              onClick={handleAddToCart}
              disabled={!canAddToCart}
              className={`w-full py-3 rounded-lg transition-all flex items-center justify-center gap-2 ${
                !canAddToCart
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : added
                  ? 'bg-green-600 text-white'
                  : 'bg-black text-white hover:bg-gray-800'
              }`}
            >
              {added ? (
                <>
                  <Check className="w-5 h-5" />
                  {t.addToCart}!
                </>
              ) : (
                t.addToCart
              )}
            </button>

            {!canAddToCart && (
              <p className="text-sm text-gray-500 text-center">
                {t.selectSize} & {t.selectColor}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}