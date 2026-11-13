import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import type { Product } from "@/types/product";

interface CartItem {
  product: Product;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  addItem: (product: Product) => void;
  setQuantity: (id: number, quantity: number) => void;
  removeItem: (id: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      addItem: (product) =>
        set((state) => {
          const exists = state.items.some(
            (item) => item.product.id === product.id,
          );
          return {
            items: exists
              ? state.items.map((item) =>
                  item.product.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item,
                )
              : [...state.items, { product, quantity: 1 }],
          };
        }),
      setQuantity: (id, quantity) =>
        set((state) => ({
          items: state.items.map((item) =>
            item.product.id === id
              ? { ...item, quantity: Math.max(1, quantity) }
              : item,
          ),
        })),
      removeItem: (id) =>
        set((state) => ({
          items: state.items.filter((item) => item.product.id !== id),
        })),
      clearCart: () => set({ items: [] }),
    }),
    {
      name: "nova-cart",
      storage: createJSONStorage(() => localStorage),
      skipHydration: true,
    },
  ),
);
