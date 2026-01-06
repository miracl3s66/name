import { useState } from 'react';
import { ChevronLeft, ChevronRight, Search as SearchIcon, Filter } from './icons';
import { ProductCard } from './ProductCard';
import { mockProducts } from '../data/products';
import { translations, type Language } from '../utils/translations';
import type { Product } from '../types';

interface SearchPageProps {
  favorites: string[];
  onToggleFavorite: (productId: string) => void;
  onProductClick: (product: Product) => void;
  language: Language;
}

type NavigationStep = 'search' | 'category' | 'subcategory' | 'products';

const categoryData = {
  women: {
    dresses: ['evening', 'casual', 'cocktail'],
    tops: ['blouses', 't-shirts'],
    bottoms: ['skirts', 'jeans'],
    outerwear: ['coats', 'jackets']
  },
  men: {
    suits: ['business', 'formal'],
    tops: ['shirts', 't-shirts'],
    bottoms: ['jeans', 'pants'],
    outerwear: ['coats', 'jackets']
  }
};

export function SearchPage({ favorites, onToggleFavorite, onProductClick, language }: SearchPageProps) {
  const [step, setStep] = useState<NavigationStep>('search');
  const [selectedGender, setSelectedGender] = useState<'men' | 'women' | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'price-low' | 'price-high'>('price-low');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedUniqueFilters, setSelectedUniqueFilters] = useState<{ [key: string]: string[] }>({});

  const t = translations[language];

  const handleGenderSelect = (gender: 'men' | 'women') => {
    setSelectedGender(gender);
    setStep('category');
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setStep('subcategory');
  };

  const handleSubcategorySelect = (subcategory: string) => {
    setSelectedSubcategory(subcategory);
    setStep('products');
  };

  const handleBack = () => {
    if (step === 'products') {
      setStep('subcategory');
      setSelectedSubcategory(null);
    } else if (step === 'subcategory') {
      setStep('category');
      setSelectedCategory(null);
    } else if (step === 'category') {
      setStep('search');
      setSelectedGender(null);
    }
  };

  const getFilteredProducts = () => {
    let filtered = mockProducts.filter(p => {
      // If navigating through categories, apply those filters
      if (step === 'products') {
        if (selectedGender && p.gender !== selectedGender) return false;
        if (selectedCategory && p.category !== selectedCategory) return false;
        if (selectedSubcategory && p.subcategory !== selectedSubcategory) return false;
      }
      
      // Search query filter (works on all steps)
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesName = p.name.toLowerCase().includes(query);
        const matchesCategory = p.category.toLowerCase().includes(query);
        const matchesSubcategory = p.subcategory.toLowerCase().includes(query);
        const matchesBrand = p.brand.toLowerCase().includes(query);
        const matchesDescription = p.description.toLowerCase().includes(query);
        
        if (!matchesName && !matchesCategory && !matchesSubcategory && !matchesBrand && !matchesDescription) {
          return false;
        }
      }
      
      if (selectedSizes.length > 0 && !selectedSizes.some(size => p.sizes.includes(size))) return false;
      if (selectedColors.length > 0 && !selectedColors.some(color => 
        p.colors.some(c => c.toLowerCase().includes(color.toLowerCase()))
      )) return false;

      // Unique filters
      for (const [filterKey, filterValues] of Object.entries(selectedUniqueFilters)) {
        if (filterValues.length > 0 && p.uniqueFilters?.[filterKey]) {
          if (!filterValues.some(val => p.uniqueFilters![filterKey].includes(val))) {
            return false;
          }
        }
      }

      return true;
    });

    // Sort
    filtered.sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      return 0;
    });

    return filtered;
  };

  const products = getFilteredProducts();

  // Get unique filter options from current products
  const getUniqueFilterKeys = () => {
    const keys = new Set<string>();
    products.forEach(p => {
      if (p.uniqueFilters) {
        Object.keys(p.uniqueFilters).forEach(key => keys.add(key));
      }
    });
    return Array.from(keys);
  };

  const getUniqueFilterValues = (key: string) => {
    const values = new Set<string>();
    products.forEach(p => {
      if (p.uniqueFilters?.[key]) {
        p.uniqueFilters[key].forEach(val => values.add(val));
      }
    });
    return Array.from(values);
  };

  const allSizes = Array.from(new Set(mockProducts.flatMap(p => p.sizes)));
  const allColors = Array.from(new Set(mockProducts.flatMap(p => p.colors)));

  const toggleSize = (size: string) => {
    setSelectedSizes(prev =>
      prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]
    );
  };

  const toggleColor = (color: string) => {
    setSelectedColors(prev =>
      prev.includes(color) ? prev.filter(c => c !== color) : [...prev, color]
    );
  };

  const toggleUniqueFilter = (filterKey: string, value: string) => {
    setSelectedUniqueFilters(prev => {
      const current = prev[filterKey] || [];
      const updated = current.includes(value)
        ? current.filter(v => v !== value)
        : [...current, value];
      return { ...prev, [filterKey]: updated };
    });
  };

  const clearFilters = () => {
    setSelectedSizes([]);
    setSelectedColors([]);
    setSelectedUniqueFilters({});
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="px-6 py-4">
          {step !== 'search' && (
            <button
              onClick={handleBack}
              className="flex items-center gap-2 text-gray-600 hover:text-black mb-3"
            >
              <ChevronLeft className="w-5 h-5" />
              {t.back}
            </button>
          )}
          <h1 className="text-2xl mb-3">
            {step === 'search' && t.searchTitle}
            {step === 'category' && `${selectedGender === 'women' ? t.forHer : t.forHim}`}
            {step === 'subcategory' && selectedCategory}
            {step === 'products' && selectedSubcategory}
          </h1>
          
          <div className="flex gap-2">
            <div className="flex-1 relative">
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder={t.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            {(step === 'products' || searchQuery) && (
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`px-4 py-2 border rounded-lg hover:bg-gray-50 ${
                  showFilters ? 'bg-gray-100 border-black' : 'border-gray-300'
                }`}
              >
                <Filter className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="px-6 py-6">
        {/* Gender Selection */}
        {step === 'search' && !searchQuery && (
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => handleGenderSelect('women')}
              className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-xl p-8 hover:shadow-lg transition-shadow"
            >
              <p className="text-2xl mb-2">{t.forHer}</p>
              <ChevronRight className="w-6 h-6 mx-auto" />
            </button>
            <button
              onClick={() => handleGenderSelect('men')}
              className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl p-8 hover:shadow-lg transition-shadow"
            >
              <p className="text-2xl mb-2">{t.forHim}</p>
              <ChevronRight className="w-6 h-6 mx-auto" />
            </button>
          </div>
        )}

        {/* Category Selection */}
        {step === 'category' && selectedGender && (
          <div className="grid gap-3">
            {Object.keys(categoryData[selectedGender]).map((category) => (
              <button
                key={category}
                onClick={() => handleCategorySelect(category)}
                className="bg-white border border-gray-200 rounded-lg p-4 flex items-center justify-between hover:border-black transition-colors"
              >
                <span className="capitalize">{category}</span>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>
            ))}
          </div>
        )}

        {/* Subcategory Selection */}
        {step === 'subcategory' && selectedGender && selectedCategory && (
          <div className="grid gap-3">
            {categoryData[selectedGender][selectedCategory as keyof typeof categoryData[typeof selectedGender]].map((subcategory) => (
              <button
                key={subcategory}
                onClick={() => handleSubcategorySelect(subcategory)}
                className="bg-white border border-gray-200 rounded-lg p-4 flex items-center justify-between hover:border-black transition-colors"
              >
                <span className="capitalize">{subcategory}</span>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>
            ))}
          </div>
        )}

        {/* Show products when searching or in products step */}
        {(step === 'products' || (step === 'search' && searchQuery)) && (
          <>
            {/* Filters Panel */}
            {showFilters && (
              <div className="bg-white rounded-lg border border-gray-200 p-4 mb-4 space-y-4">
                {/* Clear Filters */}
                <div className="flex justify-between items-center">
                  <h3 className="font-medium">{t.filters}</h3>
                  <button
                    onClick={clearFilters}
                    className="text-sm text-gray-600 hover:text-black"
                  >
                    {t.clearAll}
                  </button>
                </div>

                {/* Sort */}
                <div>
                  <label className="block mb-2">{t.sortByPrice}</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as 'price-low' | 'price-high')}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  >
                    <option value="price-low">{t.priceLowToHigh}</option>
                    <option value="price-high">{t.priceHighToLow}</option>
                  </select>
                </div>

                {/* Size Filter */}
                {allSizes.length > 0 && (
                  <div>
                    <label className="block mb-2">{t.size}</label>
                    <div className="flex flex-wrap gap-2">
                      {allSizes.map(size => (
                        <button
                          key={size}
                          onClick={() => toggleSize(size)}
                          className={`px-3 py-1 border rounded-md text-sm ${
                            selectedSizes.includes(size)
                              ? 'bg-black text-white border-black'
                              : 'border-gray-300 hover:border-black'
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Color Filter */}
                {allColors.length > 0 && (
                  <div>
                    <label className="block mb-2">{t.color}</label>
                    <div className="flex flex-wrap gap-2">
                      {allColors.map(color => (
                        <button
                          key={color}
                          onClick={() => toggleColor(color)}
                          className={`px-3 py-1 border rounded-md text-sm ${
                            selectedColors.includes(color)
                              ? 'bg-black text-white border-black'
                              : 'border-gray-300 hover:border-black'
                          }`}
                        >
                          {color}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Unique Filters */}
                {getUniqueFilterKeys().map(filterKey => (
                  <div key={filterKey}>
                    <label className="block mb-2 capitalize">{filterKey}</label>
                    <div className="flex flex-wrap gap-2">
                      {getUniqueFilterValues(filterKey).map(value => (
                        <button
                          key={value}
                          onClick={() => toggleUniqueFilter(filterKey, value)}
                          className={`px-3 py-1 border rounded-md text-sm ${
                            selectedUniqueFilters[filterKey]?.includes(value)
                              ? 'bg-black text-white border-black'
                              : 'border-gray-300 hover:border-black'
                          }`}
                        >
                          {value}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            <p className="text-gray-600 mb-4">{products.length} {t.productsFound}</p>

            {products.length > 0 ? (
              <div className="grid grid-cols-2 gap-4">
                {products.map(product => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    isFavorite={favorites.includes(product.id)}
                    onToggleFavorite={onToggleFavorite}
                    onClick={() => onProductClick(product)}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 text-gray-500">
                <p className="mb-2">{t.noProductsFound}{searchQuery && ` ${t.noProductsFoundQuery} \"${searchQuery}\"`}</p>
                <p className="text-sm">{t.tryDifferentSearch}</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}