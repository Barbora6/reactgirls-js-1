let themeBlue = document.querySelector(".theme-blue");
let themeBeige = document.querySelector(".theme-beige");
let themeGreen = document.querySelector(".theme-green");
let themeDark = document.querySelector(".theme-dark");
let vysledek = document.querySelector("#vysledek");

function chooseColorBeige() {
  vysledek.classList.add("theme-beige");
}

function chooseColorBlue() {
  vysledek.classList.add("theme-blue");
}
function chooseColorGreen() {
  vysledek.classList.add("theme-green");
}
function chooseColorDark() {
  vysledek.classList.add("theme-dark");
}

themeBeige.addEventListener("click", chooseColorBeige);
themeGreen.addEventListener("click", chooseColorGreen);
themeBlue.addEventListener("click", chooseColorBlue);
themeDark.addEventListener("click", chooseColorDark);

/*-------------------------------------------------------*/
// text nadpisu = FUNGUJE TO!!!

let tlacitkoNadpisu = document.querySelector("#btn-text");

tlacitkoNadpisu.addEventListener("click", function () {
  let titleText = document.querySelector("#new-title");
  let vstupniPole = document.querySelector("#vstupni-pole").value;
  titleText.innerHTML = vstupniPole;
});

// ----------------------------------------------------------
// změna prokliku na jiný obrázek = FUNGUJE TO!!!
let tlacitkoOsel = document.getElementById("btn-osel");

let tlacitkoTucnak = document.getElementById("btn-tucnak");

let tlacitkoAligator = document.getElementById("btn-aligator");

let tlacitkoLenochod = document.getElementById("btn-lenochod");
let hlavniObrazek = document.getElementById("main-picture");

function zmenaObrazkuOsel() {
  hlavniObrazek.src = "./donkey.webp";
}

function zmenaObrazkuAligator() {
  hlavniObrazek.src = "./alligator.webp";
}
function zmenaObrazkuLenochod() {
  hlavniObrazek.src = "./sloth.webp";
}
function zmenaObrazkuTucnak() {
  hlavniObrazek.src = "./penguin.webp";
}

tlacitkoOsel.addEventListener("click", zmenaObrazkuOsel);
tlacitkoAligator.addEventListener("click", zmenaObrazkuAligator);
tlacitkoLenochod.addEventListener("click", zmenaObrazkuLenochod);
tlacitkoTucnak.addEventListener("click", zmenaObrazkuTucnak);

// ----------------------------------------------------------
// vypiš text do stránky = FUNGUJE TO!!!

let vychoziText = document.querySelector(".vychozi-text");
let tlacitkoOdstavec = document.getElementById("btn-odstavec");
let textOdstavce = document.querySelector("#text-odstavce");

function vypsaniTextu() {
  vychoziText.innerHTML = textOdstavce.value;
}

tlacitkoOdstavec.addEventListener("click", vypsaniTextu);

//  Vypsání uživatelského jména do stránky:
let vypsaniDoStranky = document.querySelector("#output1");
let tlacitkoInput = document.querySelector("#btn1");
let inputEnterUsername = document.querySelector("#tbuser");

function enterUserName() {
  vypsaniDoStranky.innerHTML = inputEnterUsername.value;
}

tlacitkoInput.addEventListener("click", enterUserName);
