import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import "../global.css";
import { useRouter } from "expo-router";

const HomeScreen = () => {
  const router = useRouter();

  return (
    <ScrollView className="flex-1 bg-white">
      {/* Header */}
      <View className="flex-row justify-between items-center px-6 py-4">
        <View>
          <Text className="text-xl font-bold text-gray-800">Good morning,</Text>
          <Text className="text-3xl font-bold text-gray-800">Anderson</Text>
        </View>
        <View className="flex-row gap-x-4">
          <TouchableOpacity>
            <Image
              resizeMode="contain"
              source={require("../assets/icons/cart.png")}
              className="w-9 h-9"
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              router.push({
                pathname: "./Profile",
              })
            }
          >
            <Image
              resizeMode="contain"
              source={require("../assets/icons/profile.png")}
              className="w-8 h-8"
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Loyalty Card */}
      <View className="bg-gray-300 rounded-3xl p-4 mx-6 mb-6">
        <View className="flex-row justify-between items-center">
          <Text className="text-base font-semibold text-gray-700 mb-2 pr-5">
            Loyalty card
          </Text>
          <Text className="text-base font-semibold text-gray-700 ">4/8</Text>
        </View>
        <View className="flex-row justify-between mt-2 bg-white p-5">
          {[...Array(8)].map((_, index) => (
            <Image
              resizeMode="contain"
              key={index}
              source={
                index < 4
                  ? require("../assets/cup_filled.png")
                  : require("../assets/cup_empty.png")
              }
              className="w-8 h-8"
            />
          ))}
        </View>
      </View>

      {/* Choose Your Coffee */}
      <View className="mt-20 bg-gray-300 pt-5 pb-20 rounded-t-3xl">
        <Text className="text-lg font-bold text-gray-800 px-6 mb-4">
          Choose your coffee
        </Text>
        <View className="flex-row flex-wrap justify-between px-6">
          {[
            {
              name: "Americano",
              image: require("../assets/americano.png"),
              price: 3,
            },
            {
              name: "Cappuccino",
              image: require("../assets/cappuccino.png"),
              price: 4,
            },
            { name: "Mocha", image: require("../assets/mocha.png"), price: 5 },
            {
              name: "Flat White",
              image: require("../assets/flatwhite.png"),
              price: 6,
            },
          ].map((coffee, index) => (
            <TouchableOpacity
              key={index}
              className="bg-gray-100 w-[47%] mb-4 rounded-lg p-4 items-center"
              onPress={() =>
                router.push({
                  pathname: "/Details",
                  params: coffee,
                })
              }
            >
              <Image
                source={coffee.image}
                className="w-24 h-24 mb-3"
                resizeMode="contain"
              />
              <Text className="text-sm font-semibold text-gray-700">
                {coffee.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <View className="flex-row bg-white p-10 mx-10 rounded-3xl mt-10"></View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
