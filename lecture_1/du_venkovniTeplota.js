// Hodnocení venkovní teploty
// Vytvoř funkci ohodnotTeplotu, která bude mít jeden číselný parametr teplota a která na základě zadané teploty vrátí řetězec "mrzne", "je zima", "je chladno", "je příjemně", "je odporné vedro", případně jakýkoliv jiný, který si vymyslíš.

let temperatur = Number(prompt("Jaká je venkovní teplota?"));

const outdoorTemperaturRating = (temperatur) => {
  if (temperatur > 10 && temperatur <= 10) {
    console.log(`Je zima, teplota je ${temperatur} stupňů.`);
  } else if (temperatur <= 0) {
    console.log(`Mrzne, teplota je ${temperatur} stupňů.`);
  } else if (temperatur >= 10 && temperatur <= 20) {
    console.log(`Je chladno, teplota je ${temperatur} stupňů.`);
  } else {
    console.log(`Je chladno, teplota je ${temperatur} stupňů.`);
  }
};

// function ohodnotTeplotu(teplota) {
//   if (teplota <= 0) {
//     return "mrzne";
//   } else if (teplota > 0 && teplota <= 10) {
//     return "je zima";
//   } else if (teplota > 10 && teplota <= 20) {
//     return "je chladno";
//   } else {
//     return "je příjemně";
//   }
// }
