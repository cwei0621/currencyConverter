const chai = require('chai');
const assert = chai.assert;
const CurrencyConverter = require('../CurrencyConverter'); 
const exchangeRates = require('../config').exchangeRates; 

describe('CurrencyConverter', () => {
  const converter = new CurrencyConverter(exchangeRates);

  it('should convert currencies correctly', () => {
    const convertedAmount = converter.convert(100, 'USD', 'EUR');
    assert.equal(convertedAmount, 85.00);
  });

  it('should handle the same source and target currencies', () => {
    const convertedAmount = converter.convert(100, 'USD', 'USD');
    assert.strictEqual(convertedAmount, 100);
  });

  it('should format currency amount correctly', () => {
    const formattedAmount = converter.formatCurrency(1234567.89);
    assert.strictEqual(formattedAmount, '1,234,567.89');
  });

  it('should throw an error for invalid currency codes', () => {
    assert.throws(() => converter.convert(100, 'USD', 'XYZ'), 'Invalid currency code.');
  });
});

