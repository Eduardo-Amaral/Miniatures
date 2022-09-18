/** SCRIPT GLOBAL IMPORTADO EM TODOS OS ARQUIVOS HTML **/

// EVENTO 1: Altera a cor de certos elementos de acordo com o valor do "modoEscuro", e depois inverte o seu valor.

//Algoritmo do modo escuro
var modoEscuro = false;
var switcher = document.getElementsByClassName("slider")[0];
var root = document.querySelector(":root");
switcher.addEventListener("click", () => {
  modoEscuro = !modoEscuro;
  console.log(modoEscuro);
  if (modoEscuro == true) {
    //Transforma variáveis css brancas por pretas e muda algumas imagens
    document.querySelector("header img").src = "../assets/images/logoDark.png";
    root.style.setProperty("--cor-branco", "black");
    root.style.setProperty("--cor-preto", "whitesmoke");
    document.querySelector("#resumo-section img").src =
      "../assets/images/logoDark.png";
  } else {
    //Transforma variáveis css pretas por brancas e muda algumas imagens
    document.querySelector("header img").src = "../assets/images/logo.png";
    root.style.setProperty("--cor-preto", "black");
    root.style.setProperty("--cor-branco", "whitesmoke");
    document.querySelector("#resumo-section img").src =
      "../assets/images/logo.png";
  }
});

/* EVENTO 2: Some com o popup de boas vindas depois de 2 segundos*/

var welcome = document.getElementById("welcome");
function showWelcome() {
  setInterval(() => {
    welcome.style = "display:none";
  }, 2000);
}

// EVENTO 3: Faz com que a div de promoções seja exibida na tela ao rolar a página até a seção #video-container
var video = document.querySelector("#video-container");
if(video){
  video.addEventListener("mouseover", () => {
  document.querySelector("#promotion").style.display = "block";
});
}
// EVENTO 4: Faz com que a div de promoções suma ao sair da seção  #video-container

if(video){
  video.addEventListener("mouseout", () => {
    document.querySelector("#promotion").style.display = "none";
  });
}

// EVENTO 5: Exibe um alerta quando o formulário é enviado (evento chamado através do onsubmit no form)
function showMessage(){
  alert('Estaremos analisando o seu perfil e retornaremos em breve!');
}

// EVENTO 6: Adição + remoção do print de requisítos conforme a pessoa clica no texto "requisítos" na página "Quem Somos"

var estaVisivel = false;
document.getElementById('requirements-text').onclick = function(){
 
  if(estaVisivel == true){
    document.getElementById('requirements-img').style = "display:none !important";
   
  }else{
    document.getElementById('requirements-img').style = "display:block !important";
  }
  estaVisivel = !estaVisivel;
}








