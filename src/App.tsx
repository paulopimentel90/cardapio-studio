import { useEffect, useState } from "react";

import { ProductCard } from "./components/ProductCard";
import { Cart } from "./components/Cart";
import { Checkout } from "./pages/Checkout";
import { ThankYou } from "./pages/ThankYou";

import { useCart } from "./hooks/useCart";

import { ProductService } from "./services/products";
import type { Product } from "./types/Product";

type Tela = "cardapio" | "checkout" | "obrigado";

function App() {
  const [tela, setTela] = useState<Tela>("cardapio");

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const {
    items,
    addItem,
    increaseItem,
    decreaseItem,
    removeItem,
    clearCart,
    total,
  } = useCart();

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await ProductService.findAll();
        setProducts(data);
      } catch (error) {
        console.error("Erro ao carregar produtos:", error);
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  function handleCheckout() {
    setTela("checkout");
  }

  function handlePagamentoConcluido() {
    setTela("obrigado");
  }

  function handleNovaCompra() {
    clearCart();
    setTela("cardapio");
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-lg text-gray-600">Carregando produtos...</p>
      </div>
    );
  }

  if (tela === "checkout") {
    return (
      <Checkout
        total={total}
        items={items}
        onFinish={handlePagamentoConcluido}
      />
    );
  }

  if (tela === "obrigado") {
    return (
      <ThankYou
        onNewOrder={handleNovaCompra}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">

      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900">
          Born Beauty Studio 💅
        </h1>

        <p className="text-gray-500 mt-1">
          Escolha seus produtos
        </p>
      </header>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">

        <main className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-4">

          {products.length === 0 ? (
            <div className="col-span-full text-center py-10">
              <p className="text-gray-500">
                Nenhum produto disponível.
              </p>
            </div>
          ) : (
            products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAdd={addItem}
              />
            ))
          )}

        </main>

        <aside className="lg:col-span-1">

          <Cart
            items={items}
            total={total}
            onIncrease={increaseItem}
            onDecrease={decreaseItem}
            onRemove={removeItem}
            onCheckout={handleCheckout}
          />

        </aside>

      </div>

    </div>
  );
}

export default App;