// Prvočísla
// Vytvoř funkci jePrvocislo, která o své číselném parametru rozhodne, zda je, či není prvočíslem, a podle toho vrátí buď hodnotu true, nebo hodnotu false.

let prvocislo = Number(prompt("Zadej číslo:"));

const jePrvocislo = () => {
  if (1 > prvocislo || prvocislo < 6) {
    console.log("Jedná se o prvočíslo.");
  } else {
    console.log("Není prvočíslo.");
  }
};

jePrvocislo();
