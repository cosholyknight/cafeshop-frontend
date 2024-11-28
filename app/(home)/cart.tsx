import React, { useContext, useMemo } from "react";
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import { CartContext } from "../../contexts/CartContext";
import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function CartScreen() {
  const { cart, removeFromCart } = useContext(CartContext)!;
  const router = useRouter();

  // Tính tổng giá trị đơn hàng
  const totalPrice = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.totalAmount, 0);
  }, [cart]);

  return (
    <View className="flex-1 bg-gray-100">
      {/* Header */}
      <View className="flex-row justify-between items-center px-6 py-4 bg-white shadow-sm">
        <TouchableOpacity onPress={() => router.back()}>
          <AntDesign name="back" size={30} color="black" />
        </TouchableOpacity>
        <Text className="text-xl font-bold text-black">Your Cart</Text>
        <Image
          source={require("../../assets/icons/cart.png")}
          className="w-8 h-8"
        ></Image>
      </View>

      {/* Cart Items */}
      {cart.length > 0 ? (
        <FlatList
          data={cart}
          renderItem={({ item, index }) => (
            <View className="bg-white border-b border-gray-200 py-4 px-6">
              <View className="flex-row justify-between items-center">
                <Text className="text-lg font-bold">{item.name}</Text>
                <Text className="text-gray-600">
                  ${item.totalAmount.toFixed(2)}
                </Text>
              </View>
              <Text className="text-gray-500">Quantity: {item.quantity}</Text>
              <TouchableOpacity onPress={() => removeFromCart(index)}>
                <Text className="text-red-500 font-bold">Remove</Text>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(_, index) => index.toString()}
        />
      ) : (
        <Text className="text-center text-gray-600 mt-20">
          Your cart is empty.
        </Text>
      )}

      {/* Footer: Total Price & Checkout Button */}
      {cart.length > 0 && (
        <View className="bg-white py-4 px-6 shadow-lg">
          {/* Tổng giá trị đơn hàng */}
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-lg font-bold text-gray-800">Total Price</Text>
            <Text className="text-lg font-bold text-gray-800">
              ${totalPrice.toFixed(2)}
            </Text>
          </View>

          <TouchableOpacity
            className="bg-teal-800 py-3 rounded-lg"
            onPress={() => router.push("./ordersuccess")}
          >
            <Text className="text-white font-bold text-center text-lg">
              Checkout
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
