// Cykly
// umožňují vykonávat kus kodu opakovaně
// jsou dvojího druhu

// Cyklus for
// úkol = vykonej 5x
for (let pocitadlo = 0; pocitadlo < 5; pocitadlo++) {
  console.log("Ahoj" + pocitadlo);
}

// za sebou napíšeme 3 věci 1. do počítadla mi dej hodnotu 0; 2. napíšeme podmínku, 3. zvedni hodnotu v proměnné počítadlo o 1

let x = 10;
x = x + 1;
// zkrácený zápis: x += 1, přičti k x 1 a ulož to do x
//  x ++

// iterační proměnná se nastaví
// napíše se podmínka
// provedou se všechny cykly
// a potom se prověří znovu podmínka

for (let pocitadlo1 = 0; pocitadlo1 < 5; pocitadlo1++) {
  console.log(`Ahoj ${pocitadlo1 + 1}`);
}
