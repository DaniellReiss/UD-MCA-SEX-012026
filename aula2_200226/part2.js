//Cauê Lemos de Carvalho
//RA: 825148851
// part2.js
console.log("Parte 2");

// Criando o objeto com as propriedades que o professor pediu
let timepaulista = {
  nome: 'Corinthians',
  cor: 'Preto e Branco',
  preco: 200,
  estoque: 1
};

// Como acessar o nome do objeto?
console.log("A) Nome do objeto:", timepaulista.nome);

// Como acessar o preço usando colchetes?
console.log("B) Preço usando colchetes:", timepaulista['preco']);

// Atualize o estoque para 80.
timepaulista.estoque = 80;
console.log("C) Novo estoque atualizado para:", timepaulista.estoque);

// D. Imprima todas as propriedades no console.
console.log("D) Imprimindo todas as propriedades no console:");
console.log(timepaulista);

