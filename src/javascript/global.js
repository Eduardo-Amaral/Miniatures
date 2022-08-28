/** SCRIPT GLOBAL IMPORTADO EM TODOS OS ARQUIVOS HTML **/

// Elementos HTML para JS
var switcher = document.getElementsByClassName("slider")[0];

//Algoritmo do modo escuro
var modoEscuro = false;

// Evento 1: Altera a cor de certos elementos de acordo com o valor do "modoEscuro", e depois inverte o seu valor.

var root = document.querySelector(":root");
switcher.addEventListener("click", () => {
  modoEscuro = !modoEscuro;
  console.log(modoEscuro);
  if (modoEscuro == true) {
    document.querySelector("header img").src = "../assets/images/logoDark.png";
    root.style.setProperty("--cor-branco", "black");
    root.style.setProperty("--cor-preto", "whitesmoke");
    document.querySelector("#resumo-section img").src =
      "../assets/images/logoDark.png";
  } else {
    document.querySelector("header img").src = "../assets/images/logo.png";
    root.style.setProperty("--cor-preto", "black");
    root.style.setProperty("--cor-branco", "whitesmoke");
    document.querySelector("#resumo-section img").src =
      "../assets/images/logo.png";
  }
});
