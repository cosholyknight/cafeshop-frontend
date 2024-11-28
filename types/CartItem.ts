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
  addToCart: (item: CartItem) => void; // Đảm bảo kiểu addToCart được định nghĩa
  removeFromCart: (index: number) => void;
};
