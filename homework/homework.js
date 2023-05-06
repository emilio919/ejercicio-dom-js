const divs = [
  document.getElementById("div1"),
  document.getElementById("div2"),
  document.getElementById("div3"),
]; // Paso 1

for (let i = 0; i < divs.length; i++) {
  divs[i].innerText = `box ${i + 1}`; // Paso 2

  if (i === 0) {
    divs[i].style.backgroundColor = "red"; // Pintar box 1 en rojo
  } else if (i === 1) {
    divs[i].style.backgroundColor = "green"; // Pintar box 2 en verde
  } else if (i === 2) {
    divs[i].style.backgroundColor = "blue"; // Pintar box 3 en azul
  }
}
