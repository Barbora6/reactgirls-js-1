function changeBackground(z) {
  let a = getComputedStyle(z);
  let b = a.backgroundColor;

  document.getElementsByTagName("body")[0].style.backgroundColor = b;
}
