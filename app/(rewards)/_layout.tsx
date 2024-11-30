import React from "react";
import { Stack } from "expo-router";

const RewardsLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="index"
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="redeem" />
    </Stack>
  );
};

export default RewardsLayout;
