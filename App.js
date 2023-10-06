import * as React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import HomeScreen from "./Screens/HomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ionicons from "@expo/vector-icons/Ionicons";
import Notification from "./Screens/Notification";

const Stack = createNativeStackNavigator();

function HeaderRightButton() {
  const navigation = useNavigation();

  return (
    <Ionicons
      name="notifications"
      size={24}
      style={{ marginRight: 2, color: "blue" }}
      onPress={() => navigation.navigate("Notification")}
    />
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: "AGGRALIOUS TECH",
            headerTitleStyle: {
              color: "black",
              textAlign: "center",
            },
            headerRight: () => <HeaderRightButton />,
            headerLeft: () => (
              <Ionicons
                name="menu"
                size={24}
                style={{ marginLeft: 2, marginRight: 4, color: "blue" }}
              />
            ),
          }}
        />
        <Stack.Screen name="Notification" component={Notification} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
