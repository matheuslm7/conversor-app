const BASE_URL = "https://api.exchangerate-api.com/v4/latest";
const AWESOME_API_BASE = "https://economia.awesomeapi.com.br/json/last";

async function fetchFromAwesomeApi(fromCurrency, toCurrency) {
  try {
    const pair = `${fromCurrency}-${toCurrency}`.toUpperCase();
    const response = await fetch(`${AWESOME_API_BASE}/${pair}`);

    if (!response.ok) {
      return null;
    }

    const data = await response.json();
    const dataKey = pair.replace("-", "");
    const bid = Number(data?.[dataKey]?.bid);

    if (Number.isNaN(bid) || bid <= 0) {
      return null;
    }

    return bid;
  } catch (error) {
    console.log("Awesome API error:", error);
    return null;
  }
}

async function fetchFromExchangeRateApi(fromCurrency, toCurrency) {
  try {
    const response = await fetch(`${BASE_URL}/${fromCurrency}`);

    if (!response.ok) {
      return null;
    }

    const data = await response.json();
    const rate = data?.rates?.[toCurrency];

    if (!rate) {
      return null;
    }

    return rate;
  } catch (error) {
    console.log("ExchangeRate API error:", error);
    return null;
  }
}

export async function exchangeRateApi(fromCurrency, toCurrency) {
  if (!fromCurrency || !toCurrency) {
    return null;
  }

  if (fromCurrency === toCurrency) {
    return 1;
  }

  const awesomeRate = await fetchFromAwesomeApi(fromCurrency, toCurrency);

  if (awesomeRate) {
    return awesomeRate;
  }

  return fetchFromExchangeRateApi(fromCurrency, toCurrency);
}