const words = [
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
  "had", "hair", "hairbrush", "haircut", "ham", "hang", "happy", "has", "hat", "have", "he", "hear", "heard",
  "heavy", "hello", "help", "her", "here", "his", "home", "homework", "horror", "horse", "hospital", "hotdog", "hotel",
  "hour", "house", "how", "hung", "hungry", "hurt", "husband", "Henrry", "Harry", "Homer", "Hellen", "Holland", "Harold",
  "I", "icecream", "important", "in", "insect", "inside", "intelligent", "interview", "into", "invoice", "iron", "is", "it",
  "international", "island", "irregular", "interesting", "ice", "Iris", "Isabel", "Ivy", "Ingrid", "Isabelle", "Isabella", "Isabel", "Irene",
  "jacket", "jar", "jeans", "job", "join", "joke", "juice", "just", "Joice", "James", "Jake", "Jonsson", "Julius",
  "key", "keyboard", "kid", "kilometer", "kind", "kitchen", "knew", "know", "Kate", "Kelly", "Kim", "Kitty", "Krinstin",
  "lake", "lamp", "land", "language", "large", "last", "late", "later", "laugh", "laundromat", "lawyer", "leave", "left",
  "leg", "lesson", "letter", "like", "library", "lion", "listen", "little", "long", "lose", "lost", "loud", "love",
  "lunch", "Laura", "Lilly", "Lidia", "Lorene", "Lee", "Lanna", "Lea", "Lauren", "Lara", "Lana", "Louis", "Liz",
  "machine", "made", "magazine", "mailbox", "make", "mall", "man", "many", "map", "market", "married", "massage", "maybe",
  "me", "meal", "meat", "mechanic", "meet", "meeting", "men", "message", "met", "mile", "milk", "million", "minute",
  "money", "month", "morning", "mother", "motorcycle", "move", "movie", "museum", "musics", "musician", "my", "Martha", "Megan",
  "name", "near", "neighbor", "nest", "never", "new", "newspaper", "next", "nice", "night", "nine", "nineteen", "no",
  "noisy", "noon", "not", "now", "Neville", "Norton", "Nathan", "Norman", "Nate", "Nicola", "Nancy", "Nestor", "Nicolas",
  "occasionally", "of", "office", "often", "old", "on", "once", "one", "onion", "only", "open", "orange", "organize",
  "our", "out", "owner", "Ollie", "Octavius", "Olivia", "Owen", "Olga", "Oliver", "Olive", "Opal", "Ora", "Ophelia",
  "paid", "paint", "painting", "pantry", "pants", "papers", "park", "party", "past", "pasta", "pay", "pear", "pen",
  "pencil", "people", "person", "pet", "pharmacy", "phone", "piano", "picture", "pink", "plan", "plane", "plate", "play",
  "population", "pork", "post", "potato", "present", "president", "pretty", "price", "project", "property", "purpule", "purse", "put",
  "prepare", "practice", "partition", "presentation", "Phill", "Penny", "Patrick", "Paul", "Polly", "Patrice", "Peggy", "Priscilla", "Pennelope",
  "quake", "qualify", "quality", "quarantine", "quarrel", "queen", "question", "queue", "quick", "quiet", "quit", "quiver", "quitter",
  "radio", "rain", "ran", "rarely", "reach", "read", "ready", "red", "refrigerator", "regular", "regularly", "remote", "report",
  "reservation", "restaurant", "return", "rib", "ride", "right", "ring", "rode", "room", "roommate", "rose", "ruler", "run",
  "run", "rock", "rook", "Robert", "Rick", "Ronaldo", "Richard", "Richarlison", "Rosalyn", "Rose", "Robbin", "Rochelle", "Rita",
  "sad", "said", "same", "sandwich", "sang", "sat", "satisfied", "saw", "say", "scared", "school", "scientist", "season",
  "second", "secretary", "see", "sell", "semester", "send", "sent", "service", "seven", "seventeen", "she", "shelf", "shine",
  "shirt", "shoe", "shop", "short", "show", "shower", "shut", "sick", "sing", "singer", "single", "sister", "six",
  "sixteen", "skate", "skirt", "sky", "sleep", "slept", "small", "smile", "sneaker", "soccer", "sock", "sold", "solid",
  "some", "something", "sometimes", "son", "song", "space", "spaceship", "speak", "spend", "spent", "spoke", "sport", "start",
  "station", "stay", "stop", "store", "story", "strange", "street", "student", "study", "subway", "suddenly", "suit", "suitcase",
  "summer", "sun", "supermarket", "surgeon", "swam", "sweater", "swim", "Sully", "Sarah", "Shelly", "Sophia", "Stacy", "Susan",
  "table", "take", "talk", "tall", "taught", "tea", "teach", "teacher", "teeth", "telephone", "television", "tell", "ten",
  "test", "that", "the", "theater", "their", "them", "then", "there", "these", "they", "thing", "think", "thirteen",
  "thirty", "this", "those", "thought", "three", "thunder", "ticket", "tie", "tiger", "time", "tired", "to", "today",
  "together", "toilet", "told", "tomorrow", "tonight", "too", "took", "tooth", "toy", "train", "trash", "travel", "tree",
  "trip", "truck", "try", "twelve", "twenty", "twice", "two", "Timmy", "Tommy", "Tom", "Trevor", "Thomas", "Tara",
  "ugly", "ulcer", "umbrella", "uncle", "unhappy", "under", "union", "until", "us", "usually", "Ursula", "up", "use",
  "vacations", "valley", "valuable", "van", "variety", "vase", "vegetable", "very", "victim", "visit", "vitamin", "volleyball", "volunteer",
  "wait", "walk", "wall", "wallet", "was", "wash", "watch", "water", "we", "wear", "weather", "wedding", "week",
  "weekend", "well", "went", "were", "what", "when", "where", "white", "who", "why", "wife", "will", "win",
  "winter", "with", "woman", "women", "won", "word", "wore", "work", "world", "worry", "write", "writer", "wrong",
  "xerox", "yard", "yawn", "year", "yellow", "yes", "yesterday", "yogurt", "you", "young", "your", "youth", "yummy",
  "zebra", "zinc", "zone", "zoo"
];

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
    
    wordsDiv.innerHTML += `<span>${word}</span>`;
    inputs.push(word);
  }
}

input.addEventListener("keyup", function(event) {
  if (event.keyCode === 32) { // espaço
    const palavraDigitada = input.value.trim();
    const palavraCorreta = inputs[0];
    
    if (palavraDigitada === palavraCorreta) {
      corrects++;
      inputs.shift();
      wordsDiv.children[0].classList.add("acertou");
    } else {
      wordsDiv.children[0].classList.add("errou");
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