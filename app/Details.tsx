import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { AntDesign } from "@expo/vector-icons";

export default function DetailsScreen() {
  const params = useLocalSearchParams();
  const router = useRouter();

  // Mapping hình ảnh
  const imageMap = {
    Americano: require("../assets/americano.png"),
    Cappuccino: require("../assets/cappuccino.png"),
    Mocha: require("../assets/mocha.png"),
    "Flat White": require("../assets/flatwhite.png"),
  };

  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("Small");
  const [shot, setShot] = useState("Single");
  const [ice, setIce] = useState("None");

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleSizeChange = (newSize: string) => {
    setSize(newSize);
  };

  const handleShotChange = (newShot: string) => {
    setShot(newShot);
  };

  const handleIceChange = (newIce: string) => {
    setIce(newIce);
  };

  const totalAmount = Number(params.price) * quantity;

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-row justify-between items-center px-6 py-4">
        <TouchableOpacity onPress={() => router.back()}>
          <AntDesign name="back" size={30} color="black" />
        </TouchableOpacity>
        <Text className="text-xl font-bold text-black">Details</Text>
        <Image
          source={require("../assets/icons/cart.png")}
          className="w-8 h-8"
        ></Image>
      </View>

      <View className="mt-5 items-center bg-">
        <View className="w-96 h-64 bg-gray-200 justify-center items-center rounded-3xl">
          <Image
            source={imageMap[params.name as keyof typeof imageMap]}
            className="w-40 h-40 mb-4"
            resizeMode="contain"
          />
        </View>
        <Text className="text-2xl font-bold text-gray-800 pt-10">
          {params.name}
        </Text>
        <Text className="text-lg text-gray-600 mt-2">
          ${Number(params.price).toFixed(2)}
        </Text>
      </View>

      <View className="px-6 py-2">
        {/* Số lượng */}
        <View className="flex-row items-center justify-between mb-4">
          <Text className="text-gray-800">Quantity</Text>
          <View className="flex-row items-center bg-gray-100 px-2 border-gray-500 border-2 rounded-3xl">
            <TouchableOpacity onPress={handleDecrement}>
              <Text className="text-3xl text-gray-800 mr-5 pl-1">-</Text>
            </TouchableOpacity>
            <Text className="text-xl text-gray-800">{quantity}</Text>
            <TouchableOpacity onPress={handleIncrement}>
              <Text className="text-xl text-gray-800 ml-5">+</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Kích cỡ */}
        <View className="flex-row items-center justify-between mb-4">
          <Text className="text-gray-800">Size</Text>
          <View className="flex-row gap-x-2">
            <TouchableOpacity
              onPress={() => handleSizeChange("Small")}
              className={`px-4 py-2 rounded-lg ${
                size === "Small" ? "bg-gray-500 text-white" : "bg-gray-200"
              }`}
            >
              <Text>Small</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleSizeChange("Medium")}
              className={`px-4 py-2 rounded-lg ${
                size === "Medium" ? "bg-gray-500 text-white" : "bg-gray-200"
              }`}
            >
              <Text>Medium</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleSizeChange("Large")}
              className={`px-4 py-2 rounded-lg ${
                size === "Large" ? "bg-gray-500 text-white" : "bg-gray-200"
              }`}
            >
              <Text>Large</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Shot */}
        <View className="flex-row items-center justify-between mb-4">
          <Text className="text-gray-800">Shot</Text>
          <View className="flex-row gap-x-2">
            <TouchableOpacity
              onPress={() => handleShotChange("Single")}
              className={`px-4 py-2 rounded-lg ${
                shot === "Single" ? "bg-gray-500 text-white" : "bg-gray-200"
              }`}
            >
              <Text>Single</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleShotChange("Double")}
              className={`px-3 py-2 rounded-lg ${
                shot === "Double" ? "bg-gray-500 text-white" : "bg-gray-200"
              }`}
            >
              <Text>Double</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Đá */}
        <View className="flex-row items-center justify-between mb-4">
          <Text className="text-gray-800">Ice</Text>
          <View className="flex-row gap-x-2">
            <TouchableOpacity
              onPress={() => handleIceChange("None")}
              className={`px-4 py-2 rounded-lg ${
                ice === "None" ? "bg-gray-500 text-white" : "bg-gray-200"
              }`}
            >
              <Text>None</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleIceChange("Light")}
              className={`px-4 py-2 rounded-lg ${
                ice === "Light" ? "bg-gray-500 text-white" : "bg-gray-200"
              }`}
            >
              <Text>Light</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleIceChange("Regular")}
              className={`px-4 py-2 rounded-lg ${
                ice === "Regular" ? "bg-gray-500 text-white" : "bg-gray-200"
              }`}
            >
              <Text>Regular</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleIceChange("Extra")}
              className={`px-5 py-2 rounded-lg ${
                ice === "Extra" ? "bg-gray-500 text-white" : "bg-gray-200"
              }`}
            >
              <Text>Extra</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="bg-gray-200 px-4 py-3 rounded-lg mt-36">
          <View className="flex-row justify-between items-center">
            <Text className="text-gray-800 font-bold">Total Amount</Text>
            <Text className="text-gray-800 font-bold">
              ${totalAmount.toFixed(2)}
            </Text>
          </View>
        </View>
      </View>

      <View className="px-6 mt-2">
        <TouchableOpacity
          className="bg-gray-800 py-3 rounded-lg"
          onPress={() => {
            // Add to cart logic goes here
          }}
        >
          <Text className="text-white font-bold text-center">Add to cart</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
