import { CartItem } from "@/types/CartItem";
import { create } from "zustand";

type OrderStore = {
  items: CartItem[];
  history: CartItem[];
  addToOrder: (cart: CartItem[]) => void;
  removeFromOrder: (index: number) => void;
};

export const useOrderStore = create<OrderStore>((set) => ({
  items: [],
  history: [],
  addToOrder: (cart) => set((state) => ({ items: cart })),
  removeFromOrder: (index) =>
    set((state) => ({
      history: [...state.history, state.items[index]],
      items: state.items.filter((_, i) => i !== index),
    })),
}));
