//Vitor Bispo Borges
//RA: 825242612
// parte3.js
console.log("--- Respostas da Parte 3 ---");

// Criando o array com 10 objetos (os carros e inventei uns valores pra testar)
let concessionariaDeLuxo = [
  { nome: 'Porsche 911 GT1', preco: 20000000, estoque: 1 },
  { nome: 'Porsche 918 Spyder', preco: 8000000, estoque: 3 },
  { nome: 'Porsche Carrera GT', preco: 5000000, estoque: 2 },
  { nome: 'McLaren P1', preco: 7000000, estoque: 4 },
  { nome: 'McLaren Senna', preco: 6000000, estoque: 2 },
  { nome: 'Porsche 959', preco: 10000000, estoque: 1 },
  { nome: 'McLaren F1', preco: 100000000, estoque: 0 },
  { nome: 'Porsche 911 GT3 RS', preco: 2000000, estoque: 10 },
  { nome: 'McLaren 765LT', preco: 3000000, estoque: 5 },
  { nome: 'McLaren Speedtail', preco: 12000000, estoque: 2 }
];

// A. Qual é o preço do segundo objeto?
// O índice 1 é o segundo elemento (a gente começa do 0, não esquece!)
console.log("A) Preço do 2º objeto:", concessionariaDeLuxo[1].preco);

// B. Qual é o nome do terceiro objeto?
console.log("B) Nome do 3º objeto:", concessionariaDeLuxo[2].nome);

// C. Quantos itens existem no array?
console.log("C) Total de itens no array:", concessionariaDeLuxo.length);

// D. Imprima o nome de todos os objetos.
console.log("D) Nome de todos os objetos:");
for (let i = 0; i < concessionariaDeLuxo.length; i++) {
  console.log(concessionariaDeLuxo[i].nome);
}

// E. Some o total de estoque de todos os objetos.
let somaEstoque = 0;
for (let i = 0; i < concessionariaDeLuxo.length; i++) {
  somaEstoque += concessionariaDeLuxo[i].estoque; // Pega o valor atual e soma com o próximo
}
console.log("E) Soma total do estoque:", somaEstoque);

// F. Qual objeto possui maior estoque?
// Essa eu tive que pensar um pouco. Comecei chutando que o primeiro é o maior e fui comparando no loop
let carroMaiorEstoque = concessionariaDeLuxo[0]; 

for (let i = 1; i < concessionariaDeLuxo.length; i++) {
  if (concessionariaDeLuxo[i].estoque > carroMaiorEstoque.estoque) {
    carroMaiorEstoque = concessionariaDeLuxo[i]; // Se achar um maior, ele vira o novo campeão
  }
}
console.log("F) Objeto com maior estoque:", carroMaiorEstoque.nome, "com", carroMaiorEstoque.estoque, "unidades.");

//Thiago Viana Meira
//RA: 82424566
// parte3.js
console.log("Parte 3");

let especiesvenenosas = [
  { nome: 'Aranha-armadeira', preco: 500, estoque: 12 },
  { nome: 'Escorpião-amarelo', preco: 300, estoque: 20 },
  { nome: 'Viúva-negra', preco: 450, estoque: 8 },
  { nome: 'Formiga-bala', preco: 150, estoque: 50 },
  { nome: 'Vespa-mandarina', preco: 600, estoque: 5 },
  { nome: 'Besouro-bombardeiro', preco: 200, estoque: 18 },
  { nome: 'Lagarta-de-fogo', preco: 100, estoque: 25 },
  { nome: 'Centopeia-gigante', preco: 700, estoque: 4 },
  { nome: 'Mosca-tsé-tsé', preco: 350, estoque: 14 },
  { nome: 'Carrapato-estrela', preco: 80, estoque: 40 }
];

// Qual é o preço do segundo objeto?
console.log("A) Preço do 2º objeto:", especiesvenenosas[1].preco);

// Qual é o nome do terceiro objeto?
console.log("B) Nome do 3º objeto:", especiesvenenosas[2].nome);

// Quantos itens existem no array?
console.log("C) Total:", especiesVenenosas.length);

// Imprima o nome de todos os objetos.
console.log("D) Nomes de todos os objetos:");
for (let i = 0; i < especiesvenenosas.length; i++) {
  console.log(especiesvenenosas[i].nome);
}

// Some o total de estoque de todos os objetos.
let somaestoque = 0;
for (let i = 0; i < especiesvenenosas.length; i++) {
  somaestoque += especiesvenenosas[i].estoque;
}
console.log("E) Soma total do estoque:", somaestoque);

// Qual objeto possui maior estoque?
let insetomaiorestoque = especiesvenenosas[0]; 

for (let i = 1; i < especiesvenenosas.length; i++) {
  if (especiesvenenosas[i].estoque > insetomaiorestoque.estoque) {
    insetomaiorestoque = especiesvenenosas[i];
  }
}

console.log(
  "F) Objeto com maior estoque:",
  insetomaiorestoque.nome,
  "com",
  insetomaiorestoque.estoque,
  "unidades."
);

//Igor Euripedes Garcia de Oliveira
//824117373
// parte3.js
console.log("--- Respostas da Parte 3 ---");

// Criando o array com 10 objetos (agora são jogos)
let lojaDeGames = [
  { nome: 'Monster Hunter: World', genero: 'RPG de Ação', preco: 249.90, estoque: 5 },
  { nome: 'The Witcher 3', genero: 'RPG', preco: 199.90, estoque: 8 },
  { nome: 'Elden Ring', genero: 'RPG', preco: 299.90, estoque: 3 },
  { nome: 'Call of Duty: Modern Warfare', genero: 'FPS', preco: 279.90, estoque: 6 },
  { nome: 'Counter-Strike 2', genero: 'FPS', preco: 0.00, estoque: 20 },
  { nome: 'Baldur’s Gate 3', genero: 'RPG', preco: 349.90, estoque: 4 },
  { nome: 'Halo Infinite', genero: 'FPS', preco: 149.90, estoque: 7 },
  { nome: 'Diablo IV', genero: 'RPG', preco: 299.90, estoque: 2 },
  { nome: 'Valorant', genero: 'FPS', preco: 0.00, estoque: 30 },
  { nome: 'Skyrim', genero: 'RPG', preco: 99.90, estoque: 10 }
];

// A. Qual é o preço do segundo objeto?
console.log("A) Preço do 2º objeto:", lojaDeGames[1].preco);

// B. Qual é o nome do terceiro objeto?
console.log("B) Nome do 3º objeto:", lojaDeGames[2].nome);

// C. Quantos itens existem no array?
console.log("C) Total de itens no array:", lojaDeGames.length);

// D. Imprima o nome de todos os objetos.
console.log("D) Nome de todos os jogos:");
for (let i = 0; i < lojaDeGames.length; i++) {
  console.log(lojaDeGames[i].nome);
}

// E. Some o total de estoque de todos os objetos.
let somaEstoque = 0;
for (let i = 0; i < lojaDeGames.length; i++) {
  somaEstoque += lojaDeGames[i].estoque;
}
console.log("E) Soma total do estoque:", somaEstoque);

// F. Qual objeto possui maior estoque?
let jogoMaiorEstoque = lojaDeGames[0];

for (let i = 1; i < lojaDeGames.length; i++) {
  if (lojaDeGames[i].estoque > jogoMaiorEstoque.estoque) {
    jogoMaiorEstoque = lojaDeGames[i];
  }
}

console.log("F) Jogo com maior estoque:", jogoMaiorEstoque.nome, 
            "com", jogoMaiorEstoque.estoque, "unidades.");
