import type { Product } from '../types';

export const mockProducts: Product[] = [
  // Women's Dresses
  {
    id: '1',
    name: 'Elegant Evening Dress',
    price: 189.99,
    image: 'https://images.unsplash.com/photo-1562182856-e39faab686d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGRyZXNzJTIwZWxlZ2FudHxlbnwxfHx8fDE3NjQwNDk5NTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'dresses',
    gender: 'women',
    subcategory: 'evening',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'Navy', 'Burgundy', 'Emerald'],
    description: 'Stunning floor-length evening dress perfect for special occasions.',
    brand: 'Elegance',
    uniqueFilters: { style: ['A-Line', 'Fitted'], neckline: ['V-Neck', 'Off-Shoulder'] }
  },
  {
    id: '2',
    name: 'Summer Floral Dress',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1562182856-e39faab686d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGRyZXNzJTIwZWxlZ2FudHxlbnwxfHx8fDE3NjQwNDk5NTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'dresses',
    gender: 'women',
    subcategory: 'casual',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Floral Blue', 'Floral Pink', 'Floral Yellow'],
    description: 'Light and breezy summer dress with beautiful floral pattern.',
    brand: 'Summer Vibes',
    uniqueFilters: { style: ['Midi', 'Maxi'], neckline: ['Round', 'Square'] }
  },
  {
    id: '3',
    name: 'Cocktail Party Dress',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1562182856-e39faab686d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGRyZXNzJTIwZWxlZ2FudHxlbnwxfHx8fDE3NjQwNDk5NTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'dresses',
    gender: 'women',
    subcategory: 'cocktail',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Red', 'Black', 'Silver'],
    description: 'Chic cocktail dress for parties and evening events.',
    brand: 'Party Perfect',
    uniqueFilters: { style: ['Bodycon', 'A-Line'], neckline: ['Halter', 'Strapless'] }
  },

  // Women's Tops
  {
    id: '4',
    name: 'Silk Blouse',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1761117228880-df2425bd70da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGJsb3VzZSUyMGZhc2hpb258ZW58MXx8fHwxNzYzOTk0Nzg3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'tops',
    gender: 'women',
    subcategory: 'blouses',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['White', 'Cream', 'Light Blue', 'Blush'],
    description: 'Luxurious silk blouse for professional and elegant looks.',
    brand: 'Silk & Style',
    uniqueFilters: { fit: ['Regular', 'Relaxed'], sleeve: ['Long', 'Short'] }
  },
  {
    id: '5',
    name: 'Casual T-Shirt',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1619027131391-87eadec6a398?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGNhc3VhbCUyMG91dGZpdHxlbnwxfHx8fDE3NjQwNjg2Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'tops',
    gender: 'women',
    subcategory: 't-shirts',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['White', 'Black', 'Gray', 'Navy', 'Pink'],
    description: 'Essential cotton t-shirt for everyday comfort.',
    brand: 'Basics',
    uniqueFilters: { fit: ['Fitted', 'Regular', 'Oversized'], sleeve: ['Short', 'Sleeveless'] }
  },

  // Women's Bottoms
  {
    id: '6',
    name: 'Pleated Skirt',
    price: 69.99,
    image: 'https://images.unsplash.com/photo-1589565962511-1df0fb5471b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHNraXJ0fGVufDF8fHx8MTc2NDA4NzI5MHww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'bottoms',
    gender: 'women',
    subcategory: 'skirts',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'Navy', 'Tan', 'Plaid'],
    description: 'Classic pleated skirt for versatile styling.',
    brand: 'Classic Wear',
    uniqueFilters: { length: ['Mini', 'Midi', 'Maxi'], waist: ['High', 'Mid', 'Low'] }
  },
  {
    id: '7',
    name: 'Skinny Jeans',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1619027131391-87eadec6a398?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGNhc3VhbCUyMG91dGZpdHxlbnwxfHx8fDE3NjQwNjg2Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'bottoms',
    gender: 'women',
    subcategory: 'jeans',
    sizes: ['24', '26', '28', '30', '32', '34'],
    colors: ['Blue', 'Black', 'Light Blue', 'White'],
    description: 'Stretch skinny jeans for a flattering fit.',
    brand: 'Denim Co.',
    uniqueFilters: { rise: ['High', 'Mid', 'Low'], distress: ['None', 'Light', 'Heavy'] }
  },

  // Women's Outerwear
  {
    id: '8',
    name: 'Winter Wool Coat',
    price: 249.99,
    image: 'https://images.unsplash.com/photo-1551734412-cbc8e1904805?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGNvYXQlMjB3aW50ZXJ8ZW58MXx8fHwxNzY0MDg3MjkwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'outerwear',
    gender: 'women',
    subcategory: 'coats',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Camel', 'Black', 'Gray', 'Navy'],
    description: 'Elegant wool coat to keep you warm in style.',
    brand: 'Winter Elegance',
    uniqueFilters: { length: ['Short', 'Mid', 'Long'], closure: ['Button', 'Zipper', 'Belt'] }
  },

  // Men's Suits
  {
    id: '9',
    name: 'Classic Business Suit',
    price: 399.99,
    image: 'https://images.unsplash.com/photo-1618953989832-f5323bc3c93a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBzdWl0JTIwZm9ybWFsfGVufDF8fHx8MTc2NDA4NzI4OHww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'suits',
    gender: 'men',
    subcategory: 'business',
    sizes: ['36', '38', '40', '42', '44', '46'],
    colors: ['Charcoal', 'Navy', 'Black'],
    description: 'Professional two-piece suit for business occasions.',
    brand: 'Executive',
    uniqueFilters: { fit: ['Slim', 'Regular', 'Classic'], buttons: ['Two', 'Three'] }
  },
  {
    id: '10',
    name: 'Wedding Tuxedo',
    price: 599.99,
    image: 'https://images.unsplash.com/photo-1618953989832-f5323bc3c93a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBzdWl0JTIwZm9ybWFsfGVufDF8fHx8MTc2NDA4NzI4OHww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'suits',
    gender: 'men',
    subcategory: 'formal',
    sizes: ['36', '38', '40', '42', '44', '46'],
    colors: ['Black', 'Midnight Blue'],
    description: 'Elegant tuxedo for weddings and formal events.',
    brand: 'Formal Attire',
    uniqueFilters: { fit: ['Slim', 'Classic'], lapel: ['Peak', 'Shawl', 'Notch'] }
  },

  // Men's Tops
  {
    id: '11',
    name: 'Casual Shirt',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1657405592096-0eb9199a8634?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBzaGlydCUyMGNhc3VhbHxlbnwxfHx8fDE3NjQwODcyOTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'tops',
    gender: 'men',
    subcategory: 'shirts',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['White', 'Blue', 'Pink', 'Black'],
    description: 'Comfortable casual shirt for everyday wear.',
    brand: 'Urban Casual',
    uniqueFilters: { fit: ['Slim', 'Regular', 'Relaxed'], collar: ['Button-Down', 'Spread'] }
  },
  {
    id: '12',
    name: 'Basic T-Shirt',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1657405592096-0eb9199a8634?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBzaGlydCUyMGNhc3VhbHxlbnwxfHx8fDE3NjQwODcyOTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'tops',
    gender: 'men',
    subcategory: 't-shirts',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['White', 'Black', 'Gray', 'Navy', 'Olive'],
    description: 'Essential cotton t-shirt for your wardrobe.',
    brand: 'Basics',
    uniqueFilters: { fit: ['Fitted', 'Regular', 'Oversized'], neck: ['Crew', 'V-Neck'] }
  },

  // Men's Bottoms
  {
    id: '13',
    name: 'Slim Fit Jeans',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1530062329328-9734c43ae31b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBqZWFucyUyMGRlbmltfGVufDF8fHx8MTY0MDg3MjkwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'bottoms',
    gender: 'men',
    subcategory: 'jeans',
    sizes: ['28', '30', '32', '34', '36', '38'],
    colors: ['Blue', 'Black', 'Dark Blue', 'Light Blue'],
    description: 'Modern slim fit jeans with stretch comfort.',
    brand: 'Denim Co.',
    uniqueFilters: { rise: ['Mid', 'Low'], wash: ['Light', 'Medium', 'Dark'] }
  },
  {
    id: '14',
    name: 'Chino Pants',
    price: 69.99,
    image: 'https://images.unsplash.com/photo-1530062329328-9734c43ae31b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBqZWFucyUyMGRlbmltfGVufDF8fHx8MTc2NDA4NzI5MHww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'bottoms',
    gender: 'men',
    subcategory: 'pants',
    sizes: ['28', '30', '32', '34', '36', '38'],
    colors: ['Khaki', 'Navy', 'Black', 'Olive'],
    description: 'Versatile chino pants for smart-casual looks.',
    brand: 'Classic Wear',
    uniqueFilters: { fit: ['Slim', 'Regular', 'Relaxed'], pleat: ['Flat', 'Pleated'] }
  }
];
