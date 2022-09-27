import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "@components/Button/Button";
import { useAuth } from "@hooks/useAuth";

const HomeScreen = () => {
    const { logout } = useAuth();
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Text style={styles.overall}>Overall Balance</Text>
                <Text style={styles.balance}>$12.991.00</Text>
            </View>
            <View style={styles.bottom}>
                <Button variant={"small"} onPress={logout} title="Log out" />
            </View>
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        height: "100%",
        backgroundColor: "#fff",
    },
    top: {
        paddingTop: 20,
        paddingHorizontal: 20,
        height: "50%",
    },
    overall: {
        fontFamily: "ReadexPro_400",
        fontSize: 16,
        lineHeight: 20,
        color: "#979797",
    },
    balance: {
        fontFamily: "ReadexPro_500",
        fontSize: 40,
        lineHeight: 50,
        color: "#1D2A30",
    },
    bottom: {
        height: "50%",
        paddingHorizontal: 20,
        backgroundColor: "#F4FFF9",
    },
});
