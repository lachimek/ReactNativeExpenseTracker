import { TouchableOpacity, Text, GestureResponderEvent, StyleSheet } from "react-native";
export const LoginButton = ({ onPress, title }: { onPress: (event: GestureResponderEvent) => void; title: string }) => (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
        <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: "#51DE9A",
        borderRadius: 15,
    },
    buttonText: {
        textAlign: "center",
        paddingVertical: 20,
        color: "#FFF",
        fontFamily: "ReadexPro_500",
        fontSize: 24,
        lineHeight: 30,
    },
});
