const currencyFirstEl = document.getElementById("currency-first");
const worthFirstEl = document.getElementById("worth-first");
const currencySecondEl = document.getElementById("currency-second");
const worthSecondEl = document.getElementById("worth-second");
const exchangeRateEl = document.getElementById("exchange-rate");

exchangeRateEl.innerText = "";

function updateRate(){
    fetch(`https://v6.exchangerate-api.com/v6/7fc82ca408e7902a576e06de/latest/${currencyFirstEl.value}`
    )
    .then((response) => response.json())
    .then((data) => {
        const rate = data.conversion_rates[currencySecondEl.value];
        console.log(rate);
        exchangeRateEl.innerText = `1 ${currencyFirstEl.value} = ${rate + " " + currencySecondEl.value}`;
        worthSecondEl.value = (worthFirstEl.value * rate).toFixed(2)
    });
}

currencyFirstEl.addEventListener("change", updateRate);
currencySecondEl.addEventListener("change", updateRate );
worthFirstEl.addEventListener("input", updateRate);
worthSecondEl.addEventListener("input", updateRate);