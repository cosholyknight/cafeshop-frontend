export type CartItem = {
  name: string;
  quantity: number;
  size: string;
  shot: string;
  ice: string;
  totalAmount: number;
};

export type CartContextType = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (index: number) => void;
  checkOutCart: () => void;
};
