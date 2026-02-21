// Henrique Morais da Silva
// RA: 825153822
// part2.js

// Criando o objeto 
let produtoEscolar = {
    nome: 'Notebook Acer',
    cor: 'Preto',
    preco: 3500.00,
    estoque: 10
};

// A. Como acessar o nome do objeto?
console.log("Nome do produto:", produtoEscolar.nome);

// B. Como acessar o preço usando colchetes?
console.log("Preço (usando colchetes):", produtoEscolar['preco']);

// C. Atualize o estoque para 80.
produtoEscolar.estoque = 80;
console.log("Novo estoque:", produtoEscolar.estoque);

// D. Imprima todas as propriedades no console.
console.log("Dados completos do objeto:", produtoEscolar);
