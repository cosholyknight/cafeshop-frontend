import { create } from "zustand";

interface RewardsState {
  loyaltyCards: number;
  points: number;
  incrementLoyalty: (value: number) => void;
  incrementPoints: (value: number) => void;
  clearLoyalty: () => void;
}

export const useRewardsStore = create<RewardsState>((set) => ({
  loyaltyCards: 0,
  points: 0,
  incrementLoyalty: (value) =>
    set((state) => ({ loyaltyCards: Math.max(8, state.loyaltyCards + value) })),
  incrementPoints: (value) =>
    set((state) => ({ points: state.points + value })),
  clearLoyalty: () =>
    set((state) => ({
      loyaltyCards: state.loyaltyCards == 8 ? 0 : state.loyaltyCards,
    })),
}));
