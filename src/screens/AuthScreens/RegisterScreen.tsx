import { StyleSheet, Text, Image, View, Keyboard } from "react-native";
import React, { useState } from "react";
import TextInputWithLabel from "@components/TextInputWithLabel/TextInputWithLabel";
import { Button } from "@components/Button/Button";
import { useKeyboardShown } from "@hooks/useKeyboardShown";
import { useAuth } from "@hooks/useAuth";
import Modal from "@components/Modal/Modal";

const RegisterScreen = ({ navigation }: any) => {
    const [email, setEmail] = useState("test@test.com");
    const [password, setPassword] = useState("test");
    const [confirmPassword, setConfirmPassword] = useState("test");
    const [formErrorState, setFormErrorState] = useState(false);
    const [errorMessageEmail, setErrorMessageEmail] = useState("");
    const [errorMessagePassword, setErrorMessagePassword] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const { keyboardShown } = useKeyboardShown();
    const { register } = useAuth();

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
        if (formErrorState) return;

        if (password !== confirmPassword) {
            setFormErrorState(true);
            setErrorMessagePassword("Passwords do not match.");
            return;
        }

        if (register(email, password)) {
            setIsOpen(true);
        }
    };

    return (
        <View style={[styles.container, keyboardShown ? { paddingTop: 30 } : {}]}>
            {!keyboardShown && (
                <Image
                    source={require("@assets/register-page-image.png")}
                    style={styles.image}
                    resizeMode={"contain"}
                />
            )}
            <TextInputWithLabel
                value={email}
                onChangeText={validateEmail}
                label="Your email address"
                errorMessage={errorMessageEmail}
            />
            <TextInputWithLabel
                value={password}
                onChangeText={(text) => {
                    setErrorMessagePassword("");
                    setFormErrorState(false);
                    setPassword(text);
                }}
                label="Your password"
                secureTextEntry={true}
                errorMessage={errorMessagePassword}
            />
            <TextInputWithLabel
                value={confirmPassword}
                onChangeText={(text) => {
                    setErrorMessagePassword("");
                    setFormErrorState(false);
                    setConfirmPassword(text);
                }}
                label="Confirm your password"
                secureTextEntry={true}
                errorMessage={errorMessagePassword}
            />
            <View style={styles.buttonContainer}>
                <Button variant="big" title="Create an account" onPress={handleSubmit} disabled={formErrorState} />
                <View style={styles.underButtonTextContainer}>
                    <Text style={styles.underButtonText}>
                        Already have an account?{" "}
                        <Text style={styles.underButtonTextInner} onPress={() => navigation.navigate("Login")}>
                            Sign In
                        </Text>
                    </Text>
                </View>
            </View>
            <Modal
                component={
                    <View style={{ paddingHorizontal: 30, alignItems: "center" }}>
                        <Text style={styles.modalText}>Account created!</Text>
                        <Button
                            variant="small"
                            title="Go to login"
                            customStyles={{ paddingHorizontal: 30 }}
                            onPress={() => navigation.navigate("Login")}
                        />
                    </View>
                }
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />
        </View>
    );
};

export default RegisterScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#F4FFF9",
        paddingHorizontal: 40,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
    },
    image: {
        width: 250,
        height: undefined,
        aspectRatio: 1249 / 786,
        marginBottom: 40,
    },
    buttonContainer: {
        width: "100%",
        marginTop: 25,
    },
    underButtonTextContainer: {
        marginTop: 10,
    },
    underButtonText: {
        textAlign: "center",
        color: "#51DE9A",
        fontSize: 12,
        lineHeight: 12,
        fontFamily: "ReadexPro_400",
    },
    underButtonTextInner: {
        fontFamily: "ReadexPro_600",
        textDecorationLine: "underline",
    },
    modalText: {
        fontFamily: "ReadexPro_600",
        fontSize: 24,
        marginBottom: 20,
    },
});
