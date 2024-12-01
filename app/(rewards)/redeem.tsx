import { View, Text, TouchableOpacity, ScrollView, Alert } from "react-native";
import React from "react";
import { Image } from "react-native";
import { useRouter } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import { useRewardsStore } from "@/store/rewardsStore";

const redeem = () => {
  const router = useRouter();
  const imageMap = {
    Americano: require("../../assets/americano.png"),
    Cappuccino: require("../../assets/cappuccino.png"),
    Mocha: require("../../assets/mocha.png"),
    "Flat White": require("../../assets/flatwhite.png"),
  };

  const { points, redeemPoints } = useRewardsStore();

  const handleRedeemPoints = (name, neededPoints) => {
    if (neededPoints < points) {
      redeemPoints(neededPoints);
      Alert.alert(`You earned one ${name}`);
    } else {
      Alert.alert(`You need more points to earn ${name}`);
    }
  };

  const RedeemCard = ({ name, neededPoints }) => {
    return (
      <View className="flex-row items-center">
        <Image
          source={imageMap[name]}
          resizeMode="contain"
          className="w-28 h-28 ml-7"
        />
        <View className="ml-4">
          <Text className="text-lg font-semibold mb-2">{name}</Text>
          <Text className="text-sm font-light">Valid until 04.07.25</Text>
        </View>
        <TouchableOpacity
          onPress={() => handleRedeemPoints(name, neededPoints)}
          className="py-4 px-5 ml-10 bg-teal-800 rounded-3xl"
        >
          <Text className="text-gray-200 ">{neededPoints} pts</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View>
      <View className="flex-row justify-between items-center px-6 py-4">
        <TouchableOpacity onPress={() => router.back()}>
          <AntDesign name="back" size={30} color="black" />
        </TouchableOpacity>
        <Text className="text-xl font-bold text-teal-800 mr-8">Redeem</Text>
        <Text></Text>
      </View>
      <ScrollView>
        <RedeemCard name="Americano" neededPoints="1000" />
        <RedeemCard name="Cappuccino" neededPoints="1100" />
        <RedeemCard name="Mocha" neededPoints="1200" />
        <RedeemCard name="Flat White" neededPoints="1300" />
      </ScrollView>
    </View>
  );
};

export default redeem;
