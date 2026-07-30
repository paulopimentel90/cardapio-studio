import type { Product } from "./Product";

// Um item do carrinho é um produto + a quantidade escolhida
export interface CartItem {
  product: Product;
  quantidade: number;
}