import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

const CATCHPHRASES = ["Helps you to track your expenses.", "Helps you save money.", "Create budgets you can stick to."];

const LoginScreen = () => {
    const [currentId, setCurrentId] = useState(0);

    return (
        <View style={styles.container}>
            <Text>Login screen</Text>
        </View>
    );
};

export default LoginScreen;

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
