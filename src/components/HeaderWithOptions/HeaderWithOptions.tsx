import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const HeaderWithOptions = ({ title }: { title: string }) => {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>{title}</Text>
            <View style={styles.icons}>
                <Image
                    source={require("@assets/notification-icon.png")}
                    style={[styles.icon, { marginRight: 20 }]}
                    resizeMode={"contain"}
                />
                <Image source={require("@assets/settings-icon.png")} style={styles.icon} resizeMode={"contain"} />
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
