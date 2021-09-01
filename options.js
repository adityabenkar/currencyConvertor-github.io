/** @format */

const select = document.querySelectorAll("select");
const currency = [
  "AED",
  "ARS",
  "AUD",
  "BGN",
  "BRL",
  "BSD",
  "CAD",
  "CHF",
  "CLP",
  "CNY",
  "COP",
  "CZK",
  "DKK",
  "DOP",
  "EGP",
  "EUR",
  "FJD",
  "GBP",
  "GTQ",
  "HKD",
  "HRK",
  "HUF",
  "IDR",
  "ILS",
  "INR",
  "ISK",
  "JPY",
  "KRW",
  "KZT",
  "MXN",
  "MYR",
  "NOK",
  "NZD",
  "PAB",
  "PEN",
  "PHP",
  "PKR",
  "PLN",
  "PYG",
  "RON",
  "RUB",
  "SAR",
  "SEK",
  "SGD",
  "THB",
  "TRY",
  "TWD",
  "UAH",
  "USD",
  "UYU",
  "VND",
  "ZAR",
];

for (let i = 0; i < select.length; i++) {
  const sel = select[i];
  for (let j = 0; j < currency.length; j++) {
    var opt = currency[j];
    const el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    sel.appendChild(el);
  }
}