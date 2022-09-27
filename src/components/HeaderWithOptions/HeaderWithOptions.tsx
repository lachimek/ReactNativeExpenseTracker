import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import { useAuth } from "@hooks/useAuth";

const HeaderWithOptions = ({ title }: { title: string }) => {
    const { logout } = useAuth();
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>{title}</Text>
            <View style={styles.icons}>
                <Image
                    source={require("@assets/notification-icon.png")}
                    style={[styles.icon, { marginRight: 20 }]}
                    resizeMode={"contain"}
                />
                <Pressable onPress={logout}>
                    <Image source={require("@assets/settings-icon.png")} style={styles.icon} resizeMode={"contain"} />
                </Pressable>
            </View>
        </View>
    );
};

export default HeaderWithOptions;

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        paddingRight: 40,
    },
    icons: {
        display: "flex",
        flexDirection: "row",
    },
    icon: {
        width: 20,
        height: undefined,
        aspectRatio: 1,
    },
    headerText: {
        fontFamily: "ReadexPro_400",
        fontSize: 32,
        lineHeight: 40,
        color: "#1D2A30",
    },
});
