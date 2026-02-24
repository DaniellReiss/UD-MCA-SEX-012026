//Daniel Reis Araújo Borges
//RA: 825262646
// part2.js
console.log("--- Respostas da Parte 2 ---");

// Criando o objeto com as propriedades que o professor pediu
let minhaCorPerfeita = {
  nome: 'Roxo Escuro',
  tipo: 'Acrílica Premium',
  preco: 500, 
  estoque: 2
};

// A. Como acessar o nome do objeto?
console.log("A) Nome do objeto:", minhaCorPerfeita.nome);

// B. Como acessar o preço usando colchetes?
console.log("B) Preço usando colchetes:", minhaCorPerfeita['preco']);

// C. Atualize o estoque para 80.
minhaCorPerfeita.estoque = 80;
console.log("C) Novo estoque atualizado para:", minhaCorPerfeita.estoque);

// D. Imprima todas as propriedades no console.
console.log("D) Imprimindo todas as propriedades no console:");
console.log(minhaCorPerfeita);