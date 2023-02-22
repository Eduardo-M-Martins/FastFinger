const palavras = [
  "a", "an", "about", "accountant", "actor", "after", "afternoon", "again", "ago", "airplane", "all", "also", "always",
  "and", "animal", "another", "answer", "ant", "any", "anymore", "apartment", "apple", "architect", "are", "arm", "around",
  "arrive", "article", "artist", "at", "ate", "Arthur", "Anne", "Amber", "Austin", "Alice", "Alvin", "Ashley", "Abigail",
  "baby", "back", "backpack", "bag", "bake", "bakery", "ball", "bank", "bar", "barbecue", "be", "beach", "bear",
  "beautiful", "because", "bed", "bedroom", "bee", "beer", "before", "began", "begin", "belt", "between", "bicycle", "big",
  "bike", "bill", "bird", "birthday", "black", "blanket", "blond", "blouse", "blue", "boat", "book", "boss", "bought",
  "box", "boy", "boyfriend", "bread", "break", "breakfast", "bring", "broccoli", "broke", "brother", "brought", "brown", "browse",
  "brush", "building", "bus", "busy", "but", "butter", "buy", "by", "Bard", "Billy", "Bernard", "Barbie", "Ben",
  "cabinet", "cake", "call", "came", "candy", "car", "carrot", "carry", "cash", "cat", "chair", "chapter", "charity",
  "cheap", "check", "cheese", "chef", "chess", "chicken", "child", "children", "chocolate", "church", "circus", "city", "class",
  "clean", "client", "clock", "close", "closet", "clothes", "cloud", "club", "coat", "coffee", "cold", "colleague", "color",
  "come", "comedy", "computer", "concert", "conference", "continent", "cook", "cookie", "cost", "couch", "country", "cousin", "crowded",
  "cry", "cure", "cut", "Cloe", "Calvin", "Connan", "Camille", "Candace", "Cara", "Caitlin", "Cameron", "Carl", "Carson",
  "daily", "dance", "dark", "date", "daughter", "day", "decorate", "delicious", "democrat", "dentist", "designer", "desk", "diamond",
  "dictionary", "did", "different", "difficult", "dinner", "disease", "dish", "do", "doctor", "dog", "doll", "door", "drank",
  "dress", "drink", "drive", "drove", "during", "Duncan", "David", "Deise", "Dylan", "Dory", "Daryl", "Daphine", "Dustin",
  "eat", "economy", "egg", "eight", "eighteen", "electric", "eleven", "empty", "engineer", "enjoy", "enough", "entire", "environment",
  "eraser", "every", "exam", "executive", "exercise", "expensive", "eye", "Edward", "Eddy", "Emilly", "Eve", "Ernest", "Elloy",
  "fall", "family", "father", "favorite", "feel", "fell", "felt", "fifteen", "film", "final", "find", "finger", "finish",
  "first", "five", "fix", "flew", "floor", "florist", "flower", "fly", "food", "for", "forget", "forgot", "forty",
  "found", "four", "fourteen", "friend", "friendly", "from", "fruit", "full", "funny", "future", "FastFinger!", "Freddy", "Flynt",
  "game", "garage", "gas", "gasoline", "gave", "get", "gift", "girl", "give", "glass", "go", "good", "goodbye",
  "got", "graduate", "graduation", "grandson", "gray", "great", "green", "groceries", "ground", "group", "guess", "guitar", "guy",
  "gym", "Grace", "Gordon", "Gustav", "Gregory", "Guillermo", "Georgia", "Giancarlo", "Gerald", "Gilbert", "Grant", "Gideon", "Giovanna",
  "", "", "", "", "", "", "", "", "", "", "", "", "",
  "", "", "", "", "", "", "", "", "", "", "", "", "",
  "", "", "", "", "", "", "", "", "", "", "", "", "",
  "", "", "", "", "", "", "", "", "", "", "", "", "",
  "", "", "", "", "", "", "", "", "", "", "", "", "",
  "", "", "", "", "", "", "", "", "", "", "", "", "",
  "", "", "", "", "", "", "", "", "", "", "", "", "",
  "", "", "", "", "", "", "", "", "", "", "", "", "",
  "", "", "", "", "", "", "", "", "", "", "", "", "",
  "", "", "", "", "", "", "", "", "", "", "", "", "",
  "", "", "", "", "", "", "", "", "", "", "", "", "",
  "", "", "", "", "", "", "", "", "", "", "", "", "",
  "", "", "", "", "", "", "", "", "", "", "", "", "",
  "", "", "", "", "", "", "", "", "", "", "", "", "",
  "", "", "", "", "", "", "", "", "", "", "", "", "",
  "", "", "", "", "", "", "", "", "", "", "", "", ""
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