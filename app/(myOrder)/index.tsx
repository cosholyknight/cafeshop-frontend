import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useOrderStore } from "@/store/orderStore";
import MyOrder from "@/components/MyOrder";
import { Feather } from "@expo/vector-icons";
import { useProfileStore } from "@/store/profileStore";

export default function MyOrderScreen() {
  const { items, removeFromOrder } = useOrderStore();
  const { address } = useProfileStore();
  const dateOptions: Intl.DateTimeFormatOptions = {
    month: "long",
    day: "numeric",
  };

  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };

  const handlePress = (index) => {
    removeFromOrder(index);
  };
  return (
    <View className="bg-gray-100">
      <MyOrder />
      <View className="flex-1 absolute top-40 w-full">
        {items.length > 0 ? (
          <FlatList
            data={items}
            renderItem={({ item, index }) => (
              <TouchableOpacity onPress={() => handlePress(index)}>
                <View className=" bg-gray-100 border-b-hairline border-gray-400 p-5 m-2 rounded-lg">
                  <View className="flex-row justify-between">
                    <Text className="font-light text-sm">
                      {new Date().toLocaleDateString("en-US", dateOptions)} |{" "}
                      {new Date().toLocaleTimeString("en-US", timeOptions)}
                    </Text>
                    <Text className="text-gray-800 text-xl font-bold">
                      {item.totalAmount.toFixed(2)}$
                    </Text>
                  </View>
                  <View className="flex-row justify-between p-2">
                    <View className="flex-row items-center gap-x-3">
                      <Feather name="coffee" size={20} color={"#424242"} />
                      <Text className="text-gray-800 font-medium">
                        {item.name}
                      </Text>
                      <Text className="text-gray-800 font-light">
                        x{item.quantity}
                      </Text>
                    </View>
                  </View>
                  <View className="flex-row justify-between p-2">
                    <View className="flex-row items-center gap-x-3">
                      <Feather name="map-pin" size={20} color={"#424242"} />
                      <Text className="text-gray-800 font-medium">
                        {address}
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={(_, index) => index.toString()}
          />
        ) : (
          <Text className="text-center text-gray-600 mt-20">
            No ongoing orders yet.
          </Text>
        )}
      </View>
    </View>
  );
}
