// console.log("Hello world");
// console.log(2 + 3 * 4);
// console.log((2 + 3) * 4);
// console.log(17 % 7);

// % = to co zbyde po dělení

// proměnná = něco, co ukazuje na nějaká data a dá se to v průběhu měnit

// Proměnná je jednoduše řečeno kousek paměti, kam si můžeme uložit nějaká data.

// V programování je proměnná úložiště, které udržuje hodnotu. Tato hodnota se může v průběhu výpočtu měnit, od toho se také proměnná jmenuje proměnná.

// Proměnná a datové typy
// let number1 = 42;
// let number2 = -15 - 4;
// let retezec = "Two households, both alike in dignity";
// console.log(number1);
// console.log(number1 - number2);

// let romeo = "Two households, both...";
// console.log(romeo);
// console.log("romeo");
// console.log("12" + 34);
// console.log(12 + "34");

// pokud je z jedné strany text ('řetězec'), tak se to převede na řetězec a pak se to spojí
// string = text, řetězec

// načtení vstupu od uživatele
// let enter = prompt("Zadej nějaký text:");
// pozor: výsledkem je vždy hodnota text
// let name1 = prompt("Zadej svoje jméno:");
// console.log("Tvoje jméno je " + name1 + ".");

// Úkol: KOLIK TI BUDE ZA ROK?

let age = prompt("Zadej svůj věk:");
let ageForYear = Number(age) + 1;
// console.log("Za rok ti bude" + ageForYear + "let.");

// zadaný text vem a převeď ho na číslo

// kdykoli získáváme data od uživatele, vždy je výsledek řetězec
let ageForYearAgaine = Number(prompt("Zadej svůj věk: ")) + 1;
console.log("Za rok ti bude " + ageForYear + "let.");

console.log(`Za rok ti bude ${ageForYear} let.`);

//  Úkol: urči za je číslo kladné nebo záportné
let number = 23;

if (number > 0) {
  console.log("číslo je kladné");
}

let number1 = 13;
if (number1 > 0) {
  console.log("číslo je kladné");
} else {
  console.log("číslo je záporné");
}

// Úkol: zadej hodinu
let hour = Number(prompt("Zadej hodinu:"));

let hodina = prompt("zadej hodinu");

if (hour <= 10) {
  console.log("Je ráno");
} else if (hour <= 12) {
  console.log("Je dopoledne.");
} else if (hour >= 12) {
  console.log("Je odpoledne.");
} else {
  console.log("Je večer.");
}

// && = 2 ampersanty, znamená a zároveň
// || = nebo

if (age >= 18 && age < 60) {
  console.log("něco");
}

// Když chceme vyjádřit podmínku, která se skládá z několika podmínek."
