//Thiago Viana Meira
//RA: 82424566
// part2.js
console.log("Parte 2");

// Criando o objeto com as propriedades que o professor pediu
let especierara = {
  nome: 'Death’s Head Cockroach',
  cor: 'Preta com marrom claro',
  preco: 20,
  estoque: 167
};

// Como acessar o nome do objeto?
console.log("A) Nome do objeto:", especierara.nome);

// Como acessar o preço usando colchetes?
console.log("B) Preço usando colchetes:", especierara['preco']);

// Atualize o estoque para 80.
especierara.estoque = 80;
console.log("C) Novo estoque atualizado para:", especierara.estoque);

// D. Imprima todas as propriedades no console.
console.log("D) Imprimindo todas as propriedades no console:");
console.log(especierara);

