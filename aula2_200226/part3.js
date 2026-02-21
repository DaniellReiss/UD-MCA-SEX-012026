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
