// Monta um "campo" no formato exigido pelo Pix: ID + Tamanho + Valor
// Exemplo: campo("00", "01") retorna "000201"
//   "00" = identificador do campo
//   "02" = tamanho do valor "01" (2 caracteres)
//   "01" = o valor em si
function campo(id: string, valor: string): string {
  const tamanho = valor.length.toString().padStart(2, "0");
  return `${id}${tamanho}${valor}`;
}

// Calcula o "checksum" (código de verificação) exigido no final do Pix
// Isso garante que o texto não foi corrompido ao ser lido pelo banco
function calcularCRC16(payload: string): string {
  let crc = 0xffff;
  const polinomio = 0x1021;

  for (let i = 0; i < payload.length; i++) {
    crc ^= payload.charCodeAt(i) << 8;

    for (let j = 0; j < 8; j++) {
      if ((crc & 0x8000) !== 0) {
        crc = (crc << 1) ^ polinomio;
      } else {
        crc = crc << 1;
      }
      crc &= 0xffff;
    }
  }

  return crc.toString(16).toUpperCase().padStart(4, "0");
}

interface DadosPix {
  chave: string;
  nomeRecebedor: string;
  cidade: string;
  valor: number;
  descricao?: string;
}

// Monta o texto completo do Pix (BR Code), pronto para virar QR Code
export function gerarPayloadPix({
  chave,
  nomeRecebedor,
  cidade,
  valor,
  descricao = "Compra Studio",
}: DadosPix): string {
  const merchantAccountInfo =
    campo("00", "br.gov.bcb.pix") +
    campo("01", chave) +
    campo("02", descricao);

  const payloadSemCRC =
    campo("00", "01") + // Payload Format Indicator (fixo)
    campo("26", merchantAccountInfo) + // Dados da conta Pix (chave + descrição)
    campo("52", "0000") + // Categoria do comerciante (genérico)
    campo("53", "986") + // Código da moeda (986 = Real brasileiro)
    campo("54", valor.toFixed(2)) + // Valor da cobrança
    campo("58", "BR") + // País
    campo("59", nomeRecebedor.slice(0, 25)) + // Nome do recebedor (máx 25 caracteres)
    campo("60", cidade.slice(0, 15)) + // Cidade (máx 15 caracteres)
    campo("62", campo("05", "***")) + // Identificador da transação (genérico)
    "6304"; // Início do campo do CRC (fixo)

  const crc = calcularCRC16(payloadSemCRC);

  return payloadSemCRC + crc;
}