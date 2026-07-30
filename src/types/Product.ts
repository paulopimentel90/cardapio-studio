// Define o formato que todo produto do cardápio deve seguir
export interface Product {
  id: number;
  nome: string;
  preco: number;
  imagem: string;
}