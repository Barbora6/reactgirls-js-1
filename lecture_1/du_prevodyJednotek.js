// Převody jednotek
// Vytvoř funkci fahrenheitNaCelsius, která jako parametr dostane teplotu ve stupních Fahrenheita a jako výsledek vrátí teplotu ve stupních Celsia.
// Vytvoř funkci stopyAPalceNaCentimetry, která jako parametry dostane počet stop a počet palců a jako výsledek vrátí odpovídající délku v centimetrech.
let teplota = 30;

const prevodFahrenheitNaCelsia = () => {
  let vysledek = ((teplota - 32) * 5) / 9;
  console.log(`Výsledná teplota je ${vysledek.toFixed(2)} stupňů Celsia.`);
};

prevodFahrenheitNaCelsia();

const prevodStopyAPalceNaCentrimetry = () => {
  let stopy = Number(prompt("Zadej počet stop:"));
  let palce = Number(prompt("Zadej počet palců:"));
  let vysledek = stopy * 30.48 + palce * 2.54;
  console.log(`Celkový počet délky v centimetrech je: ${vysledek}`);
};

prevodStopyAPalceNaCentrimetry();
