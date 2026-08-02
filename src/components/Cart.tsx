import type { CartItem } from "../types/Cart";
import { formatCurrency } from "../utils/formatCurrency";

interface CartProps {
  items: CartItem[];
  total: number;
  onIncrease: (productId: string) => void;
  onDecrease: (productId: string) => void;
  onRemove: (productId: string) => void;
  onCheckout: () => void;
}

export function Cart({
  items,
  total,
  onIncrease,
  onDecrease,
  onRemove,
  onCheckout,
}: CartProps) {
  if (items.length === 0) {
    return (
      <div className="bg-white rounded-2xl shadow-sm p-6 text-center text-gray-400">
        Seu carrinho está vazio
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 flex flex-col gap-4">
      <h2 className="text-xl font-bold text-gray-900">
        Seu pedido
      </h2>

      <div className="flex flex-col gap-3">
        {items.map((item) => (
          <div
            key={item.product.id}
            className="flex items-center justify-between border-b border-gray-100 pb-3"
          >
            <div>
              <p className="font-medium text-gray-800">
                {item.product.name}
              </p>

              <p className="text-sm text-gray-500">
                {formatCurrency(
                  item.product.price * item.quantidade
                )}
              </p>
            </div>

            <div className="flex items-center gap-3">

              <button
                onClick={() =>
                  onDecrease(item.product.id)
                }
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold"
              >
                −
              </button>

              <span className="w-6 text-center font-medium">
                {item.quantidade}
              </span>

              <button
                onClick={() =>
                  onIncrease(item.product.id)
                }
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold"
              >
                +
              </button>

              <button
                onClick={() =>
                  onRemove(item.product.id)
                }
                className="ml-2 text-red-500 text-sm hover:underline"
              >
                Remover
              </button>

            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between pt-2">
        <span className="text-lg font-semibold text-gray-900">
          Total
        </span>

        <span className="text-2xl font-bold text-gray-900">
          {formatCurrency(total)}
        </span>
      </div>

      <button
        onClick={onCheckout}
        className="w-full bg-green-600 hover:bg-green-700 active:scale-95 transition-all text-white font-semibold py-4 rounded-xl text-lg"
      >
        Finalizar Compra
      </button>
    </div>
  );
}