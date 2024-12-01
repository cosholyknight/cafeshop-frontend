import React, { useContext, useMemo, useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";
import { CartContext } from "@/contexts/CartContext";
import { CartItem } from "@/types/CartItem";
import OptionCard from "@/components/OptionCard";

export default function DetailsScreen() {
  const params = useLocalSearchParams();
  const router = useRouter();

  const { addToCart } = useContext(CartContext)!;

  const imageMap = {
    Americano: require("../../assets/americano.png"),
    Cappuccino: require("../../assets/cappuccino.png"),
    Mocha: require("../../assets/mocha.png"),
    "Flat White": require("../../assets/flatwhite.png"),
  };

  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("Small");
  const [shot, setShot] = useState("Single");
  const [ice, setIce] = useState("None");

  const handleIncrement = () => setQuantity(quantity + 1);

  const handleDecrement = () => quantity > 1 && setQuantity(quantity - 1);

  const handleAddToCart = () => {
    const cartItem: CartItem = {
      name: params.name as string,
      quantity,
      size,
      shot,
      ice,
      totalAmount: totalAmount,
    };
    addToCart(cartItem);
    router.push({
      pathname: "./cart",
    });
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

  const totalAmount = useMemo(() => {
    let basePrice = Number(params.price);
    if (size === "Medium") basePrice += 1;
    if (size === "Large") basePrice += 2;
    if (shot === "Double") basePrice += 1;

    return basePrice * quantity;
  }, [size, shot, quantity, params.price]);

  return (
    <View className="flex-1 bg-gray-100">
      <View className="flex-row justify-between items-center px-6 py-4">
        <TouchableOpacity onPress={() => router.back()}>
          <AntDesign name="back" size={30} color="black" />
        </TouchableOpacity>
        <Text className="text-2xl font-bold text-teal-800 mr-3">Details</Text>
        <TouchableOpacity onPress={() => router.push("/(home)/cart")}>
          <Feather name="shopping-cart" size={26} />
        </TouchableOpacity>
      </View>

      <View className="mt-5 items-center bg-">
        <View className="w-96 h-64 bg-gray-200 justify-center items-center rounded-3xl">
          <Image
            source={imageMap[params.name as keyof typeof imageMap]}
            className="w-60 h-60 mb-4"
            resizeMode="contain"
          />
        </View>
        <Text className="text-2xl font-bold text-teal-800 pt-10">
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

        <View className="flex-row items-center justify-between mb-4">
          <Text className="text-gray-800">Size</Text>
          <View className="flex-row gap-x-2">
            {["Small", "Medium", "Large"].map((option) => (
              <OptionCard
                key={option}
                object={size}
                option={option}
                handleChange={handleSizeChange}
              />
            ))}
          </View>
        </View>

        {/* Shot */}
        <View className="flex-row items-center justify-between mb-4">
          <Text className="text-gray-800">Shot</Text>
          <View className="flex-row gap-x-2">
            {["Single", "Double"].map((option) => (
              <OptionCard
                key={option}
                object={shot}
                option={option}
                handleChange={handleShotChange}
              />
            ))}
          </View>
        </View>

        {/* Đá */}
        <View className="flex-row items-center justify-between mb-4">
          <Text className="text-gray-800">Ice</Text>
          <View className="flex-row gap-x-2">
            {["None", "Light", "Regular", "Extra"].map((option) => (
              <OptionCard
                key={option}
                object={ice}
                option={option}
                handleChange={handleIceChange}
              />
            ))}
          </View>
        </View>

        <View className="bg-gray-200 px-4 py-3 rounded-lg mt-20">
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
          className="bg-teal-800 py-3 rounded-lg"
          onPress={handleAddToCart}
        >
          <Text className="text-white font-bold text-center">Add to cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
