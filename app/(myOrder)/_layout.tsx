import { View, Text } from "react-native";
import React from "react";
import { Stack, Tabs } from "expo-router";

const MyOrderLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarPosition: "top",
      }}
    ></Tabs>
  );
};

export default MyOrderLayout;
