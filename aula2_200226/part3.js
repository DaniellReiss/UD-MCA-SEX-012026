// Luan Bezerra Silva
// RA: 825154264
// part3.js
// 1. Criação do Array de Objetos 
let Fantasias = [
  { nome: 'Homem aranha', preco: 70.00, estoque: 50 },
  { nome: 'Superman', preco: 80.00, estoque: 200 },
  { nome: 'Besouro azul', preco: 60.00, estoque: 120 },
  { nome: 'Gladiador Dourado', preco: 105.00, estoque: 150 },
  { nome: 'Batman', preco: 80.00, estoque: 100 },
  { nome: 'Laterna Verde', preco: 89.00, estoque: 45 },
  { nome: 'Flash', preco: 99.00, estoque: 30 },
  { nome: 'Homem de Ferro', preco: 120.00, estoque: 15 },
  { nome: 'Capitão América', preco: 110.00, estoque: 40 },
  { nome: 'Senhor elastico', preco: 90.00, estoque: 60 },
  { nome: 'Spawn', preco: 150.00, estoque: 85 },
  { nome: 'Exterminador do futuro', preco: 57.00, estoque: 70 },
  { nome: 'Rambo', preco: 62.00, estoque: 20 },
  { nome: 'He-man', preco: 50.50, estoque: 10 },
  { nome: 'Invencivel', preco: 85.00, estoque: 90 },
  { nome: 'Infamous', preco: 40.00, estoque: 25 },
  { nome: 'Robin', preco: 55.00, estoque: 55 },
  { nome: 'Gambit', preco: 92.50, estoque: 40 },
  { nome: 'Noturno', preco: 75.50, estoque: 12 },
  { nome: 'Loki', preco: 120.00, estoque: 110 }
];

// A. Qual é o preço do segundo objeto? (Índice 1)
console.log("Preço do segundo objeto:", Fantasias[1].preco);

// B. Qual é o nome do terceiro objeto? (Índice 2)
console.log("Nome do terceiro objeto:", Fantasias[2].nome);

// C. Quantos itens existem no array?
console.log("Total de itens no array:", Fantasias.length);

// D. Imprima o nome de todos os objetos
console.log("Lista de nomes:");
Fantasias.forEach(item => console.log(item.nome));

// E. Some o total de estoque de todos os objetos
let totalEstoque = 0;
for (let i = 0; i < Fantasias.length; i++) {
  totalEstoque += Fantasias[i].estoque;
}
console.log("Soma total do estoque:", totalEstoque);

// F. Qual objeto possui maior estoque?
let maiorEstoque = Fantasias[0];
for (let i = 1; i < Fantasias.length; i++) {
  if (Fantasias[i].estoque > maiorEstoque.estoque) {
      maiorEstoque = Fantasias[i];
  }
}
console.log("Objeto com maior estoque:", maiorEstoque.nome, "com", maiorEstoque.estoque, "unidades.");