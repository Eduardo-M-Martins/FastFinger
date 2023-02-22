const palavras = [
  "javascript", "html", "css", "programação", "desenvolvimento",
  "computador", "internet", "tecnologia", "interface", "design",
  "algoritmo", "codificação", "web", "banco de dados", "framework",
  "responsividade", "debug", "frontend", "backend", "repositório"
];

let palavrasDigitadas = [];
let palavrasCorretas = 0;
let tempoRestante = 60;
const entrada = document.getElementById("entrada");
const resultado = document.getElementById("resultado");
const palavrasDiv = document.getElementById("palavras");

function gerarPalavras() {
  palavrasDiv.innerHTML = "";
  palavrasDigitadas = [];
  palavrasCorretas = 0;
  
  for (let i = 0; i < 20; i++) {
    const indice = Math.floor(Math.random() * palavras.length);
    const palavra = palavras[indice];
    
    palavrasDiv.innerHTML += `<span>${palavra}</span>`;
    palavrasDigitadas.push(palavra);
  }
}

entrada.addEventListener("keyup", function(event) {
  if (event.keyCode === 32) { // espaço
    const palavraDigitada = entrada.value.trim();
    const palavraCorreta = palavrasDigitadas[0];
    
    if (palavraDigitada === palavraCorreta) {
      palavrasCorretas++;
      palavrasDigitadas.shift();
      palavrasDiv.children[0].classList.add("acertou");
    } else {
      palavrasDiv.children[0].classList.add("errou");
    }
    
    entrada.value = "";
    entrada.focus();
  }
});

function atualizarTempo() {
  tempoRestante--;
  resultado.innerHTML = `Palavras corretas: ${palavrasCorretas}<br>
                          Tempo restante: ${tempoRestante}s`;

  if (tempoRestante === 0) {
    entrada.removeEventListener("keyup", this);
    entrada.setAttribute("disabled", true);

    resultado.innerHTML = `Teste finalizado!<br> 
                            Palavras corretas: ${palavrasCorretas}`;
  }
}

gerarPalavras();
entrada.focus();
setInterval(atualizarTempo, 1000);