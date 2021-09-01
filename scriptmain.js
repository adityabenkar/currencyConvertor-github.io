/** @format */
const currencyInput = document.getElementById("currency-input");
const currencyOutput = document.getElementById("currency-output");
const amountInput = document.getElementById("amount-input");
const amountOutput = document.getElementById("amount-output");
const rateEl = document.getElementById("rate");
const swap = document.getElementById("swap");
const preloader = document.querySelector(".preloader");

window.addEventListener("load", () => {
  setTimeout(() => {
    preloader.classList.add("disappear");
    calculate();
  }, 2500);
});

function calculate() {
  const currencyInputVal = currencyInput.value;
  const currencyOutputVal = currencyOutput.value;
  const amountInputVal = amountInput.value;
  fetch(
    ` https://v6.exchangerate-api.com/v6/8cfcfb68c9b710749f675884/latest/${currencyInputVal}`
  )
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      const rate = data.conversion_rates[currencyOutputVal];
      rateEl.textContent = `1 ${currencyInputVal} = ${rate} ${currencyOutputVal}`;
      amountOutput.value = (amountInputVal * rate).toFixed(2);
    });
}

swap.addEventListener("click", () => {
  const temp = currencyInput.value;
  currencyInput.value = currencyOutput.value;
  currencyOutput.value = temp;
  calculate();
});

currencyInput.addEventListener("change", calculate);
currencyOutput.addEventListener("change", calculate);
amountInput.addEventListener("input", calculate);
amountOutput.addEventListener("input", calculate);
