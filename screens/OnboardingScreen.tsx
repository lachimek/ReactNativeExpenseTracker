import { StyleSheet, Text, View, Image } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";

import PaginationDot from "react-native-animated-pagination-dot";
import { Button } from "../components/Button/Button";

const CATCHPHRASES = ["Helps you to track your expenses.", "Helps you save money.", "Create budgets you can stick to."];

const OnboardingScreen = ({ navigation }: any) => {
    const [currentId, setCurrentId] = useState(0);

    return (
        <View style={styles.container}>
            <View style={styles.imageAndText}>
                <Image
                    source={require("../assets/onboarding-page-image.png")}
                    style={styles.image}
                    resizeMode={"contain"}
                />
                <Text style={styles.text}>Helps you to track your expenses.</Text>
                <View style={styles.dotContainer}>
                    <PaginationDot
                        activeDotColor="#1D2A30"
                        inactiveDotColor="#9CB0A4"
                        curPage={currentId}
                        maxPage={3}
                    ></PaginationDot>
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <Button variant="big" title="Let's Start!" onPress={() => navigation.navigate("Register")} />
                <View style={styles.underButtonTextContainer}>
                    <Text style={styles.underButtonText}>
                        Already have an account?{" "}
                        <Text style={styles.underButtonTextInner} onPress={() => navigation.navigate("Login")}>
                            Sign In
                        </Text>
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#F4FFF9",
        paddingTop: 20,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        height: "100%",
    },
    imageAndText: {
        paddingTop: 60,
        paddingHorizontal: 30,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        width: 300,
        height: 300,
    },
    text: {
        color: "#1D2A30",
        fontSize: 32,
        lineHeight: 40,
        textAlign: "center",
        fontFamily: "ReadexPro_700",
        marginTop: 10,
    },
    dotContainer: {
        marginTop: 20,
        marginBottom: 50,
    },
    buttonContainer: {
        flex: 1,
        alignSelf: "stretch",
        backgroundColor: "#FFF",
        paddingTop: 25,
        paddingHorizontal: 30,
    },
    underButtonTextContainer: {
        marginTop: 10,
    },
    underButtonText: {
        textAlign: "center",
        color: "#51DE9A",
        fontSize: 12,
        lineHeight: 12,
        fontFamily: "ReadexPro_400",
    },
    underButtonTextInner: {
        fontFamily: "ReadexPro_600",
        textDecorationLine: "underline",
    },
});
