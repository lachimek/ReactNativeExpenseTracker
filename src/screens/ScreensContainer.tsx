import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "@navigation/AuthStack";
import AppStack from "@navigation/AppStack";
import { useAuth } from "@hooks/useAuth";

const ScreensContainer = () => {
    const { user } = useAuth();
    return <NavigationContainer>{user ? <AppStack /> : <AuthStack />}</NavigationContainer>;
};

export default ScreensContainer;
