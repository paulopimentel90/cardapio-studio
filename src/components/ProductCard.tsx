import type { Product } from "../types/Product";
import { formatCurrency } from "../utils/formatCurrency";

// Define quais informações esse componente espera receber de fora
interface ProductCardProps {
  product: Product;
  onAdd: (product: Product) => void;
}

export function ProductCard({ product, onAdd }: ProductCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow p-4 flex flex-col items-center text-center">
      <img
        src={product.imagem}
        alt={product.nome}
        className="w-32 h-32 object-cover rounded-xl mb-3"
      />

      <h3 className="text-lg font-semibold text-gray-800">
        {product.nome}
      </h3>

      <p className="text-xl font-bold text-gray-900 mt-1">
        {formatCurrency(product.preco)}
    </p>

      <button
        onClick={() => onAdd(product)}
        className="mt-4 w-full bg-blue-600 hover:bg-blue-700 active:scale-95 transition-all text-white font-medium py-3 rounded-xl"
      >
        Adicionar
      </button>
    </div>
  );
}