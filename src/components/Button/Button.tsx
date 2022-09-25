import { TouchableOpacity, Text, GestureResponderEvent, StyleSheet } from "react-native";

interface ButtonProps {
    onPress: (event: GestureResponderEvent) => void;
    title: string;
    disabled?: boolean;
    customStyles?: {};
    variant: "big" | "small";
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

export const Button = ({ onPress, title, disabled, customStyles, variant }: ButtonProps) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[
                styles.buttonContainerCommon,
                handleVariant(variant).container,
                disabled ? { backgroundColor: "#E3E6E8" } : {},
                { ...customStyles },
            ]}
            disabled={disabled}
        >
            <Text style={[styles.buttonTextCommon, handleVariant(variant).text]}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonContainerCommon: {
        backgroundColor: "#51DE9A",
    },
    buttonContainerBig: {
        borderRadius: 15,
    },
    buttonContainerSmall: {
        borderRadius: 10,
    },
    buttonTextCommon: {
        textAlign: "center",
        color: "#FFF",
        fontFamily: "ReadexPro_500",
    },
    buttonTextBig: {
        fontSize: 24,
        lineHeight: 30,
        paddingVertical: 20,
    },
    buttonTextSmall: {
        fontSize: 16,
        paddingVertical: 10,
    },
});
