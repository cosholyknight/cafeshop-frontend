import { View, Text } from "react-native";
import React from "react";
import { Stack, Tabs } from "expo-router";
import TabBarOrder from "@/components/TabBarOrder";

const MyOrderLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
      tabBar={(props) => <TabBarOrder {...props} />}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "On going",
        }}
      />

      <Tabs.Screen
        name="history"
        options={{
          tabBarLabel: "History",
        }}
      />
    </Tabs>
  );
};

export default MyOrderLayout;
