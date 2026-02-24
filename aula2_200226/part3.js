//Daniel Reis Araújo Borges
//RA: 825262646
// parte3.js
console.log("--- Respostas da Parte 3 ---");

// Criando o array com 10 objetos (as cores e inventei uns valores pra testar)
let lojaDeTintas = [
  { nome: 'Azul Ultramarino', preco: 150, estoque: 10 },
  { nome: 'Vermelho Carmesim', preco: 80, estoque: 30 },
  { nome: 'Amarelo Ocre', preco: 50, estoque: 25 },
  { nome: 'Verde Esmeralda', preco: 120, estoque: 15 },
  { nome: 'Branco Titânio', preco: 60, estoque: 50 },
  { nome: 'Preto Marfim', preco: 55, estoque: 40 },
  { nome: 'Magenta Primário', preco: 90, estoque: 0 },
  { nome: 'Rosa Choque', preco: 70, estoque: 20 },
  { nome: 'Turquesa Vibrante', preco: 85, estoque: 5 },
  { nome: 'Dourado Metálico', preco: 200, estoque: 2 }
];

// A. Qual é o preço do segundo objeto?
// O índice 1 é o segundo elemento (a gente começa do 0, não esquece!)
console.log("A) Preço do 2º objeto:", lojaDeTintas[1].preco);

// B. Qual é o nome do terceiro objeto?
console.log("B) Nome do 3º objeto:", lojaDeTintas[2].nome);

// C. Quantos itens existem no array?
console.log("C) Total de itens no array:", lojaDeTintas.length);

// D. Imprima o nome de todos os objetos.
console.log("D) Nome de todos os objetos:");
for (let i = 0; i < lojaDeTintas.length; i++) {
  console.log(lojaDeTintas[i].nome);
}

// E. Some o total de estoque de todos os objetos.
let somaEstoque1 = 0;
for (let i = 0; i < lojaDeTintas.length; i++) {
  somaEstoque1 += lojaDeTintas[i].estoque; // Pega o valor atual e soma com o próximo
}
console.log("E) Soma total do estoque:", somaEstoque1);

// F. Qual objeto possui maior estoque?
let corMaiorEstoque = lojaDeTintas[0]; 

for (let i = 1; i < lojaDeTintas.length; i++) {
  if (lojaDeTintas[i].estoque > corMaiorEstoque.estoque) {
    corMaiorEstoque = lojaDeTintas[i];
  }
}
console.log("F) Objeto com maior estoque:", corMaiorEstoque.nome, "com", corMaiorEstoque.estoque, "unidades.");

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
let somaEstoquee = 0;
for (let i = 0; i < concessionariaDeLuxo.length; i++) {
  somaEstoquee += concessionariaDeLuxo[i].estoque; // Pega o valor atual e soma com o próximo
}
console.log("E) Soma total do estoque:", somaEstoquee);

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

// Henrique Morais da Silva
// RA: 825153822
// part3.js
// 1. Criação do Array de Objetos 
let materiaisEscolares = [
    { nome: 'Caderno', preco: 25.50, estoque: 50 },
    { nome: 'Lápis HB', preco: 1.50, estoque: 200 },
    { nome: 'Borracha', preco: 2.00, estoque: 120 },
    { nome: 'Caneta Azul', preco: 3.20, estoque: 150 },
    { nome: 'Caneta Preta', preco: 3.20, estoque: 100 },
    { nome: 'Régua 30cm', preco: 5.00, estoque: 45 },
    { nome: 'Estojo', preco: 15.90, estoque: 30 },
    { nome: 'Mochila', preco: 120.00, estoque: 15 },
    { nome: 'Tesoura', preco: 7.50, estoque: 40 },
    { nome: 'Cola Bastão', preco: 4.50, estoque: 60 },
    { nome: 'Apontador', preco: 2.50, estoque: 85 },
    { nome: 'Marca-texto', preco: 6.00, estoque: 70 },
    { nome: 'Compasso', preco: 12.00, estoque: 20 },
    { nome: 'Calculadora', preco: 45.00, estoque: 10 },
    { nome: 'Pasta Suspensa', preco: 8.00, estoque: 90 },
    { nome: 'Papel A4 (resma)', preco: 28.00, estoque: 25 },
    { nome: 'Lápis de Cor (12 cores)', preco: 18.00, estoque: 55 },
    { nome: 'Canetinha Hidrocor', preco: 14.00, estoque: 40 },
    { nome: 'Grampeador', preco: 22.00, estoque: 12 },
    { nome: 'Clipes (caixa)', preco: 5.50, estoque: 110 }
];

// A. Qual é o preço do segundo objeto? (Índice 1)
console.log("Preço do segundo objeto:", materiaisEscolares[1].preco);

// B. Qual é o nome do terceiro objeto? (Índice 2)
console.log("Nome do terceiro objeto:", materiaisEscolares[2].nome);

// C. Quantos itens existem no array?
console.log("Total de itens no array:", materiaisEscolares.length);

// D. Imprima o nome de todos os objetos
console.log("Lista de nomes:");
materiaisEscolares.forEach(item => console.log(item.nome));

// E. Some o total de estoque de todos os objetos
let totalEstoque = 0;
for (let i = 0; i < materiaisEscolares.length; i++) {
    totalEstoque += materiaisEscolares[i].estoque;
}
console.log("Soma total do estoque:", totalEstoque);

// F. Qual objeto possui maior estoque?
let maiorEstoque = materiaisEscolares[0];
for (let i = 1; i < materiaisEscolares.length; i++) {
    if (materiaisEscolares[i].estoque > maiorEstoque.estoque) {
        maiorEstoque = materiaisEscolares[i];
    }
}
console.log("Objeto com maior estoque:", maiorEstoque.nome, "com", maiorEstoque.estoque, "unidades.");

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