# Currency Converter
Implement an API that provides currency conversion. Round the converted amount to the second decimal place and format the converted amount to include comma separators as thousands separators, such as 123,456.78.

- [install](#Install)
- [usage](#Usage)

## Install
- install node
    - https://nodejs.org/en/download
- set config
    ```js
    port: 3000, // listen port
    exchangeRates: { 
        USD: 1,
        TWD: 30,
        EUR: 0.85,
        JPY: 150,
    },
    ```
- install packages
    ```bash
    npm install
    ```
## Usage
- run server.js
    ```bash
    node server.js
    ```
- call api
    ```bash
     curl 'localhost:3000?source=USD&target=JPY&amount=$10,525.5
    ```
- test
    ```bash
    npx mocha test/testCurrencyConverter.js
    ```
