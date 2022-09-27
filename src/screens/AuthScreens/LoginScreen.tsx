import { StyleSheet, Text, View, Image } from "react-native";
import React, { useContext, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useKeyboardShown } from "@hooks/useKeyboardShown";
import { useAuth } from "@hooks/useAuth";
import TextInputWithLabel from "@components/TextInputWithLabel/TextInputWithLabel";
import { Button } from "@components/Button/Button";

type LoginUser = {
    email: string;
    password: string;
};

const LoginScreen = ({ navigation }: any) => {
    const { keyboardShown } = useKeyboardShown();
    const { login } = useAuth();

    const schema = yup
        .object()
        .shape({
            email: yup.string().email("Invalid email address.").required("This is required."),
            password: yup
                .string()
                .min(8, "Password must be at least 8 characters.")
                .max(24, "Password must be at most 24 characters."),
        })
        .required();

    const {
        control,
        handleSubmit,
        formState,
        formState: { errors },
    } = useForm<LoginUser>({
        defaultValues: {
            email: "test@test.com",
            password: "test1234",
        },
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data: LoginUser) => {
        if (await login(data.email, data.password)) {
            //navigation.navigate("Home");
        }
    };

    return (
        <View style={[styles.container, keyboardShown ? { justifyContent: "flex-start", paddingTop: 30 } : {}]}>
            {!keyboardShown && (
                <Image source={require("@assets/login-page-image.png")} style={styles.image} resizeMode={"contain"} />
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
                    />
                )}
                name="password"
            />
            <View style={styles.buttonContainer}>
                <Button
                    variant="big"
                    title="Sign in"
                    onPress={handleSubmit(onSubmit)}
                    disabled={!formState.isValid || formState.isSubmitting}
                    loading={formState.isSubmitting}
                />
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
        height: "100%",
    },
    image: {
        width: 150,
        height: undefined,
        aspectRatio: 1240 / 1152,
        marginBottom: 40,
    },
    buttonContainer: {
        width: "100%",
        marginTop: 25,
    },
});
