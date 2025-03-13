// Funkce pro vygenerování náhodného celého čísla mezi hodnotami minimum (včetně) a maximum (včetně).
function nahodneCislo(minimum, maximum) {
  let vysledek = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
  return vysledek;
}

const MAXIMALNI_POCET_POKUSU = 10;

let viteznyZvuk = new Audio("victory.mp3");

let tajneCislo = nahodneCislo(1, 100);
console.log("Tajné číslo je:" + tajneCislo);

let pocitadloPokusu = 0;
let vsechnyPokusy = [];

let odesilaciTlacitko = document.querySelector("#submit-button");
let restartujiciTlacitko = document.querySelector("#play-again-button");

odesilaciTlacitko.addEventListener("click", function () {
  //   console.log("Uživatel kliknul");
  pocitadloPokusu = pocitadloPokusu + 1;

  let vstupniPolicko = document.querySelector("#number-input");
  let hodnotaPolicka = vstupniPolicko.value;
  let hadaneCislo = Number(hodnotaPolicka);

  vsechnyPokusy.push(hadaneCislo);

  let nadpis = document.querySelector("#message");
  let dolniHraniceElement = document.querySelector("#left-number");
  let horniHraniceElement = document.querySelector("#right-number");

  if (hadaneCislo === tajneCislo) {
    viteznyZvuk.play();
    nadpis.innerHTML = `Congratulations! You won. And you only needed ${pocitadloPokusu} guesses.`;
    odesilaciTlacitko.style.display = "none";
    restartujiciTlacitko.style.display = "inline-block";
  } else {
    if (pocitadloPokusu === MAXIMALNI_POCET_POKUSU) {
      nadpis.innerHTML = `Sorry, you´ve used all ${pocitadloPokusu} of your guesses.`;
      odesilaciTlacitko.style.display = "none";
      restartujiciTlacitko.style.display = "inline-block";
    } else if (hadaneCislo <= tajneCislo) {
      nadpis.innerHTML = `Too low! (You´ve already used ${pocitadloPokusu}).`;
      if (hadaneCislo + 1 > Number(dolniHraniceElement.innerHTML)) {
        dolniHraniceElement.innerHTML = hadaneCislo + 1;
      }
    } else {
      nadpis.innerHTML = `Too hight! (You´ve already used ${pocitadloPokusu}).`;
      if (hadaneCislo - 1 < Number(horniHraniceElement.innerHTML)) {
        horniHraniceElement.innerHTML = hadaneCislo - 1;
      }
    }
  }
});

restartujiciTlacitko.addEventListener("click", function () {
  //   způsobí znovu načtení stránky
  window.location.reload();
});
