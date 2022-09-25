import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

type TextInputWithLabelProps = React.ComponentProps<typeof TextInput> & {
    label: string;
    errorMessage?: string;
};

const TextInputWithLabel = (props: TextInputWithLabelProps) => {
    const { label, errorMessage } = props;
    return (
        <View style={styles.inputWrapper}>
            <Text style={styles.inputLabel}>{label}</Text>
            <TextInput
                style={[
                    styles.input,
                    errorMessage
                        ? {
                              borderColor: "#cc0000",
                          }
                        : {
                              borderColor: "#51DE9A",
                          },
                    props.editable && props.selectTextOnFocus
                        ? { backgroundColor: "#e0e0e0" }
                        : { backgroundColor: "#F4FFF9" },
                ]}
                {...props}
            />
            {errorMessage && errorMessage !== "" && <Text style={styles.errorMessage}>{errorMessage}</Text>}
        </View>
    );
};

export default TextInputWithLabel;

const styles = StyleSheet.create({
    inputWrapper: {
        width: "100%",
        paddingBottom: 20,
    },
    inputLabel: {
        fontSize: 12,
        color: "gray",
        marginLeft: 10,
        marginBottom: -10,
        paddingHorizontal: 5,
        zIndex: 1,
        alignSelf: "flex-start",
        fontFamily: "ReadexPro_200",
    },
    input: {
        paddingLeft: 15,
        fontSize: 18,
        paddingVertical: 10,
        borderWidth: 2,
        borderRadius: 10,
        fontFamily: "ReadexPro_300",
    },
    errorMessage: {
        fontSize: 12,
        fontFamily: "ReadexPro_200",
        color: "#cc0000",
    },
});
