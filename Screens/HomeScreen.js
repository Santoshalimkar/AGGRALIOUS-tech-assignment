import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import bgimage from "../assets/Nueva-York.jpg";
import { data } from "../Data/data";
import Card from "../Components/Card";

const HomeScreen = () => {
  const [cityname, setCityname] = useState("");
  const [filterdata, setfilterdata] = useState([]);

  const cardDataArray = Object.values(data);

  const handleSearch = () => {
    const filtered = cardDataArray.filter((value) =>
      value.city.toLowerCase().includes(cityname.toLowerCase())
    );
    setfilterdata(filtered);
  };

  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <View className="bg-violet-50 w-full flex-1 ">
      <View className="relative">
        <Image
          className="h-40 w-full object-fill opacity-80 rounded-b-3xl"
          source={bgimage}
        />
        <View className="absolute  flex flex-row top-1/2 left-8 p-4 gap-4">
          <View>
            <TextInput
              value={cityname}
              onChangeText={(text) => setCityname(text)}
              placeholder="Search City"
              className="bg-white h-12 p-4 rounded-lg w-60  placeholder:text-gray-900 placeholder:font-bold "
            />
          </View>
          <View className="">
            <TouchableOpacity onPress={handleSearch}>
              <Text className="bg-blue-800 font-bold text-white h-12 w-20 p-4 capitalize text-center rounded-xl">
                search
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View className="p-4 flex-1 pb-16">
        <Text className="text-3xl p-4 text-center font-medium text-violet-950">
          Amazing Places
        </Text>
        <View className="mx-auto">
          {filterdata.length === 0 ? (
            <View className="justify-center flex items-center p-4">
              <Text>No results found</Text>
            </View>
          ) : (
            <FlatList
              data={filterdata}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => <Card data={item} />}
            />
          )}
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
