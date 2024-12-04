import React, { useContext, useMemo } from "react";
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  Alert,
} from "react-native";
import { useCartStore } from "@/store/cartStore";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import Swipeable from "react-native-gesture-handler/ReanimatedSwipeable";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useRewardsStore } from "@/store/rewardsStore";
import { useOrderStore } from "@/store/orderStore";

export default function CartScreen() {
  const {
    cart,
    appliedCoupon,
    removeFromCart,
    checkOutCart,
    totalPrice,
    totalQuantity,
    clearCoupon,
    appliedPrice,
  } = useCartStore();
  const { items, addToOrder } = useOrderStore();
  const { addToHistoryRewards } = useRewardsStore();

  const router = useRouter();

  const { incrementLoyalty, incrementPoints, loyaltyCards } = useRewardsStore();

  const handleCheckout = () => {
    if (cart.length === 0) {
      Alert.alert("Cart is empty", "Add some items to checkout!");
      return;
    }

    incrementLoyalty(totalQuantity);

    const earnedPoints = totalPrice * 4;
    incrementPoints(earnedPoints);

    Alert.alert(
      "Checkout Successful",
      `You earned ${totalQuantity} Loyalty Card and ${earnedPoints} points!`
    );
    addToOrder(cart);
    addToHistoryRewards(cart);
    checkOutCart();

    router.push("./ordersuccess");
  };
  const imageMap = {
    Americano: require("../../assets/americano.png"),
    Cappuccino: require("../../assets/cappuccino.png"),
    Mocha: require("../../assets/mocha.png"),
    "Flat White": require("../../assets/flatwhite.png"),
  };

  const renderRightActions = (index: number) => (
    <View className="justify-center">
      <TouchableOpacity
        onPress={() => removeFromCart(index)}
        className="bg-red-100 py-10 mx-5 px-3 rounded-2xl"
      >
        <Ionicons name="trash-outline" color="red" size={40} />
      </TouchableOpacity>
    </View>
  );

  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      <View className="flex-row justify-between items-center px-6 py-4 bg-white shadow-sm">
        <TouchableOpacity onPress={() => router.back()}>
          <AntDesign name="back" size={30} color="black" />
        </TouchableOpacity>
        <Text className="text-2xl font-bold text-teal-800 mr-2">My Cart</Text>
        <TouchableOpacity onPress={() => router.push("/(home)")}>
          <Ionicons name="home-outline" size={26} />
        </TouchableOpacity>
      </View>

      {/* Cart Items */}
      {cart.length > 0 ? (
        <GestureHandlerRootView>
          <FlatList
            contentContainerStyle={{
              justifyContent: "center",
              alignItems: "center",
            }}
            data={cart}
            renderItem={({ item, index }) => (
              <Swipeable renderRightActions={() => renderRightActions(index)}>
                <View className="bg-gray-200 justify-between flex-row rounded-3xl my-2 w-full px-5 py-5">
                  <View className="flex-row gap-x-3">
                    <Image
                      source={imageMap[item.name as keyof typeof imageMap]}
                      className="w-20 h-20"
                      resizeMode="contain"
                    ></Image>
                    <View className="justify-center">
                      <Text className="text-lg font-bold">{item.name}</Text>
                      <Text className="font-light text-sm py-2">
                        {item.size} | {item.shot} | {item.ice}
                      </Text>
                      <Text className="text-gray-500 pt-1 font-semibold">
                        x {item.quantity}
                      </Text>
                    </View>
                  </View>
                  <View className="justify-center items-center">
                    <Text className=" text-teal-800 font-semibold text-xl">
                      ${item.totalAmount.toFixed(2)}
                    </Text>
                  </View>
                </View>
              </Swipeable>
            )}
            keyExtractor={(_, index) => index.toString()}
          />
        </GestureHandlerRootView>
      ) : (
        <Text className="text-center text-gray-600 mt-20">
          Your cart is empty.
        </Text>
      )}

      {cart.length > 0 && (
        <View className="bg-white py-4 px-6 shadow-lg">
          {/* Hiển thị thông tin mã giảm giá */}
          <TouchableOpacity
            className="flex-row justify-between items-center mb-4"
            onPress={() => {
              if (appliedCoupon) {
                clearCoupon(); // Xóa mã giảm giá
                Alert.alert(
                  "Coupon Removed",
                  "Your discount has been removed."
                );
              } else {
                router.push("/coupon"); // Điều hướng đến trang chọn coupon
              }
            }}
          >
            <Text className="text-lg font-semibold text-gray-800">
              {appliedCoupon
                ? `Coupon Applied: ${appliedCoupon}`
                : "Apply a Coupon"}
            </Text>
            <Ionicons
              name={
                appliedCoupon
                  ? "close-circle-outline"
                  : "chevron-forward-outline"
              }
              size={22}
              color="teal"
            ></Ionicons>
          </TouchableOpacity>

          {/* Hiển thị tổng tiền */}
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-lg font-bold text-gray-800">Total Price</Text>
            <Text className="text-lg font-bold text-gray-800">
              {appliedCoupon ? appliedPrice.toFixed(2) : totalPrice.toFixed(2)}
            </Text>
          </View>

          <TouchableOpacity
            className="bg-teal-800 py-3 rounded-lg"
            onPress={handleCheckout}
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
