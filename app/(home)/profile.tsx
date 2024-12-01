import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { AntDesign, Feather, FontAwesome6 } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useProfileStore } from "@/store/profileStore";

const ProfileScreen = () => {
  const router = useRouter();

  // Truy xuất state từ profileStore
  const {
    name,
    phone,
    email,
    address,
    changeName,
    changePhone,
    changeEmail,
    changeAddress,
  } = useProfileStore();

  const [editingField, setEditingField] = useState<string | null>(null);
  const [tempValue, setTempValue] = useState<string>("");

  const handleEdit = (field: string, value: string) => {
    setEditingField(field);
    setTempValue(value);
  };

  const handleSave = () => {
    if (editingField) {
      switch (editingField) {
        case "name":
          changeName(tempValue);
          break;
        case "phone":
          changePhone(tempValue);
          break;
        case "email":
          changeEmail(tempValue);
          break;
        case "address":
          changeAddress(tempValue);
          break;
      }
      setEditingField(null);
    }
  };

  const renderField = (
    icon: React.ReactNode,
    label: string,
    value: string,
    fieldKey: string
  ) => {
    const isEditing = editingField === fieldKey;

    return (
      <View className="mb-5 flex-row items-start gap-x-4">
        <View className="p-3 bg-gray-200 rounded-full">{icon}</View>
        <View className="w-72">
          <Text className="text-gray-600 font-light mb-1">{label}</Text>
          {isEditing ? (
            <TextInput
              value={tempValue}
              onChangeText={setTempValue}
              className="bg-white border border-gray-300 font-bold rounded-lg px-4 py-2 text-gray-800"
            />
          ) : (
            <Text className="text-teal-800 flex-wrap font-bold">{value}</Text>
          )}
        </View>
        <View className="">
          {isEditing ? (
            <TouchableOpacity
              onPress={handleSave}
              className="py-3 px-3 mt-5 border-2 border-gray-600 rounded-2xl"
            >
              <Text className="text-gray-600">Save</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => handleEdit(fieldKey, value)}
              className="mt-4 ml-5"
            >
              <FontAwesome6 name="edit" size={24} color="black" />
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  };

  return (
    <View className="flex-1 bg-white pt-10 px-5">
      <View className="flex-row justify-between pb-20">
        <TouchableOpacity onPress={() => router.back()}>
          <AntDesign name="back" size={30} color="black" />
        </TouchableOpacity>
        <Text className="text-3xl font-bold text-teal-800 items-center mr-5">
          Profile
        </Text>
        <Text></Text>
      </View>

      {/* Full Name */}
      {renderField(
        <Feather name="user" size={30} />,
        "Full Name",
        name,
        "name"
      )}

      {/* Phone Number */}
      {renderField(
        <Feather name="phone-call" size={30} />,
        "Phone Number",
        phone,
        "phone"
      )}

      {/* Email */}
      {renderField(<Feather name="mail" size={30} />, "Email", email, "email")}

      {/* Address */}
      {renderField(
        <Feather name="map-pin" size={30} />,
        "Address",
        address,
        "address"
      )}
    </View>
  );
};

export default ProfileScreen;
