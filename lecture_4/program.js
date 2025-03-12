// Funkce pro vygenerování náhodného celého čísla mezi hodnotami minimum (včetně) a maximum (včetně).
function nahodneCislo(minimum, maximum) {
  let vysledek = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
  return vysledek;
}

let tajneCislo = nahodneCislo(1, 100);
console.log("Tajné číslo je:" + tajneCislo);

let odesilaciTlacitko = document.querySelector("#submit-button");
odesilaciTlacitko.addEventListener("click", function () {
  //   console.log("Uživatel kliknul");
  let vstupniPolicko = document.querySelector("#number-input");
  let hodnotaPolicka = vstupniPolicko.value;
  let hadaneCislo = Number(hodnotaPolicka);

  let nadpis = document.querySelector("#message");
  let dolniHraniceElement = document.querySelector("#left-number");
  let horniHraniceElement = document.querySelector("#right-number");

  if (hadaneCislo === tajneCislo) {
    nadpis.innerHTML = "Congratulations! You won.";
    odesilaciTlacitko.style.display = "none";

    let restartujiciTlacitko = document.querySelector("#play-again-button");
    restartujiciTlacitko.style.display = "inline-block";
  } else if (hadaneCislo < tajneCislo) {
    nadpis.innerHTML = "Too low!";
    dolniHraniceElement.innerHTML = hadaneCislo + 1;
  } else {
    nadpis.innerHTML = "Too hight!";
    horniHraniceElement.innerHTML = hadaneCislo - 1;
  }
});
