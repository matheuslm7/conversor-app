import { StatusBar } from "expo-status-bar";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Button } from "./src/components/Button";
import { styles } from "./App.styles";
import { currencies } from "./src/constants/currencies";
import { Input } from "./src/components/Input";
import { ResultCard } from "./src/components/ResultCard";
import { exchangeRateApi } from "./src/services/api";
import { convertCurrency } from "./src/utils/convertCurrency";
import { useState } from "react";
import { ActivityIndicator } from "react-native";
import { colors } from "./src/styles/colors";

export default function App() {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("BRL");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [exchangeRate, setExchangeRate] = useState(null);

  async function fetchExchangeRate() {
    if (!amount) {
      return;
    }

    try {
      setLoading(true);
      const rate = await exchangeRateApi(fromCurrency, toCurrency);

      if (!rate) {
        setExchangeRate(null);
        setResult("");
        return;
      }

      const convertedAmount = convertCurrency(amount, rate);
      if (convertedAmount === null) {
        setExchangeRate(null);
        setResult("");
        return;
      }

      setExchangeRate(rate);
      setResult(convertedAmount);
    } catch (error) {
      console.error("Erro ao converter moedas:", error);
      setExchangeRate(null);
      setResult("");
    } finally {
      setLoading(false);
    }
  }

function swapCurrencies() {
  setFromCurrency(toCurrency);
  setToCurrency(fromCurrency);
  setResult("");
}


  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView style={styles.scrollView}>
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
              {currencies.map((currency) => (
                <Button
                  variant="primary"
                  key={currency.code}
                  currency={currency}
                  onPress={() => setFromCurrency(currency.code)}
                  isSelected={fromCurrency === currency.code}
                ></Button>
              ))}
            </View>

            <Input label="Valor: " value={amount} onChangeText={setAmount} />

            <TouchableOpacity style={styles.swapButton} onPress={swapCurrencies}>
              <Text style={styles.swapButtonText}>↑↓</Text>
            </TouchableOpacity>

            <Text style={styles.label}>Para:</Text>
            <View style={styles.currencyGrid}>
              {currencies.map((currency) => (
                <Button
                  variant="secondary"
                  key={currency.code}
                  currency={currency}
                  onPress={() => setToCurrency(currency.code)}
                  isSelected={toCurrency === currency.code}
                ></Button>
              ))}
            </View>
          </View>

          <TouchableOpacity
            style={[styles.convertButton, (!amount || loading) && styles.convertButtonDisable]}
            onPress={fetchExchangeRate}
          >
            {loading ? (
              <ActivityIndicator size="small" color={colors.primary} />
            ) : (
              <Text style={styles.convertButtonText}>Converter</Text>
            )}
          </TouchableOpacity>

          <ResultCard
            exchangeRate={exchangeRate}
            result={result}
            fromCurrency={fromCurrency}
            toCurrency={toCurrency}
            currencies={currencies}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
