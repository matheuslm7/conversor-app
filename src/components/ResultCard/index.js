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

  const formattedResult = formatCurrencyValue(result, toCurrency, toSymbol);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Resultado:</Text>
      <Text style={styles.amount}>
        {formattedResult}
      </Text>
      <Text style={styles.rate}>
        Taxa de câmbio: {fromCurrency} = {exchangeRate.toFixed(4)} {toCurrency}
      </Text>
    </View>
  );
}

function formatCurrencyValue(value, currencyCode, fallbackSymbol) {
  if (typeof value !== "number" || Number.isNaN(value)) {
    return `${fallbackSymbol} ${value}`;
  }

  const centsValue = Math.floor((value + Number.EPSILON) * 100);
  const integerPart = Math.trunc(centsValue / 100);
  const decimalPart = Math.abs(centsValue % 100)
    .toString()
    .padStart(2, "0");

  const formattedInteger = Math.abs(integerPart).toLocaleString("pt-BR");
  const prefix = integerPart < 0 ? "-" : "";

  return `${prefix}${fallbackSymbol} ${formattedInteger},${decimalPart}`;
}