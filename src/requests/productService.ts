import type { Product } from "@/types/product";
import { axiosInstance } from "@/api/axiosInstance";

export async function getProducts(): Promise<Product[]> {
  const response = await axiosInstance.get<Product[]>("/products");

  return response.data;
}

export async function getCategories(): Promise<string[]> {
  const response = await axiosInstance.get<string[]>("/products/categories");
  return response.data;
}
