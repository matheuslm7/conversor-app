import { Text, View, TextInput } from 'react-native';
import { style } from './styles';

export function Input({ value, onChangeText, label }) {
    return (
        <View style={style.container}>
            <Text style={style.label}>
                {label}
            </Text>


            <TextInput
                style={style.input}
                placeholder='0.00'
                placeholderTextColor="#94a3b8"
                value={value}
                onChangeText={onChangeText}
                keyboardType='numeric'
            />
        </View>




    )





}