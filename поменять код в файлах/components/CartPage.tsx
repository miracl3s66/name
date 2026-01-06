import { ShoppingCart, Minus, Plus, Trash2 } from './icons';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { translations, type Language } from '../utils/translations';
import type { CartItem, User } from '../types';

interface CartPageProps {
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, size: string, color: string, quantity: number) => void;
  onRemoveItem: (productId: string, size: string, color: string) => void;
  user: User;
  onUpdateUser: (updates: Partial<User>) => void;
  language: Language;
}

export function CartPage({ cartItems, onUpdateQuantity, onRemoveItem, language }: CartPageProps) {
  const t = translations[language];
  
  const subtotal = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const shipping = subtotal > 100 ? 0 : 10;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-8">
        <div className="flex items-center gap-3 mb-2">
          <ShoppingCart className="w-8 h-8" />
          <h1 className="text-3xl">{t.myCart}</h1>
        </div>
        <p className="text-blue-100">{cartItems.length} {t.items}</p>
      </div>

      <div className="px-6 py-6">
        {cartItems.length > 0 ? (
          <>
            <div className="space-y-4 mb-6">
              {cartItems.map((item) => (
                <div
                  key={`${item.product.id}-${item.size}-${item.color}`}
                  className="bg-white rounded-lg p-4 shadow-sm flex gap-4"
                >
                  <div className="w-24 h-24 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                    <ImageWithFallback
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="mb-1 line-clamp-2">{item.product.name}</h3>
                    <p className="text-sm text-gray-500 mb-1">
                      Size: {item.size} · Color: {item.color}
                    </p>
                    <p className="mb-3">${item.product.price.toFixed(2)}</p>

                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2 border border-gray-300 rounded-lg">
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.size, item.color, item.quantity - 1)}
                          className="p-2 hover:bg-gray-100"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.size, item.color, item.quantity + 1)}
                          className="p-2 hover:bg-gray-100"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>

                      <button
                        onClick={() => onRemoveItem(item.product.id, item.size, item.color)}
                        className="p-2 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-5 h-5 text-red-500" />
                      </button>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="text-lg">${(item.product.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="bg-white rounded-lg p-6 shadow-sm space-y-3">
              <h2 className="text-xl mb-4">Order Summary</h2>
              
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>

              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
              </div>

              <div className="flex justify-between text-gray-600">
                <span>Tax (8%)</span>
                <span>${tax.toFixed(2)}</span>
              </div>

              <div className="border-t pt-3 flex justify-between text-xl">
                <span>{t.total}</span>
                <span>${total.toFixed(2)}</span>
              </div>

              {subtotal < 100 && (
                <p className="text-sm text-blue-600">
                  Add ${(100 - subtotal).toFixed(2)} more for free shipping!
                </p>
              )}

              <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors mt-4">
                {t.checkout}
              </button>
            </div>
          </>
        ) : (
          <div className="text-center py-12">
            <ShoppingCart className="w-16 h-16 mx-auto mb-4 text-gray-300" />
            <h3 className="text-xl mb-2">{t.cartEmpty}</h3>
            <p className="text-gray-600 mb-6">
              {t.startShopping}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}