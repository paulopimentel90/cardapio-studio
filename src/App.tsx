import { useState } from "react";
import { products } from "./data/products";
import { ProductCard } from "./components/ProductCard";
import { Cart } from "./components/Cart";
import { Checkout } from "./pages/Checkout";
import { ThankYou } from "./pages/ThankYou";
import { useCart } from "./hooks/useCart";

type Tela = "cardapio" | "checkout" | "obrigado";

function App() {
  const [tela, setTela] = useState<Tela>("cardapio");

  const {
    items,
    addItem,
    increaseItem,
    decreaseItem,
    removeItem,
    clearCart,
    total,
  } = useCart();

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
          Studio Beauty 💅
        </h1>

        <p className="text-gray-500 mt-1">
          Escolha seus produtos
        </p>
      </header>


      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">

        <main className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-4">

          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAdd={addItem}
            />
          ))}

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