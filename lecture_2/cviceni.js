function zmenTextNadpisu() {
  let uvod = document.querySelector("#uvod");
  uvod.style.color = "green";
}

// Ještě musíme říct, za jakých okolností se naše funkce vyvolá
// pro jaký druh události a na jakém elementu

{
  // <button onclick="zmenTextNadpisu()">Změň barvu nadpisu</button>;
}

// v HTML
{
  /* <button id="tlacitko1">Změň text nadpisu</button> */
}

// V JavaScriptu:
let tlacitko1 = document.querySelector("#tlacitko1");
tlacitko1.addEventListener("click", zmenTextNadpisu);

// V HTML:
{
  /* <button id="tlacitko2">Změň text nadpisu</button> */
}

// V JavaScriptu:
let tlacitko2 = document.querySelector("#tlacitko2");
tlacitko2.addEventListener("click", function () {
  let paragraph2 = document.querySelector("#paragraph-2");
  paragraph2.innerHTML = "red";
});
