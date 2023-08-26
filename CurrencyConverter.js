class CurrencyConverter {
  constructor(exchangeRates) {
    this.exchangeRates = exchangeRates;
  }

  convert(amount, fromCurrency, toCurrency) {
    if (!this.exchangeRates[fromCurrency] || !this.exchangeRates[toCurrency]) {
      throw new Error('Invalid currency code.');
    }

    if (fromCurrency === toCurrency) {
      return amount;
    }

    const convertedAmount = amount * (this.exchangeRates[toCurrency] / this.exchangeRates[fromCurrency]);
    return convertedAmount;
  }

  formatCurrency(amount) {
    return amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  }
}

module.exports = CurrencyConverter;

