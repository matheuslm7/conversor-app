import { View, Text } from "react-native";
import { styles } from "./styles";

export function ResultCard({
  exchangeRate,
  result,
  fromCurrency,
  toCurrency,
  currencies,
}) {
  const hasData =
    currencies &&
    fromCurrency &&
    toCurrency &&
    exchangeRate !== null &&
    exchangeRate !== undefined &&
    result !== "" &&
    result !== null &&
    result !== undefined;

  if (!hasData) {
    return null;
  }

  const selectedCurrency = currencies.find(
    (currency) => currency.code === toCurrency
  );
  const toSymbol = selectedCurrency?.symbol ?? "";

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Resultado:</Text>
      <Text style={styles.amount}>
        {toSymbol} {result}
      </Text>
      <Text style={styles.rate}>
        Taxa de câmbio: {fromCurrency} = {exchangeRate.toFixed(4)} {toCurrency}
      </Text>
    </View>
  );
}