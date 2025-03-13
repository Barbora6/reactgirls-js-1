// Funkce = je kus kodu, který si pojmenujeme a dáme za ni kulaté závorky
// mezi složené závorky můžeme napsat kód, který se vykoná
// někde v kódu, můžeme tuto funkci zavolat a tam se vykoná

function pozdravUzivatele() {
  let jmeno = prompt("Zadej svoje jméno:");
  console.log(`Ahoj, jmenuješ se: ${jmeno}`);
}

pozdravUzivatele();

// Funkce, která něco spočítá
/*Funkce má svoje parametry,
function aritmetickyPrumer(cislo1,cislo2){
let vysledek = (cislo1 + cislo2)/2} 
return vysledek;
}*/

const pytagorovaVeta = (a, b) => {
  let vysledek = Math.sqrt(a * a + b * b);
  return vysledek;
};

// funkce pro odmocninu Math.sqrt

let prepona = pytagorovaVeta(3, 4);
console.log(prepona);

// Funkce, která něco vykoná
