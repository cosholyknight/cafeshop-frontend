import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const OptionCard = ({ object, option, handleChange }) => {
  return (
    <TouchableOpacity
      onPress={() => handleChange(option)}
      className={`py-2 rounded-lg w-20 items-center justify-center ${
        object === option ? "bg-teal-800" : "bg-gray-200"
      }`}
    >
      <Text className={`${object === option ? "text-white " : ""}`}>
        {option}
      </Text>
    </TouchableOpacity>
  );
};

export default OptionCard;
