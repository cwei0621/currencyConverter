const http = require('http');
const url = require('url');
const CurrencyConverter = require('./CurrencyConverter');

const exchangeRates = {
  USD: 1,
  TWD: 30,
  EUR: 0.85,
  JPY: 150,
};

const converter = new CurrencyConverter(exchangeRates);

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const query = parsedUrl.query;

  const amountString = query.amount;
  const cleanedAmountString = amountString.replace(/[^0-9.]/g, '');
  const amount = parseFloat(cleanedAmountString);

  const source = query.source || 'USD';
  const target = query.target || 'USD';

  try {
    const convertedAmount = converter.convert(amount, source, target);
    const formattedAmount = converter.formatCurrency(convertedAmount);
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`${amount} ${source} is approximately ${formattedAmount} ${target}\n`);
  } catch (error) {
    console.log(error)
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Currency conversion failed.');
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

