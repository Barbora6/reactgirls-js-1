console.log("Hello word");

// příklad z 1 hodiny
// for (let pocitadlo1 = 0; pocitadlo1 < 5; pocitadlo1++) {
//     console.log(`Ahoj ${pocitadlo1 + 1}`);
//   }

//   for (let pocitadlo = 0; pocitadlo < 5; pocitadlo++) {
//     console.log("Ahoj" + pocitadlo);
//   }

// O2 TV a Voyo se slučují do Oneplay. Novinka v otázkách a odpovědích

// vypsání slova ReactGirls pomocí cyklu,

// let retezec = "ReactGirls!";
// for (let i = 0; i < retezec.length; i++) {
//   console.log(retezec[i]);
// }

// Úkol:
// Vypište do konzole řetězec znak po znaku.
// Vypište do konzole řetězec odzadu znak po znaku.
// Vypište do konzole řetězec odzadu vcelku.
// Spočtěte počet samohlásek v řetězci.

// Vypsání řetězce z prava do leva, odzadu
let retezec = "ReactGirls!";
let retezecObracene = "";
for (let i = retezec.length - 1; i >= 0; i--) {
  retezecObracene = retezecObracene + retezec[i];
  //   console.log(retezecOdzadu[i]);
}
console.log(retezecObracene);

// "ReactGirls".toLowerCase();		// => "reactgirls" => malá písmena
// "ReactGirls".toUpperCase();		// => "REACTGIRLS" => VELKÁ PÍSMENA
// "ReactGirls".startsWith("React");	// => true => funkce, která řekne, zda začíná se slovem React
// "ReactGirls".endsWith("girls");	// => false

// POLE

let pole = [15, 5, -7, 0, 33];
// for (let i = 0; i < pole.length; i++) {
//   console.log(pole[i]);
// }

// // vypíše pole zezadu
// for (let i = pole.length - 1; i >= 0; i--) {
//   console.log(pole[i]);
// }
// // jak vypsat z pole pouze sudá čísla:
// // 1.varianta

// for (let i = 0; i < pole.length; i++) {
//   let aktualniCislo = pole[i];
//   if (aktualniCislo % 2 === 0) {
//     console.log(aktualniCislo);
//   }
// }

// for (let i = 0; i < pole.length; i++) {
//   if (pole[i] % 2 === 0) {
//     console.log(pole[i]);
//   }
// }

// zjišťuje, jesti je číslo sudé
// operátor  císlo % 2 === 0

// Jak v poli naleznete v poli nejmenší číslo:

let minimum = pole[0];
for (i = 1; i < pole.length; i++) {
  if (pole[i] < minimum) {
    minimum = pole[i];
  }
}

console.log(minimum);

// Upravte předchozí úkol na samostatnou funkci pro nalezení nejmenšího čísla v poli.

// let nejmensiCislo(pole) => {
//  let vysledek = ...
//     return vysledek
// }
