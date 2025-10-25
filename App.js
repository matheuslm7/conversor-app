import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, Platform, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Button } from './src/components/Button';
import { styles } from './App.styles';
import { currencies } from "./src/constants/currencies";
import { Input } from './src/components/Input';

export default function App() {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? 'padding' : 'height'}

    >

      <ScrollView
        style={styles.scrollView}

      >
        <View style={styles.content}>
          <StatusBar style="light" />

          <View style={styles.header}>
            <Text style={styles.title}>Conversor de Moedas</Text>
            <Text style={styles.subtitle}>
              Converta valores entre diferentes moedas.
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.label}>De:</Text>
          <View style={styles.currencyGrid}>
            {currencies.map(currency => (
              <Button variant='primary'
                key={currency.code}
                currency={currency}
              >

              </Button>
            ))}

            </View>

            <Input label="Valor: "/>

            <TouchableOpacity style={styles.swapButton}>
            <Text>
              ↑↓
            </Text>
            </TouchableOpacity>

          </View>

        </View>

      </ScrollView>
    </KeyboardAvoidingView>
  )
}

