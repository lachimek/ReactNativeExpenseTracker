import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnboardingScreen from "@screens/AuthScreens/OnboardingScreen";
import LoginScreen from "@screens/AuthScreens/LoginScreen";
import RegisterScreen from "@screens/AuthScreens/RegisterScreen";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Onboarding" component={OnboardingScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};

export default AuthStack;
