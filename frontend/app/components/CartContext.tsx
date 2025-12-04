"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { Product } from "../../lib/products";

export type CartItem = Product & { quantity: number };

type CartContextType = {
  items: CartItem[];
  total: number;
  count: number;
  add: (product: Product) => void;
  decrease: (id: number) => void;
  remove: (id: number) => void;
  clear: () => void;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  // Carrega do localStorage
  useEffect(() => {
    const saved = localStorage.getItem("cart");
    if (saved) {
      try {
        setItems(JSON.parse(saved));
      } catch {
        setItems([]);
      }
    }
  }, []);

  // Salva no localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items));
  }, [items]);

  function add(product: Product) {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === product.id);
      if (existing) {
        return prev.map((i) =>
          i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  }

  function decrease(id: number) {
    setItems((prev) =>
      prev.flatMap((i) =>
        i.id !== id
          ? [i]
          : i.quantity <= 1
          ? []
          : [{ ...i, quantity: i.quantity - 1 }]
      )
    );
  }

  function remove(id: number) {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }

  function clear() {
    setItems([]);
  }

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const count = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider value={{ items, total, count, add, decrease, remove, clear }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be usado dentro de CartProvider");
  }
  return ctx;
}