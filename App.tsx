import { NavigationContainer } from "@react-navigation/native";
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
import { useCallback } from "react";
import { View } from "react-native";
import AuthStack from "@navigation/AuthStack";

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
