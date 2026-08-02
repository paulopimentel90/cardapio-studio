import { supabase } from "../lib/supabase";
import type { CartItem } from "../types/Cart";

export async function saveOrder(
  items: CartItem[],
  total: number
) {
  const products = items.map((item) => ({
    id: item.product.id,
    name: item.product.name,
    quantity: item.quantidade,
    unit_price: item.product.price,
    subtotal: item.product.price * item.quantidade,
  }));

  console.log("Enviando pedido para o Supabase...");
  console.table(products);

  const { data, error } = await supabase
    .from("orders")
    .insert({
      products,
      total_value: total,
    })
    .select()
    .single();

  if (error) {
    console.error(error);
    throw error;
  }

  console.log("Pedido salvo com sucesso.");
  console.log(data);

  return data;
}