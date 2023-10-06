import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
const Card = ({ data }) => {
  return (
    <View className="mb-4">
      <View className="h-auto w-96 flex bg-white rounded-lg shadow-md p-2 ">
        <View>
          <Image
            source={{ uri: data?.cardImage }}
            className="w-full h-60 object-fill rounded-xl"
          />
        </View>
        <View className="p-2 flex flex-col justify-start items-start border-b border-gray-300">
          <View>
            <Text className="p-1 text-xs font-medium text-gray-900">
              {data.location}
            </Text>
          </View>
          <View>
            <Text className="text-lg font-bold">{data.resortName}</Text>
          </View>
        </View>
        <View className="flex flex-row  justify-between p-2 items-center">
          <Text className="text-lg font-bold">{data.price} /month</Text>
          <TouchableOpacity>
            <Text className="border border-blue-700 text-blue-700 p-2 rounded-lg text-sm font-medium">
              see more
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Card;
