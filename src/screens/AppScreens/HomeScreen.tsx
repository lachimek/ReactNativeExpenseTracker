import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "@components/Button/Button";
import { useAuth } from "@hooks/useAuth";

const HomeScreen = () => {
    const { logout } = useAuth();
    return (
        <View>
            <Text>HomeScreen</Text>
            <Button variant={"small"} onPress={logout} title="Log out" />
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({});
