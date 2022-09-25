import { StyleSheet, Text, View, Modal as RnModal, Pressable } from "react-native";
import React from "react";

interface ModalProps {
    component: React.ReactElement;
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    infoOnly?: boolean;
}

const Modal = ({ component, isOpen, setIsOpen, infoOnly }: ModalProps) => {
    return (
        <View>
            <RnModal
                animationType="fade"
                transparent={true}
                visible={isOpen}
                onRequestClose={() => {
                    setIsOpen(!isOpen);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        {component}
                        {infoOnly && (
                            <Pressable style={[styles.button, styles.buttonClose]} onPress={() => setIsOpen(!isOpen)}>
                                <Text style={styles.textStyle}>Hide Modal</Text>
                            </Pressable>
                        )}
                    </View>
                </View>
            </RnModal>
        </View>
    );
};

export default Modal;

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 10,
        padding: 15,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
    },
});
