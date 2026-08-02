import { supabase } from "../lib/supabase";
import type { Product } from "../types/Product";

export class ProductService {
  static async findAll(): Promise<Product[]> {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("is_active", true)
      .order("category")
      .order("name");

    if (error) {
      throw error;
    }

    return data ?? [];
  }
}