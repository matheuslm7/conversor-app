import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors"


export const styles = StyleSheet.create({

    button: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        margin: 4,
        borderRadius: 8,
    },

    buttonText: {
        color: colors.text,
        fontWeight: '500',
    },

    buttonUnselected: {
        backgroundColor: colors.inputBackground,
    },

    buttonPrimary: {
        backgroundColor: colors.primary
    },
    buttonSecondary: {
        backgroundColor: colors.secondary
    }


})