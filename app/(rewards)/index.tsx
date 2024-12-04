import { useRewardsStore } from "@/store/rewardsStore";
import { useRouter } from "expo-router";
import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";

const RewardsScreen = () => {
  const router = useRouter();
  const { historyRewards } = useRewardsStore();

  const dateOptions: Intl.DateTimeFormatOptions = {
    month: "long",
    day: "numeric",
  };

  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };
  const { loyaltyCards, points, clearLoyalty } = useRewardsStore();
  return (
    <ScrollView
      className="flex-1 bg-gray-100 px-4 py-6 item-center"
      contentContainerStyle={{ alignItems: "center" }}
    >
      {/* Header */}
      <View className="items-center mb-6">
        <Text className="text-3xl font-bold text-teal-800">Rewards</Text>
      </View>
      {/* Loyalty Card */}
      <View className="bg-teal-800 rounded-3xl px-6 py-4 mb-6 h-36 w-full">
        <View className="flex-row justify-between items-center">
          <Text className="text-base font-semibold text-gray-200 mb-2 pr-5">
            Loyalty card
          </Text>
          <Text className="text-base font-semibold text-gray-200 ">
            {Math.min(loyaltyCards, 8)}/8
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
        <View className="pl-2">
          <Text className="py-2 text-gray-200 text-base font-semibold">
            My Points:
          </Text>
          <Text className="text-gray-200 text-3xl font-bold">{points}</Text>
        </View>

        <TouchableOpacity
          onPress={() => router.push("./redeem")}
          className="bg-teal-700 px-4 py-2 rounded-lg"
        >
          <Text className="text-white font-medium">Redeem drinks</Text>
        </TouchableOpacity>
      </View>
      {/* History Rewards Section */}
      <View>
        <Text className="text-teal-800 text-lg font-bold mb-4">
          History Rewards
        </Text>
        {historyRewards.map((reward, index) => (
          <View
            key={index}
            className="flex-row justify-between items-center py-3 border-b-hairline border-gray-300 w-full"
          >
            <View>
              <Text className="text-gray-900 text-base font-medium py-2">
                {reward.name} x{reward.quantity}
              </Text>
              <Text className="text-gray-500 text-sm">
                {new Date().toLocaleDateString("en-US", dateOptions)} |{" "}
                {new Date().toLocaleTimeString("en-US", timeOptions)}
              </Text>
            </View>
            <Text className="text-blue-900 text-base font-bold">
              + {reward.totalAmount * 4} Pts
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default RewardsScreen;
