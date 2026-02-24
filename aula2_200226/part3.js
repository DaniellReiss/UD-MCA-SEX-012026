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
let somaEstoque = 0;
for (let i = 0; i < lojaDeTintas.length; i++) {
  somaEstoque += lojaDeTintas[i].estoque; // Pega o valor atual e soma com o próximo
}
console.log("E) Soma total do estoque:", somaEstoque);

// F. Qual objeto possui maior estoque?
let corMaiorEstoque = lojaDeTintas[0]; 

for (let i = 1; i < lojaDeTintas.length; i++) {
  if (lojaDeTintas[i].estoque > corMaiorEstoque.estoque) {
    corMaiorEstoque = lojaDeTintas[i];
  }
}
console.log("F) Objeto com maior estoque:", corMaiorEstoque.nome, "com", corMaiorEstoque.estoque, "unidades.");