import { words } from "./words.js";
let inputs = [];
let corrects = 0;
let time = 60;
const input = document.getElementById("input");
const result = document.getElementById("result");
const wordsDiv = document.getElementById("words");

function gerarPalavras() {
  wordsDiv.innerHTML = "";
  inputs = [];
  corrects = 0;
  
  for (let i = 0; i < 120; i++) {
    const index = Math.floor(Math.random() * words.length);
    const word = words[index];
    
    wordsDiv.innerHTML += `<span id='${word}'>${word}</span>`;
    inputs.push(word);
  }
}

input.addEventListener("keyup", function(event) {
  if (event.keyCode === 32 || event.keyCode === 13) { // space or enter
    const palavraDigitada = input.value.trim();
    const palavraCorreta = inputs[0];
    if (palavraDigitada === palavraCorreta) {
      corrects++;
      inputs.shift();
      document.getElementById(palavraCorreta).classList.add("true");
    } else {
      document.getElementById(palavraCorreta).classList.add("false");
    }
    
    input.value = "";
    input.focus();
  }
});

function atualizarTempo() {
  time--;
  result.innerHTML = `Palavras corretas: ${corrects}<br>
                          Tempo restante: ${time}s`;

  if (time === 0) {
    input.removeEventListener("keyup", this);
    input.setAttribute("disabled", true);

    result.innerHTML = `Teste finalizado!<br> 
                            Palavras corretas: ${corrects}`;
  }
}

gerarPalavras();
input.focus();
setInterval(atualizarTempo, 1000);