import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useCartStore } from "@/store/cartStore";
import { useRouter } from "expo-router";
import { AntDesign, Feather } from "@expo/vector-icons";

export default function CouponScreen() {
  const { setCoupon } = useCartStore();
  const router = useRouter();

  const applyCoupon = (coupon: string) => {
    setCoupon(coupon);
    router.back(); // Quay lại trang Cart
  };

  return (
    <View className="flex-1 bg-gray-100">
      <View className="flex-row justify-between items-center px-6 py-4">
        <TouchableOpacity onPress={() => router.back()}>
          <AntDesign name="back" size={30} color="black" />
        </TouchableOpacity>
        <Text className="text-2xl font-bold text-teal-800 mr-3">
          Available Coupons
        </Text>
        <Text> </Text>
      </View>

      <TouchableOpacity
        className="bg-gray-200 p-4 rounded-2xl mb-4 w-96 self-center"
        onPress={() => applyCoupon("DISCOUNT10")}
      >
        <Text className="text-lg font-bold">DISCOUNT10</Text>
        <Text className="text-gray-600">Get 10% off your total order</Text>
      </TouchableOpacity>
      {/* Thêm các mã giảm giá khác */}
    </View>
  );
}
