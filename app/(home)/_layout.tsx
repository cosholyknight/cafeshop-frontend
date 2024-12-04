import { Stack } from "expo-router";

export default function HomeLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }} initialRouteName="index">
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="cart" options={{ title: "Your Cart" }} />
      <Stack.Screen
        name="details"
        options={{
          title: "Details",
        }}
      />
      <Stack.Screen name="ordersuccess" options={{ title: "Success" }} />
      <Stack.Screen name="profile" options={{ title: "Your Profile" }} />
    </Stack>
  );
}
