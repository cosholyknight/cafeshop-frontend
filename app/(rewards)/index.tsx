import { useRewardsStore } from "@/store/rewardsStore";
import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";

const RewardsScreen = () => {
  const rewardsHistory = [
    { name: "Americano", date: "24 June | 12:30 PM", points: 12 },
    { name: "Cafe Latte", date: "22 June | 08:30 AM", points: 12 },
    { name: "Green Tea Latte", date: "16 June | 10:48 AM", points: 12 },
    { name: "Flat White", date: "12 May | 11:25 AM", points: 12 },
  ];

  const { loyaltyCards, points, clearLoyalty } = useRewardsStore();
  return (
    <ScrollView
      className="flex-1 bg-white px-4 py-6 item-center"
      contentContainerStyle={{ alignItems: "center" }}
    >
      {/* Header */}
      <View className="items-center mb-6">
        <Text className="text-xl font-bold text-gray-900">Rewards</Text>
      </View>
      {/* Loyalty Card */}
      <View className="bg-teal-800 rounded-3xl px-6 py-4 mb-6 h-36 w-full">
        <View className="flex-row justify-between items-center">
          <Text className="text-base font-semibold text-gray-200 mb-2 pr-5">
            Loyalty card
          </Text>
          <Text className="text-base font-semibold text-gray-200 ">
            {loyaltyCards}/8
          </Text>
        </View>
        <TouchableOpacity
          onPress={clearLoyalty}
          className="flex-row justify-between mt-2 bg-white p-5  rounded-2xl"
        >
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
        </TouchableOpacity>
      </View>
      {/* Points Section */}
      <View className="bg-teal-800 rounded-2xl p-4 mb-6 w-full h-36 flex-row justify-between items-center">
        <View className="pl-5">
          <Text className="py-2 text-white text-l font-semibold">
            My Points:
          </Text>
          <Text className="text-white text-3xl font-bold">{points}</Text>
        </View>

        <TouchableOpacity className="bg-teal-700 px-4 py-2 rounded-lg">
          <Text className="text-white font-medium">Redeem drinks</Text>
        </TouchableOpacity>
      </View>
      {/* History Rewards Section */}
      <View>
        <Text className="text-gray-900 text-lg font-bold mb-4">
          History Rewards
        </Text>
        {rewardsHistory.map((reward, index) => (
          <View
            key={index}
            className="flex-row justify-between items-center py-3 border-b border-gray-200 w-full"
          >
            <View>
              <Text className="text-gray-900 text-base font-medium">
                {reward.name}
              </Text>
              <Text className="text-gray-500 text-sm">{reward.date}</Text>
            </View>
            <Text className="text-blue-900 text-base font-bold">
              + {reward.points} Pts
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default RewardsScreen;
