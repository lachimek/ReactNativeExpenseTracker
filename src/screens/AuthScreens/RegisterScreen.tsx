import { StyleSheet, Text, Image, View, SafeAreaView } from "react-native";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import TextInputWithLabel from "@components/TextInputWithLabel/TextInputWithLabel";
import { Button } from "@components/Button/Button";
import { useKeyboardShown } from "@hooks/useKeyboardShown";
import { useAuth } from "@hooks/useAuth";
import Modal from "@components/Modal/Modal";

type RegisterUser = {
    email: string;
    password: string;
    passwordRepeat: string;
};

const RegisterScreen = ({ navigation }: any) => {
    const [isOpen, setIsOpen] = useState(false);
    const { keyboardShown } = useKeyboardShown();
    const { register } = useAuth();

    const schema = yup
        .object()
        .shape({
            email: yup.string().email("Invalid email address.").required("This is required."),
            password: yup
                .string()
                .min(8, "Password must be at least 8 characters.")
                .max(24, "Password must be at most 24 characters."),
            passwordRepeat: yup
                .string()
                .oneOf([yup.ref("password"), null], "Passwords must match")
                .required("This is required."),
        })
        .required();

    const {
        control,
        handleSubmit,
        formState,
        formState: { errors },
    } = useForm<RegisterUser>({
        defaultValues: {
            email: "test@test.com",
            password: "test1234",
            passwordRepeat: "test1234",
        },
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data: RegisterUser) => {
        if (await register(data.email, data.password)) {
            setIsOpen(!isOpen);
        }
    };

    return (
        <SafeAreaView style={[styles.container, keyboardShown ? { justifyContent: "flex-start", paddingTop: 30 } : {}]}>
            {!keyboardShown && (
                <Image
                    source={require("@assets/register-page-image.png")}
                    style={styles.image}
                    resizeMode={"contain"}
                />
            )}
            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInputWithLabel
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        errorMessage={errors?.email?.message}
                        label="Your email address"
                        editable={!formState.isSubmitting}
                        selectTextOnFocus={formState.isSubmitting}
                    />
                )}
                name="email"
            />
            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInputWithLabel
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        errorMessage={errors?.password?.message}
                        label="Your password"
                        secureTextEntry={true}
                        editable={!formState.isSubmitting}
                        selectTextOnFocus={formState.isSubmitting}
                    />
                )}
                name="password"
            />
            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInputWithLabel
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        errorMessage={errors?.passwordRepeat?.message}
                        label="Confirm your password"
                        secureTextEntry={true}
                        editable={!formState.isSubmitting}
                        selectTextOnFocus={formState.isSubmitting}
                    />
                )}
                name="passwordRepeat"
            />
            <View style={styles.buttonContainer}>
                <Button
                    variant="big"
                    title="Create an account"
                    onPress={handleSubmit(onSubmit)}
                    disabled={!formState.isValid || formState.isSubmitting}
                />
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
        </SafeAreaView>
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
