interface ThankYouProps {
  onNewOrder: () => void;
}

export function ThankYou({ onNewOrder }: ThankYouProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6 gap-4 text-center">
      <span className="text-6xl">🎉</span>

      <h1 className="text-3xl font-bold text-gray-900">Obrigado!</h1>

      <p className="text-gray-500 max-w-xs">
        Seu pagamento foi registrado. Aproveite seu momento no studio!
      </p>

      <button
        onClick={onNewOrder}
        className="mt-6 bg-blue-600 hover:bg-blue-700 active:scale-95 transition-all text-white font-semibold py-4 px-8 rounded-xl"
      >
        Nova Compra
      </button>
    </div>
  );
}