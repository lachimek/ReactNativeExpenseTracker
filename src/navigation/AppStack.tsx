import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "@screens/AppScreens/HomeScreen";
import StatsScreen from "@screens/AppScreens/StatsScreen";
import HeaderWithOptions from "@components/HeaderWithOptions/HeaderWithOptions";

const Stack = createNativeStackNavigator();

const AppStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShadowVisible: false }}>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ headerTitle: () => <HeaderWithOptions title="Home" /> }}
            />
            <Stack.Screen
                name="Stats"
                component={StatsScreen}
                options={{ headerTitle: () => <HeaderWithOptions title="Stats" /> }}
            />
        </Stack.Navigator>
    );
};

export default AppStack;
