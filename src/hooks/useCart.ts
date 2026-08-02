import { useState } from "react";
import type { Product } from "../types/Product";
import type { CartItem } from "../types/Cart";

export function useCart() {
  const [items, setItems] = useState<CartItem[]>([]);

  // Adiciona um produto ao carrinho (ou aumenta a quantidade se já existir)
  function addItem(product: Product) {
    setItems((currentItems) => {
      const existingItem = currentItems.find(
        (item) => item.product.id === product.id
      );

      if (existingItem) {
        return currentItems.map((item) =>
          item.product.id === product.id
            ? {
                ...item,
                quantidade: item.quantidade + 1,
              }
            : item
        );
      }

      return [
        ...currentItems,
        {
          product,
          quantidade: 1,
        },
      ];
    });
  }

  // Aumenta a quantidade
  function increaseItem(productId: string) {
    setItems((currentItems) =>
      currentItems.map((item) =>
        item.product.id === productId
          ? {
              ...item,
              quantidade: item.quantidade + 1,
            }
          : item
      )
    );
  }

  // Diminui a quantidade
  function decreaseItem(productId: string) {
    setItems((currentItems) =>
      currentItems
        .map((item) =>
          item.product.id === productId
            ? {
                ...item,
                quantidade: item.quantidade - 1,
              }
            : item
        )
        .filter((item) => item.quantidade > 0)
    );
  }

  // Remove completamente
  function removeItem(productId: string) {
    setItems((currentItems) =>
      currentItems.filter(
        (item) => item.product.id !== productId
      )
    );
  }

  // Limpa carrinho
  function clearCart() {
    setItems([]);
  }

  // Total
  const total = items.reduce(
    (acc, item) => acc + item.product.price * item.quantidade,
    0
  );

  return {
    items,
    addItem,
    increaseItem,
    decreaseItem,
    removeItem,
    clearCart,
    total,
  };
}