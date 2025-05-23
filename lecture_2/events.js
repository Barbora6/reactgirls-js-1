// Funkce pro změnu obsahu nadpisu první úrovně.
function zmenTextNadpisuH1() {
  let nadpisH1 = document.querySelector("h1");
  nadpisH1.innerHTML = "Nadpis změněný z JavaScriptu!";
}

// --------------------------------------------------

// Funkce pro změnu obsahu odstavce s identifikátorem "uvod".
function zmenTextUvodu() {
  let uvod = document.querySelector("#uvod");
  uvod.innerHTML =
    "Text odstavce změněný z JavaScriptu. Část textu je dokonce <em>důležitá</em>.";
}

// Navěšení funkce měnící text úvodu na kliknutí na tlačítko
let tlacitkoKUvodu = document.querySelector("#tlacitkoKUvodu");
tlacitkoKUvodu.addEventListener("click", zmenTextUvodu);

// --------------------------------------------------
// Funkce pro změnu obsahu odstavce s identifikátorem 'paragraph'
function zmenOdstavec() {
  let paragraph = document.querySelector("#paragraph");
  paragraph.innerHTML =
    "Klíčová slova může připravit server nebo případně JavaScript — tolerantnějšího vyhledávání dosáhneme převedením klíčových slov i hledaného řetězce na malá písmena (pro ještě tolerantnější vyhledávání můžeme odstranit diakritiku).";
}
let tlacitkoKParagrafu = document.querySelector("#tlacitkoKParagrafu");
tlacitkoKParagrafu.addEventListener("click", zmenOdstavec);
// --------------------------------------------------
// Druhá varianta přepínání:
// 1. Vytvořím funkci, kde vytvořím constanty na paragraph, původní text a nový text

// 2. Vytvoříme podmínku v textu:

// 3. Vytvořím si proměnnou na tlačítko tlacitkoKParagrafu

const changeParagraph = () => {
  let paragraphChange = document.querySelector("#paragraph-2");
  let puvodniText =
    "Při práci s událostmi se velmi často pracuje s tzv. anonymními funkcemi (funkcemi bez pojmenování), což si ukážeme na našem čtverečku.";
  let novyText =
    "Klíčová slova může připravit server nebo případně JavaScript — tolerantnějšího vyhledávání dosáhneme převedením klíčových slov i hledaného řetězce na malá písmena (pro ještě tolerantnější vyhledávání můžeme odstranit diakritiku).";

  if (paragraphChange.innerHTML === puvodniText) {
    paragraphChange.innerHTML = novyText;
  } else {
    paragraphChange.innerHTML = puvodniText;
  }
};

let buttonParagraph = document.querySelector("#tlacitkoKParagrafu-2");

buttonParagraph.addEventListener("click", changeParagraph);

// --------------------------------------------------
// Navěšení funkce pro přepínání třídy "aktivni" na kliknutí na první čtvereček
let prvniCtverecek = document.querySelector("#prvni-ctverecek");
prvniCtverecek.addEventListener("click", function () {
  prvniCtverecek.classList.toggle("aktivni");
});

// --------------------------------------------------

// Funkce pro přepínání třídy "aktivni" na elementu, který byl cílem události.
function zmenAktivnost(event) {
  let elementUdalosti = event.target;
  elementUdalosti.classList.toggle("aktivni");
}

// Navěšení funkce pro přepínání třídy "aktivni" na kliknutí na druhý, třetí a čtvrtý čtvereček DOKONČIT!
// let druhyCtverecek = document.querySelector("#druhy-ctverecek");
// let tretiCtverecek = document.querySelector("#treti-ctverecek");
// let ctvrtyCtverecek = document.querySelector("#ctvrty-ctverecek");
// druhyCtverecek.addEventListener("click", zmenAktivnost);
// tretiCtverecek.addEventListener("click", zmenAktivnost);
// ctvrtyCtverecek.addEventListener("click", zmenAktivnost);

// --------------------------------------------------

// Funkce pro vygenerování náhodného celého čísla mezi hodnotami minimum (včetně) a maximum (včetně).
function nahodneCislo(minimum, maximum) {
  let vysledek = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
  return vysledek;
}

// Funkce pro hod hrací kostkou o libovolném počtu stěn. Pro obvyklou kostku by se použilo volání hodKostkou(6).
function hodKostkou(pocetSten) {
  let vysledek = nahodneCislo(1, pocetSten);
  return vysledek;
}

// --------------------------------------------------

// Obsluha kliknutí na tlačítko "hoď kostkou": po jeho stisknutí se provede hod šestistěnnou kostkou a výsledek se
// zobrazí v podobě obrázku kostky jako obsah v HTML připraveného odstavce
let tlacitkoHodKostkou = document.querySelector("#hodKostkou");
tlacitkoHodKostkou.addEventListener("click", function () {
  // hození kostkou
  let cisloNaKostce = hodKostkou(6);
  // nalezení odstavce připraveného pro zapsání výsledku a změna jeho obsahu
  let odstavecVysledek = document.querySelector("#hodKostkouVysledek");
  odstavecVysledek.innerHTML = `<img src="dice-${cisloNaKostce}.svg">`;
});

// --------------------------------------------------

// Obsluha kliknutí na tlačítko "házej kostkou, dokud nepadne šestka": po jeho stisknutí se hází kostkou tak dlouho,
// než padne šestka, a do odstavce připraveného v HTML se zobrazí obrázky kostky reprezentující všechny hody, které
// byly potřeba
let tlacitkoHazejKostkouDoSestky = document.querySelector(
  "#hazejKostkouDoSestky"
);
tlacitkoHazejKostkouDoSestky.addEventListener("click", function () {
  // proměnná, do které budeme postupně slepovat výsledné "innerHTML" všech obrázků kostek
  let vyslednyObsah = "";
  // proměnná obsahující výsledek jednoho hodu kostkou
  let cisloNaKostce;
  do {
    // hození kostkou
    cisloNaKostce = hodKostkou(6);
    // aktualizace výsledného obsahu o jeden obrázek
    vyslednyObsah = vyslednyObsah + `<img src="dice-${cisloNaKostce}.svg"> `;
  } while (cisloNaKostce !== 6);

  // nalezení odstavce připraveného pro zapsání výsledku a změna jeho obsahu
  let odstavecVysledek = document.querySelector(
    "#hazejKostkouDoSestkyVysledek"
  );
  odstavecVysledek.innerHTML = vyslednyObsah;
});
