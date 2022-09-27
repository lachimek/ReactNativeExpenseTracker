import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Button } from "@components/Button/Button";
import { useAuth } from "@hooks/useAuth";
import ListItem from "@components/ListItem/ListItem";

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <View>
                    <Text style={styles.overall}>Overall Balance</Text>
                    <Text style={styles.balance}>$12.991.00</Text>
                </View>
                <ScrollView
                    contentContainerStyle={styles.wallet}
                    horizontal
                    snapToStart
                    showsHorizontalScrollIndicator={false}
                >
                    <View style={[styles.walletCard, { marginRight: 15 }]}>
                        <Image
                            source={require("@assets/wallet-icon.png")}
                            style={[styles.icon]}
                            resizeMode={"contain"}
                        />
                        <View>
                            <Text style={[styles.overall, { color: "#51DE9A" }]}>Debit Card</Text>
                            <Text style={styles.walletMoneyText}>$8,351.00</Text>
                        </View>
                    </View>
                    <View style={styles.walletCard}>
                        <Image
                            source={require("@assets/wallet-icon.png")}
                            style={[styles.icon]}
                            resizeMode={"contain"}
                        />
                        <View>
                            <Text style={[styles.overall, { color: "#51DE9A" }]}>Cash</Text>
                            <Text style={styles.walletMoneyText}>$4,640.00</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
            <View style={styles.bottom}>
                <Text style={styles.recentText}>Recent Activity</Text>
                <View style={styles.recentList}>
                    <ListItem
                        activityType="shopping"
                        title="Shopping"
                        time="16:30 PM"
                        amount={-60.0}
                        paymentType="Debit Card"
                    />
                    <ListItem
                        activityType="entertainment"
                        title="Movie"
                        time="14:00 PM"
                        amount={-50.0}
                        paymentType="Cash"
                    />
                    <ListItem
                        activityType="payment"
                        title="Transfer"
                        time="09:00 AM"
                        amount={-200.0}
                        paymentType="Debit Card"
                    />
                </View>
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
    wallet: {
        marginVertical: 25,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    walletCard: {
        backgroundColor: "#E9FAF2",
        borderRadius: 30,
        height: 150,
        minWidth: 150,
        padding: 16,
        flexDirection: "column",
        justifyContent: "space-between",
    },
    icon: { width: 20, height: undefined, aspectRatio: 1 },
    walletMoneyText: {
        fontFamily: "ReadexPro_500",
        fontSize: 24,
        lineHeight: 30,
        color: "#51DE9A",
    },
    bottom: {
        height: "50%",
        paddingHorizontal: 20,
        backgroundColor: "#F4FFF9",
    },
    recentText: {
        fontFamily: "ReadexPro_500",
        fontSize: 16,
        lineHeight: 20,
        color: "#00160A",
        marginTop: 24,
    },
    recentList: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
        marginVertical: 18,
    },
});
