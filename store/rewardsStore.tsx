import { CartItem } from "@/types/CartItem";
import { create } from "zustand";

interface RewardsState {
  loyaltyCards: number;
  points: number;
  historyRewards: CartItem[];
  incrementLoyalty: (value: number) => void;
  incrementPoints: (value: number) => void;
  addToHistoryRewards: (items: CartItem[]) => void;
  clearLoyalty: () => void;
  redeemPoints: (value: number) => void;
}

export const useRewardsStore = create<RewardsState>((set) => ({
  loyaltyCards: 0,
  points: 0,
  historyRewards: [],
  incrementLoyalty: (value) =>
    set((state) => ({ loyaltyCards: Math.min(8, state.loyaltyCards + value) })),
  incrementPoints: (value) =>
    set((state) => ({ points: state.points + value })),
  addToHistoryRewards: (items) =>
    set((state) => ({ historyRewards: state.historyRewards.concat(items) })),
  clearLoyalty: () =>
    set((state) => ({
      loyaltyCards: state.loyaltyCards == 8 ? 0 : state.loyaltyCards,
    })),
  redeemPoints: (value) => set((state) => ({ points: state.points - value })),
}));
