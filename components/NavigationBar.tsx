import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

type NavItemProps = {
  icon: JSX.Element;
  isActive: boolean;
  onPress: () => void;
};

function NavItem({ icon, isActive, onPress }: NavItemProps) {
  return (
    <TouchableOpacity onPress={onPress} className="items-center">
      <View>
        {React.cloneElement(icon, {
          color: isActive ? "#4A90E2" : "#888",
          size: 28,
        })}
      </View>
    </TouchableOpacity>
  );
}

export default function NavigationBar({
  activeScreen,
}: {
  activeScreen: string;
}) {
  const router = useRouter();

  return (
    <View className="flex-row justify-between rounded-3xl bg-white py-4 px-6 w-96">
      <NavItem
        icon={<Ionicons name="home-outline" />}
        isActive={activeScreen === "home"}
        onPress={() => router.push("/Cart")}
      />
      <NavItem
        icon={<Ionicons name="gift-outline" />}
        isActive={activeScreen === "rewards"}
        onPress={() => router.push("/Cart")}
      />
      <NavItem
        icon={<Ionicons name="receipt-outline" />}
        isActive={activeScreen === "orders"}
        onPress={() => router.push("/Cart")}
      />
    </View>
  );
}
