import { useState, useEffect } from "react";
import { AuthPage } from "./components/AuthPage";
import { BottomNav } from "./components/BottomNav";
import { HomePage } from "./components/HomePage";
import { SearchPage } from "./components/SearchPage";
import { CartPage } from "./components/CartPage";
import { FavoritesPage } from "./components/FavoritesPage";
import { AccountPage } from "./components/AccountPage";
import { ProductDetailModal } from "./components/ProductDetailModal";
import { getLanguageFromCode, type Language } from "./utils/translations";
import type { User, Page, Product, CartItem } from "./types";

export default function App() {
  const [user, setUser] = useState<User | null>(null);
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [favorites, setFavorites] = useState<string[]>([]);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [selectedProduct, setSelectedProduct] =
    useState<Product | null>(null);
  const [currentLanguage, setCurrentLanguage] = useState<Language>("ru");

  // Load user from localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      const parsedUser = JSON.parse(savedUser);
      setUser(parsedUser);
      // Set language from user data
      if (parsedUser.language) {
        setCurrentLanguage(getLanguageFromCode(parsedUser.language));
      }
    }

    const savedFavorites = localStorage.getItem("favorites");
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }

    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  // Save to localStorage when state changes
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    }
  }, [user]);

  useEffect(() => {
    localStorage.setItem(
      "favorites",
      JSON.stringify(favorites),
    );
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem("language", currentLanguage);
  }, [currentLanguage]);

  const handleLogin = (
    username: string,
    password: string,
  ): boolean => {
    const users = JSON.parse(
      localStorage.getItem("users") || "[]",
    );
    const foundUser = users.find(
      (u: User) =>
        u.username === username && u.password === password,
    );

    if (foundUser) {
      setUser(foundUser);
      return true;
    }
    return false;
  };

  const handleRegister = (
    userData: Omit<User, "orders">,
  ): boolean => {
    const users = JSON.parse(
      localStorage.getItem("users") || "[]",
    );

    if (
      users.some((u: User) => u.username === userData.username)
    ) {
      return false; // Username already exists
    }

    const newUser: User = {
      ...userData,
      orders: [],
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    setUser(newUser);
    return true;
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
    setCurrentPage("home");
  };

  const toggleFavorite = (productId: string) => {
    setFavorites((prev) => {
      if (prev.includes(productId)) {
        return prev.filter((id) => id !== productId);
      }
      return [...prev, productId];
    });
  };

  const addToCart = (
    product: Product,
    size: string,
    color: string,
  ) => {
    setCartItems((prev) => {
      const existing = prev.find(
        (item) =>
          item.product.id === product.id &&
          item.size === size &&
          item.color === color,
      );

      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id &&
          item.size === size &&
          item.color === color
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...prev, { product, size, color, quantity: 1 }];
    });
  };

  const updateCartQuantity = (
    productId: string,
    size: string,
    color: string,
    quantity: number,
  ) => {
    if (quantity === 0) {
      setCartItems((prev) =>
        prev.filter(
          (item) =>
            !(
              item.product.id === productId &&
              item.size === size &&
              item.color === color
            ),
        ),
      );
    } else {
      setCartItems((prev) =>
        prev.map((item) =>
          item.product.id === productId &&
          item.size === size &&
          item.color === color
            ? { ...item, quantity }
            : item,
        ),
      );
    }
  };

  const removeFromCart = (
    productId: string,
    size: string,
    color: string,
  ) => {
    setCartItems((prev) =>
      prev.filter(
        (item) =>
          !(
            item.product.id === productId &&
            item.size === size &&
            item.color === color
          ),
      ),
    );
  };

  const updateUserProfile = (updates: Partial<User>) => {
    if (!user) return;

    const updatedUser = { ...user, ...updates };
    setUser(updatedUser);

    // Update language when user language changes
    if (updates.language) {
      setCurrentLanguage(getLanguageFromCode(updates.language));
    }

    // Update in users list
    const users = JSON.parse(
      localStorage.getItem("users") || "[]",
    );
    const updatedUsers = users.map((u: User) =>
      u.username === user.username ? updatedUser : u,
    );
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  // Require authentication
  if (!user) {
    return (
      <AuthPage
        onLogin={handleLogin}
        onRegister={handleRegister}
        language={currentLanguage}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {currentPage === "home" && <HomePage user={user} language={currentLanguage} />}
      {currentPage === "search" && (
        <SearchPage
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
          onProductClick={setSelectedProduct}
          language={currentLanguage}
        />
      )}
      {currentPage === "cart" && (
        <CartPage
          cartItems={cartItems}
          onUpdateQuantity={updateCartQuantity}
          onRemoveItem={removeFromCart}
          user={user}
          onUpdateUser={updateUserProfile}
          language={currentLanguage}
        />
      )}
      {currentPage === "favorites" && (
        <FavoritesPage
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
          onProductClick={setSelectedProduct}
          language={currentLanguage}
        />
      )}
      {currentPage === "account" && (
        <AccountPage
          user={user}
          onUpdateUser={updateUserProfile}
          onLogout={handleLogout}
          language={currentLanguage}
        />
      )}

      <BottomNav
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        cartCount={cartItems.length}
      />

      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          isFavorite={favorites.includes(selectedProduct.id)}
          onToggleFavorite={toggleFavorite}
          onAddToCart={addToCart}
          language={currentLanguage}
        />
      )}
    </div>
  );
}