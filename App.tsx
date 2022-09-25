import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
    useFonts,
    ReadexPro_200ExtraLight,
    ReadexPro_300Light,
    ReadexPro_400Regular,
    ReadexPro_500Medium,
    ReadexPro_600SemiBold,
    ReadexPro_700Bold,
} from "@expo-google-fonts/readex-pro";
import * as SplashScreen from "expo-splash-screen";
import LoginScreen from "./screens/LoginScreen";
import { useCallback, useEffect, useState } from "react";
import { View, Text } from "react-native";
import OnboardingScreen from "./screens/OnboardingScreen";
import AuthStack from "./nvaigation/AuthStack";

SplashScreen.preventAutoHideAsync();

export default function App() {
    const [fontsLoaded] = useFonts({
        ReadexPro_200: ReadexPro_200ExtraLight,
        ReadexPro_300: ReadexPro_300Light,
        ReadexPro_400: ReadexPro_400Regular,
        ReadexPro_500: ReadexPro_500Medium,
        ReadexPro_600: ReadexPro_600SemiBold,
        ReadexPro_700: ReadexPro_700Bold,
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);
    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
            <NavigationContainer>
                <AuthStack />
            </NavigationContainer>
        </View>
    );
}
