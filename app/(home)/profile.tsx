import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

const ProfileScreen = () => {
  const [fullName, setFullName] = useState("Anderson");
  const [phoneNumber, setPhoneNumber] = useState("+6013458925");
  const [email, setEmail] = useState("Anderson@email.com");
  const [address, setAddress] = useState(
    "3 Adderslon Court, Chino Hills, HO56824, United State"
  );

  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <View className="flex-1 bg-white pt-20 px-5">
      <View className="items-center pb-20">
        <Text className="text-3xl font-bold text-gray-800 items-center">
          Profile
        </Text>
      </View>

      <View className="mb-4 flex-row items-start gap-x-5">
        <View className="p-3 bg-gray-200 rounded-full">
          <Feather name="user" size={30} />
        </View>

        <View className="w-80">
          <Text className="text-gray-600 font-light mb-1">Full Name</Text>
          {isEditing ? (
            <TextInput
              value={fullName}
              onChangeText={setFullName}
              className="bg-white border border-gray-300 font-bold rounded-lg px-4 py-2 text-gray-800"
            />
          ) : (
            <Text className="text-gray-800 flex-wrap font-bold">
              {fullName}
            </Text>
          )}
        </View>
      </View>

      <View className="mb-4 flex-row items-start gap-x-5">
        <View className="p-3 bg-gray-200 rounded-full">
          <Feather name="phone-call" size={30} />
        </View>
        <View className="w-80">
          <Text className="text-gray-600 font-light mb-1">Phone Number</Text>
          {isEditing ? (
            <TextInput
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              className="bg-white border border-gray-300 font-bold rounded-lg px-4 py-2 text-gray-800"
            />
          ) : (
            <Text className="text-gray-800 flex-wrap font-bold">
              {phoneNumber}
            </Text>
          )}
        </View>
      </View>

      <View className="mb-4 flex-row items-start gap-x-5">
        <View className="p-3 bg-gray-200 rounded-full">
          <Feather name="mail" size={30} />
        </View>
        <View className="w-80">
          <Text className="text-gray-600 font-light mb-1">Email</Text>
          {isEditing ? (
            <TextInput
              value={email}
              onChangeText={setEmail}
              className="bg-white border border-gray-300 font-bold rounded-lg px-4 py-2 text-gray-800"
            />
          ) : (
            <Text className="text-gray-800 font-bold flex-wrap">{email}</Text>
          )}
        </View>
      </View>

      <View className="mb-4 flex-row items-start gap-x-5">
        <View className="p-3 bg-gray-200 rounded-full">
          <Feather name="navigation" size={30} />
        </View>
        <View className="w-80">
          <Text className="text-gray-600 font-light mb-1">Address</Text>
          {isEditing ? (
            <TextInput
              value={address}
              onChangeText={setAddress}
              className="bg-white border border-gray-300 font-bold rounded-lg px-4 py-2 text-gray-800"
            />
          ) : (
            <Text className="text-gray-800 font-bold flex-wrap">{address}</Text>
          )}
        </View>
      </View>
      <View className="flex-row justify-center items-center my-20">
        {isEditing ? (
          <TouchableOpacity onPress={handleSave}>
            <Text className="text-xl text-gray-800 font-medium border-gray-500 border-2 rounded-3xl p-3">
              Save
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={handleEdit}
            className="flex-row gap-x-3 mr-5 border-gray-500 border-2 rounded-3xl p-3"
          >
            <Feather name="edit" size={30} />
            <Text className="text-xl text-gray-800 font-medium">Edit</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default ProfileScreen;
