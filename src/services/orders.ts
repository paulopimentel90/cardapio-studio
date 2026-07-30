import { supabase } from "../lib/supabase";
import type { CartItem } from "../types/Cart";

export async function saveOrder(
  items: CartItem[],
  total: number
) {
  const products = items.map((item) => ({
    name: item.product.nome,
    quantity: item.quantidade,
    unit_price: item.product.preco,
    subtotal: item.product.preco * item.quantidade,
  }));

  console.log("Enviando para Supabase:");
  console.log(products);

  const { data, error } = await supabase
    .from("orders")
    .insert({
      products,
      total_value: total,
    })
    .select()
    .single();

  console.log("Resposta do Supabase:");
  console.log({ data, error });

  if (error) {
    throw error;
  }

  return data;
}