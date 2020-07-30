import * as React from "react";
import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native";
import { useColorScheme } from "react-native-appearance";
import {
  createStackNavigator,
  CardStyleInterpolators,
  TransitionPresets,
} from "@react-navigation/stack";

import Home from "@screens/Home";
import PostDetail from "@screens/PostDetail";

const AppStack = createStackNavigator();

const AppNavigator = () => {
  const scheme = useColorScheme();

  return (
    <NavigationContainer theme={scheme === "dark" ? DarkTheme : DefaultTheme}>
      <AppStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Home"
      >
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen
          name="PostDetail"
          component={PostDetail}
          options={{
            title: "Profile",
            cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
            // ...TransitionPresets.RevealFromBottomAndroid,
          }}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
