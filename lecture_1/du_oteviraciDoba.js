// Vytvoř funkci jeOtevrenoNeboZavreno, která bude mít jeden číselný parametr hodina (který zjednodušeným způsobem vyjadřuje, kolik je zrovna hodin: vyjadřuje hodinu v rámci dne, tedy od 0 do 23). Vymysli si otevírací dobu fiktivního obchodu (ideálně i s dostatečně dlouhou polední přestávkou) a na základě ní funkci implementuj, aby vracela řetězec "je otevřeno", nebo "je zavřeno".

let time = Number(prompt("Zadej hodinu"));

const openingTime = (time) => {
  if ((time > 9 && time < 12) || (time > 13 && time < 18)) {
    console.log("je otevřeno");
  } else if (time > 12 && time < 13) {
    console.log("polední pauza");
  } else {
    console.log("je zavřeno");
  }
};

// function jeOtevrenoNeboZavreno(hodina) {
//   // Otevírací doba: 8:00 - 12:00 a 14:00 - 18:00
//   if ((hodina >= 8 && hodina < 12) || (hodina >= 14 && hodina < 18)) {
//     return "je otevřeno";
//   } else {
//     return "je zavřeno";
//   }
// }
