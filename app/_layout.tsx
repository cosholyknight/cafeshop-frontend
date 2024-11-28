import { Slot, Stack, Tabs } from "expo-router";
import { Colors, Header } from "react-native/Libraries/NewAppScreen";
import { Ionicons } from "@expo/vector-icons";

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.primary,
      }}
    >
      <Tabs.Screen
        name="(home)"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <Ionicons name="home-outline" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="(rewards)"
        options={{
          tabBarLabel: "Rewards",
          tabBarIcon: ({ color }) => (
            <Ionicons name="gift-outline" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="(myOrder)"
        options={{
          tabBarLabel: "My Order",
          tabBarIcon: ({ color }) => (
            <Ionicons name="receipt-outline" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
