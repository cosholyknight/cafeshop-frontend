import React, { useEffect } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import "../../global.css";
import { useRouter } from "expo-router";
import { Feather, Ionicons } from "@expo/vector-icons";
import { useRewardsStore } from "@/store/rewardsStore";
import { useProfileStore } from "@/store/profileStore";

const HomeScreen = () => {
  const router = useRouter();
  const { loyaltyCards, points, clearLoyalty } = useRewardsStore();
  const { name } = useProfileStore();
  return (
    <ScrollView className="flex-1 bg-gray-100">
      {/* Header */}
      <View className="flex-row justify-between items-center px-6 py-4">
        <View>
          <Text className="text-xl font-light text-gray-800">
            Good morning,
          </Text>
          <Text className="text-3xl font-bold text-gray-800">{name}</Text>
        </View>
        <View className="flex-row gap-x-4">
          <TouchableOpacity
            onPress={() =>
              router.push({
                pathname: "./cart",
              })
            }
          >
            <Feather name="shopping-cart" size={30} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              router.push({
                pathname: "./profile",
              })
            }
          >
            <Feather name="user" size={30} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Loyalty Card */}
      <View className="bg-teal-800 rounded-3xl p-4 mx-6 mt-6 h-36">
        <View className="flex-row justify-between items-center">
          <Text className="text-base font-semibold text-gray-200 mb-2 pr-5">
            Loyalty card
          </Text>
          <Text className="text-base font-semibold text-gray-200 ">
            {loyaltyCards}/8
          </Text>
        </View>
        <View className="flex-row justify-between mt-2 bg-white p-5 rounded-2xl">
          {[...Array(8)].map((_, index) => (
            <Image
              resizeMode="contain"
              key={index}
              source={
                index < loyaltyCards
                  ? require("../../assets/cup_filled.png")
                  : require("../../assets/cup_empty.png")
              }
              className="w-8 h-8"
            />
          ))}
        </View>
      </View>

      {/* Choose Your Coffee */}
      <View className="mt-20 bg-teal-800 pt-5 pb-36 rounded-t-3xl flex-1">
        <Text className="text-lg font-bold text-gray-200 px-6 mb-5">
          Choose your coffee
        </Text>
        <View className="flex-row flex-wrap justify-between px-6">
          {[
            {
              name: "Americano",
              image: require("../../assets/americano.png"),
              price: 3,
            },
            {
              name: "Cappuccino",
              image: require("../../assets/cappuccino.png"),
              price: 4,
            },
            {
              name: "Mocha",
              image: require("../../assets/mocha.png"),
              price: 5,
            },
            {
              name: "Flat White",
              image: require("../../assets/flatwhite.png"),
              price: 6,
            },
          ].map((coffee, index) => (
            <TouchableOpacity
              key={index}
              className="bg-gray-100 w-[47%] h-48 mb-4 rounded-lg p-4 items-center"
              onPress={() =>
                router.push({
                  pathname: "./details",
                  params: coffee,
                })
              }
            >
              <Image
                source={coffee.image}
                className="w-36 h-36"
                resizeMode="contain"
              />
              <Text className="text-sm font-semibold text-gray-700">
                {coffee.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
