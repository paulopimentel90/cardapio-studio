import { PixQRCode } from "../components/PixQRCode";
import { gerarPayloadPix } from "../utils/pixPayload";
import { formatCurrency } from "../utils/formatCurrency";
import type { CartItem } from "../types/Cart";
import { saveOrder } from "../services/orders";

interface CheckoutProps {
  total: number;
  items: CartItem[];
  onFinish: () => void;
}

// Dados do recebedor Pix
const CHAVE_PIX = "06153175457";
const NOME_RECEBEDOR = "BORN BEAUTY STUDIO";
const CIDADE = "MACEIO";

export function Checkout({
  total,
  items,
  onFinish,
}: CheckoutProps) {
  const payload = gerarPayloadPix({
    chave: CHAVE_PIX,
    nomeRecebedor: NOME_RECEBEDOR,
    cidade: CIDADE,
    valor: total,
    descricao: "Compra Studio",
  });

  async function handleFinish() {
    try {
      await saveOrder(items, total);

      onFinish();
    } catch (error) {
      console.error("Erro ao registrar pedido:", error);
      alert("Não foi possível registrar o pedido. Tente novamente.");
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6 gap-6">

      <h1 className="text-2xl font-bold text-gray-900">
        Escaneie para pagar
      </h1>

      <PixQRCode payload={payload} />

      <p className="text-3xl font-bold text-gray-900">
        {formatCurrency(total)}
      </p>

      <p className="text-gray-500 text-center max-w-xs">
        Abra o aplicativo do seu banco, escolha Pix e escaneie o QR Code acima.
      </p>

      <button
        onClick={handleFinish}
        className="mt-4 bg-gray-900 hover:bg-gray-800 active:scale-95 transition-all text-white font-medium py-4 px-8 rounded-xl"
      >
        Já paguei
      </button>

    </div>
  );
}