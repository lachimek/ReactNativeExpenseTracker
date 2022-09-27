import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const ICONS = {
    shopping: require("@assets/shopping-icon.png"),
    payment: require("@assets/payment-icon.png"),
    entertainment: require("@assets/entertainment-icon.png"),
};

interface ListItemProps {
    activityType: "shopping" | "payment" | "entertainment";
    title: string;
    time: string;
    paymentType: string;
    amount: number;
}

const ListItem = ({ activityType, title, time, paymentType, amount }: ListItemProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <Image source={ICONS[activityType]} style={styles.icon} resizeMode={"contain"} />
            </View>
            <View style={styles.dataContainer}>
                <View>
                    <Text style={styles.topText}>{title}</Text>
                    <Text style={styles.bottomText}>{time}</Text>
                </View>
                <View>
                    <Text style={[styles.topText, { color: "#51DE9A", textAlign: "right" }]}>{amount}$</Text>
                    <Text style={[styles.bottomText, { textAlign: "right" }]}>{paymentType}</Text>
                </View>
            </View>
        </View>
    );
};

export default ListItem;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        borderRadius: 20,
        flexDirection: "row",
        padding: 4,
    },
    iconContainer: {
        backgroundColor: "#E9FAF2",
        borderRadius: 15,
        padding: 20,
    },
    icon: { width: 20, height: undefined, aspectRatio: 1 },
    dataContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 16,
    },
    topText: {
        fontFamily: "ReadexPro_500",
        fontSize: 16,
        lineHeight: 20,
        letterSpacing: 0.1,
        color: "#000",
        marginBottom: 4,
    },
    bottomText: {
        fontFamily: "ReadexPro_400",
        fontSize: 14,
        lineHeight: 17,
        letterSpacing: 0.1,
        color: "#979797",
    },
});
