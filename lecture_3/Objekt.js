// Objekt
/*
Datová struktura umožňující obsahovat více položek ve tvaru klíč-hodnota

let zamestnanec = {
jmeno: 'David',
prijmeni: 'Novák',
}

*/

let zamestnanci = [
  { jmeno: "Barbora", prijmeni: "Smetanová", vek: 45, mzda: 40000 },
  { jmeno: "Jana", prijmeni: "Černá", vek: 35, mzda: 30000 },
  { jmeno: "Jan", prijmeni: "Novotný", vek: 33, mzda: 60000 }
];

for (i = 0; i < zamestnanci.length; i++) {
  console.log(zamestnanci[i].prijmeni);
}

function nejmladsiZamestnanec(zamestnanci) {
  let vysledek = undefined;
  for (i = 0; i < zamestnanci.length; i++) {
    if (i === 0 || zamestnanci[i].length > vysledek.length) {
      vysledek = pole[i];
    }
  }
  return;
}

let nejmladsi = nejmladsiZamestnanec(zamestnanci);
console.log(nejmladsi.prijmeni);
