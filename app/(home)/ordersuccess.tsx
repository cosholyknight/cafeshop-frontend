import { View, Image, Text, TouchableOpacity } from "react-native";
import React from "react";
import { router } from "expo-router";

const OrderSuccess = () => {
  return (
    <View className="flex-1 items-center">
      <View className="mt-48">
        <Image
          source={require("../../assets/takeaway.png")}
          resizeMode="cover"
          className="w-56 h-56"
        ></Image>
      </View>
      <View className="items-center justify-center">
        <Text className="text-2xl text-teal-800 font-bold pt-10 pb-10">
          Order Success
        </Text>
        <Text className="font-light">
          Your order has been placed successfully.
        </Text>
        <Text className="font-light">For more details, go to my orders</Text>
      </View>
      <View className="bg-teal-800 rounded-full mt-20 w-80 items-center justify-center">
        <TouchableOpacity onPress={() => router.push("../(myOrder)")}>
          <Text className="text-lg text-gray-200 p-3">Track My Order</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OrderSuccess;
