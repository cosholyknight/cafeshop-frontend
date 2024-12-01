import { View, TouchableOpacity, Text } from "react-native";

import "../global.css";

const TabBarOrder = (props) => {
  const { state, descriptors, navigation } = props;

  const primaryColor = "#00695C";
  const greyColor = "#737373";

  return (
    <View className=" absolute top-20 flex-row mx-6 items-center rounded-2xl self-center border-b border-gray-200">
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        if (["_sitemap", "+not-found"].includes(route.name)) return null;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={route.name}
            className="flex-1 items-center justify-center"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
          >
            <Text
              className="text-xl font-bold p-4"
              style={{
                color: isFocused ? primaryColor : greyColor,
                borderBottomColor: primaryColor,
                borderBottomWidth: isFocused ? 2 : 0,
              }}
            >
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TabBarOrder;
