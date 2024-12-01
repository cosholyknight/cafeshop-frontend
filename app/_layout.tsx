import { Tabs } from "expo-router";
import TabBar from "@/components/TabBar";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

export default function RootLayout() {
  const getTabBarVisibility = (route) => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName == "index") return true;
    else return false;
  };
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
      })}
      tabBar={(props) => <TabBar {...props} />}
    >
      <Tabs.Screen
        name="(home)"
        options={({ route }) => ({
          tabBarLabel: "Home",
          tabBarVisible: getTabBarVisibility(route),
        })}
      />

      <Tabs.Screen
        name="(rewards)"
        options={{
          tabBarLabel: "Rewards",
        }}
      />

      <Tabs.Screen
        name="(myOrder)"
        options={{
          tabBarLabel: "My Order",
        }}
      />
    </Tabs>
  );
}
