// Obsahy, obvody, objemy a povrchy
// Vytvoř dle vlastního výběru funkce pro výpočet obsahu, obvodu, objemu nebo povrchu běžných geometrických útvarů. Například funkce pro výpočet obsahu čtverce bude mít pochopitelně jediný číselný parametr (délka hrany), zatímco funkce pro výpočet objemu kužele bude mít parametry dva (poloměr podstavy a výšku).

let square = 0;
let rectangle = 0;

let a = Number(prompt("Zadej parametr a:"));
let b = Number(prompt("Zadej parametr b:"));

const calculationVolumePerimetr = (a, b) => {
  if (4 * a) {
    console.log(`Výpočet velikosti obvodu čtverce je ${square}.`);
  } else if (a * b) {
    console.log(`Výpočet velikosti obvodu obdelníku je ${rectangle}`);
  }
};

function vypocetObsahuCtverce(strana) {
  return strana * strana;
}

function vypocetObvoduCtverce(strana) {
  return 4 * strana;
}

function vypocetObjemuKuzele(polomer, vyska) {
  return (1 / 3) * Math.PI * Math.pow(polomer, 2) * vyska;
}

function vypocetPovrchuKuzele(polomer, vyska) {
  let strana = Math.sqrt(Math.pow(polomer, 2) + Math.pow(vyska, 2));
  return Math.PI * polomer * (polomer + strana);
}
