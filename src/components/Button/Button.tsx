import { TouchableOpacity, Text, GestureResponderEvent, StyleSheet, ActivityIndicator } from "react-native";

interface ButtonProps {
    onPress: (event: GestureResponderEvent) => void;
    title: string;
    disabled?: boolean;
    customStyles?: {};
    variant: "big" | "small";
    loading?: boolean;
}

const handleVariant = (variant: ButtonProps["variant"]) => {
    if (variant === "big") {
        return { container: styles.buttonContainerBig, text: styles.buttonTextBig };
    }

    if (variant === "small") {
        return { container: styles.buttonContainerSmall, text: styles.buttonTextSmall };
    }

    return {};
};

export const Button = ({ onPress, title, disabled, customStyles, variant, loading }: ButtonProps) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.buttonContainerCommon, handleVariant(variant).container, { ...customStyles }]}
            disabled={disabled}
        >
            {loading ? (
                <ActivityIndicator size="large" color="#fff" />
            ) : (
                <Text style={[styles.buttonTextCommon, handleVariant(variant).text]}>{title}</Text>
            )}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonContainerCommon: {
        backgroundColor: "#51DE9A",
        justifyContent: "center",
    },
    buttonContainerBig: {
        borderRadius: 15,
        height: 70,
    },
    buttonContainerSmall: {
        borderRadius: 10,
        height: 40,
    },
    buttonTextCommon: {
        textAlign: "center",
        color: "#FFF",
        fontFamily: "ReadexPro_500",
    },
    buttonTextBig: {
        fontSize: 24,
        lineHeight: 30,
    },
    buttonTextSmall: {
        fontSize: 16,
    },
});
