import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feed } from "./Feed";
import { Profile } from "./Profile";

const Tab = createBottomTabNavigator();

export const Router = () => {
  return (
    <View style={{ backgroundColor: "red", flex: 1 }}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="profile" component={Profile} />
          <Tab.Screen name="feed" component={Feed} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
};
