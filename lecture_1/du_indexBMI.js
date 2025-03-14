// Index tělesné hmotnosti
// Vytvoř funkci bmi, která na základě hmotnosti a výšky spočte index tělesné hmotnosti (BMI).

const vypocetBMI = () => {
  let vyska = Number(prompt("Zadejte svoji výšku v cm:")) / 100;
  let vaha = Number(prompt("Zadejte svoji výšku v kg:"));
  let vysledek = vaha / (vyska * vyska);
  console.log(`Výsledek BMI je: ${vysledek.toFixed(2)}.`);
};

vypocetBMI();
ˇ;

// function bmi(hmotnost, vyska) {
//   return hmotnost / (vyska * vyska);
// }
