//Vitor Bispo Borges
//RA: 825242612
// part2.js
console.log("--- Respostas da Parte 2 ---");

// Criando o objeto com as propriedades que o professor pediu
let meuCarroDosSonhos = {
  nome: 'McLaren F1',
  cor: 'Prata',
  preco: 100000000, // Cem milhões, sonhar é de graça rs
  estoque: 2
};

// A. Como acessar o nome do objeto?
console.log("A) Nome do objeto:", meuCarroDosSonhos.nome);

// B. Como acessar o preço usando colchetes?
// Essa eu demorei a lembrar na aula, tem que por as aspas!
console.log("B) Preço usando colchetes:", meuCarroDosSonhos['preco']);

// C. Atualize o estoque para 80.
meuCarroDosSonhos.estoque = 80;
console.log("C) Novo estoque atualizado para:", meuCarroDosSonhos.estoque);

// D. Imprima todas as propriedades no console.
console.log("D) Imprimindo todas as propriedades no console:");
console.log(meuCarroDosSonhos);
