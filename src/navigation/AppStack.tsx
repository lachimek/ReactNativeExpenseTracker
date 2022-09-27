import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "@screens/AppScreens/HomeScreen";
import StatsScreen from "@screens/AppScreens/StatsScreen";

const Stack = createNativeStackNavigator();

const AppStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Stats" component={StatsScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};

export default AppStack;
