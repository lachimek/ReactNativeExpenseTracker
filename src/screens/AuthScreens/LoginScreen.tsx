import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import { useKeyboardShown } from "@hooks/useKeyboardShown";
import { useAuth } from "@hooks/useAuth";
import TextInputWithLabel from "@components/TextInputWithLabel/TextInputWithLabel";
import { Button } from "@components/Button/Button";

const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { keyboardShown } = useKeyboardShown();
    const { login } = useAuth();
    const [formErrorState, setFormErrorState] = useState(false);
    const [errorMessageEmail, setErrorMessageEmail] = useState("");
    const [errorMessagePassword, setErrorMessagePassword] = useState("");

    const validateEmail = (text: string) => {
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (reg.test(text) === false) {
            setErrorMessageEmail("Invalid email address.");
            setFormErrorState(true);
            setEmail(text);
            return;
        } else {
            setFormErrorState(false);
            setErrorMessageEmail("");
            setEmail(text);
        }
    };

    const handleSubmit = () => {
        // setIsOpen(true);
    };

    return (
        <View style={[styles.container, keyboardShown ? { justifyContent: "flex-start", paddingTop: 30 } : {}]}>
            {!keyboardShown && (
                <Image source={require("@assets/login-page-image.png")} style={styles.image} resizeMode={"contain"} />
            )}
            <Text style={styles.headerText}>Sign In</Text>
            <TextInputWithLabel
                value={email}
                onChangeText={validateEmail}
                label="Your email address"
                errorMessage={errorMessageEmail}
            />
            <TextInputWithLabel
                value={password}
                onChangeText={setPassword}
                label="Your password"
                secureTextEntry={true}
                errorMessage={errorMessagePassword}
            />
            <View style={styles.buttonContainer}>
                <Button variant="big" title="Sign in" onPress={handleSubmit} disabled={formErrorState} />
            </View>
        </View>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#F4FFF9",
        paddingHorizontal: 40,
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        height: "100%",
    },
    image: {
        width: 150,
        height: undefined,
        aspectRatio: 1240 / 1152,
        marginBottom: 40,
    },
    headerText: {},
    buttonContainer: {
        width: "100%",
        marginTop: 25,
    },
});
