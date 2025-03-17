let vstupy = document.querySelector("#vstupy");
let themeBlue = document.querySelector(".theme-item theme-blue");
let themeBeige = document.querySelector(".theme-item theme-beige");
let themeGreen = document.querySelector(".theme-item theme-green");
let themeDark = document.querySelector(".theme-item theme-dark");

let vysledek = document.querySelector("#vysledek");

const chooseColor = (event) => {
  let themeElement = event.target;
  themeElement.classList.toggle("#vysledek");
};

themeBeige.addEventListener("click", chooseColor);
themeGreen.addEventListener("click", chooseColor);
themeDark.addEventListener("click", chooseColor);

/*-------------------------------------------------------*/
// text nadpisu

const zmenaLevehoNadpisu = () => {
  let tlacitkoNadpisu = document.querySelector("#btn-text");
  tlacitkoNadpisu.addEventListener("click", function () {
    let titleText = document.querySelector("#new-title");
    let vstupniPole = document.querySelector("#vstupni-pole");
    let hodnotaVyplnenaUzivatelem = vstupniPole.value;
    hodnotaVyplnenaUzivatelem.innerHTML = titleText;
  });
};
