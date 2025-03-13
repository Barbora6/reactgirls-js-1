// Počet sekund
// Vytvoř funkci pocetSekund se čtyřmi parametry: dny, hodiny, minuty, sekundy. Výsledkem funkce bude celkový počet sekund v zadaném časovém období.

const vypocetSekund = () => {
  let dny = Number(prompt("Zadej počet dnů:"));
  let hodina = Number(prompt("Zadej počet hodin:"));
  let minuta = Number(prompt("Zadej počet minut:"));
  let sekundy = Number(prompt("Zadej počet sekund:"));

  let vysledek = dny * 86400 + hodina * 3600 + minuta * 60 + sekundy;

  console.log(`Celkový počet sekund je ${vysledek}`);
};

vypocetSekund();

// function pocetSekund(dny, hodiny, minuty, sekundy) {
//     return (dny * 86400) + (hodiny * 3600) + (minuty * 60) + sekundy;
// }
