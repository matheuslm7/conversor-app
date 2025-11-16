function normalizeAmountValue(rawAmount) {
    if (typeof rawAmount === "number") {
        return rawAmount;
    }

    if (typeof rawAmount !== "string") {
        return NaN;
    }

    let sanitized = rawAmount.trim();

    if (!sanitized) {
        return NaN;
    }

    sanitized = sanitized.replace(/\s/g, "");

    if (sanitized.includes(",") && sanitized.includes(".")) {
        sanitized = sanitized.replace(/\./g, "");
    }

    sanitized = sanitized.replace(/,/g, ".");

    return Number(sanitized);
}

function roundToTwoDecimals(value) {
    return Math.round(value * 100) / 100;
}

export function convertCurrency(amount, rate) {
    try {
        const numericAmount = normalizeAmountValue(amount);
        const numericRate =
            typeof rate === "string" ? Number(rate) : Number(rate);

        if (
            Number.isNaN(numericAmount) ||
            Number.isNaN(numericRate)
        ) {
            return null;
        }

        const rawValue = numericAmount * numericRate;
        const roundedValue = roundToTwoDecimals(rawValue);

        return roundedValue;
    } catch (error) {
        console.log(error);
        throw error;
    }
}