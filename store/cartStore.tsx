import { CartItem } from "@/types/CartItem";
import { create } from "zustand";

type CartStore = {
  cart: CartItem[];
  totalPrice: number;
  totalQuantity: number;
  appliedPrice: number;
  appliedCoupon: string | null;
  setCoupon: (coupon: string) => void;
  clearCoupon: () => void;
  addToCart: (item: CartItem) => void;
  removeFromCart: (index: number) => void;
  checkOutCart: () => void;
};

export const useCartStore = create<CartStore>((set) => ({
  cart: [],
  totalPrice: 0,
  totalQuantity: 0,
  appliedPrice: 0,
  appliedCoupon: null,
  setCoupon: (coupon) => {
    set((state) => ({
      appliedCoupon: coupon,
    }));
    if (coupon === "DISCOUNT10")
      set((state) => ({
        appliedPrice: state.totalPrice * 0.9,
      }));
  },
  clearCoupon: () =>
    set((state) => ({
      appliedPrice: state.totalPrice,
      appliedCoupon: null,
    })),
  addToCart: (item) =>
    set((state) => ({
      cart: [...state.cart, item],
      appliedPrice: (state.totalPrice + item.totalAmount) * 0.9,
      totalPrice: state.totalPrice + item.totalAmount,
      totalQuantity: state.totalQuantity + item.quantity,
    })),
  removeFromCart: (index) =>
    set((state) => ({
      appliedPrice: (state.totalPrice - state.cart[index].totalAmount) * 0.9,
      totalPrice: state.totalPrice - state.cart[index].totalAmount,
      cart: state.cart.filter((_, i) => i !== index),
    })),
  checkOutCart: () =>
    set((state) => ({
      cart: [],
      totalPrice: 0,
      totalQuantity: 0,
      appliedPrice: 0,
      appliedCoupon: null,
    })),
}));
