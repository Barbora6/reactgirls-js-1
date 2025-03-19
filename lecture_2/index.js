// Změna obsahu nadpisu h1
let nadpisH1 = document.querySelector("h1");
nadpisH1.innerHTML = "Nadpis změněný z JavaScriptu!";

// Změna adresy obrázku
let obrazekObliceje = document.querySelector("#face-emoji");
obrazekObliceje.src = "yellow-face-pleased.svg";

// Změna stylů odstavce
let uvod = document.querySelector("#uvod");
uvod.style.color = "green";
uvod.style.textAlign = "right";

// Přidání třídy elementu
let ctverecek = document.querySelector(".ctverecek");
ctverecek.classList.add("aktivni");

// Vytvoření funkce na změnu aktivnosti = PŘIDÁVÁ A ODEBÍRÁ CLASS (např. na změnu barvy)

const changeActive = (event) => {
  const eventElement = event.target;
  eventElement.classList.toggle("aktivni");
};

ctverecek.addEventListener("click", changeActive);

// Vygenerování náhodného čísla
const randomNumber = (minimum, maximum) => {
  const result = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
  return result;
};
