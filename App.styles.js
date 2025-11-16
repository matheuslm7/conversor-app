import { StyleSheet } from "react-native"
import { colors } from "./src/styles/colors"


export const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        backgroundColor: colors.background
    },

    scrollView: {
        flexGrow: 1,
    },

    content: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 80,
        paddingBottom: 24
    },
    header: {
        marginBottom: 32
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: colors.text,
        marginBottom: 8,

    },
    subtitle: {
        color: colors.textSecondary,
        fontSize: 16,
    },
    card: {
        backgroundColor: colors.cardBackground,
        borderRadius: 16,
        padding: 24,
        marginBottom: 24
    },
    label: {
        color: colors.textSecondary,
        marginBottom: 8,
        fontSize: 14,
    },
    currencyGrid:{
        flexDirection: "row",
        flexWrap: "wrap",
        marginHorizontal: -4,
        marginBottom: 12,
        alignItems: "center",
        justifyContent: "center"
    },
    swapButton: {
        backgroundColor: colors.inputBackground,
        paddingVertical: 16,
        paddingHorizontal: 24,
        borderRadius: 12,
        marginBottom: 24,
    },
    swapButtonText: {
        color: colors.text,
        fontSize: 18,
        fontWeight: '600',
        textAlign: "center",
    },
    convertButton: {
        backgroundColor: colors.secondary,
        paddingVertical: 16,
        paddingHorizontal: 24,
        borderRadius: 12,
        marginBottom: 24,
    },
    convertButtonText: {
        color: colors.text,
        fontSize: 18,
        fontWeight: '600',
        textAlign: "center",
    },
    convertButtonDisable: {
        backgroundColor: colors.disabled,
        paddingVertical: 16,
        paddingHorizontal: 24,
        borderRadius: 12,
        marginBottom: 24,
    },



})