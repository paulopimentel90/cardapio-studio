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
        // Já existe: apenas aumenta a quantidade em 1
        return currentItems.map((item) =>
          item.product.id === product.id
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        );
      }

      // Não existe ainda: adiciona novo item com quantidade 1
      return [...currentItems, { product, quantidade: 1 }];
    });
  }

  // Aumenta a quantidade de um item específico
  function increaseItem(productId: number) {
    setItems((currentItems) =>
      currentItems.map((item) =>
        item.product.id === productId
          ? { ...item, quantidade: item.quantidade + 1 }
          : item
      )
    );
  }

  // Diminui a quantidade de um item; remove automaticamente se chegar a 0
  function decreaseItem(productId: number) {
    setItems((currentItems) =>
      currentItems
        .map((item) =>
          item.product.id === productId
            ? { ...item, quantidade: item.quantidade - 1 }
            : item
        )
        .filter((item) => item.quantidade > 0)
    );
  }

  // Remove um item completamente do carrinho
  function removeItem(productId: number) {
    setItems((currentItems) =>
      currentItems.filter((item) => item.product.id !== productId)
    );
  }

  // Esvazia o carrinho
  function clearCart() {
    setItems([]);
  }

  // Calcula o valor total do carrinho
  const total = items.reduce(
    (soma, item) => soma + item.product.preco * item.quantidade,
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