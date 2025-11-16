import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export function Button({
    variant = "primary",
    onPress,
    currency,
    isSelected = false,
}) {
    const variantStyle =
        variant === "primary" ? styles.buttonPrimary : styles.buttonSecondary;

    return (
        <TouchableOpacity 
        onPress={onPress}
        style={[
            styles.button,
            isSelected ? variantStyle : styles.buttonUnselected,
        ]}>

            <Text style={styles.buttonText}>
            {currency.code}
            </Text>
        </TouchableOpacity>
    )
}