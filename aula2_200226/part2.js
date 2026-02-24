//Thiago Viana Meira
//RA: 82424566
// part2.js
console.log("Parte 2");

// Criando o objeto com as propriedades que o professor pediu
let filmedeação = {
  nome: 'Superman',
  cor: 'azul e vermelho',
  preco: 20,
  estoque: 167,
};

// Como acessar o nome do objeto?
console.log("A) Nome do objeto:", filmedeação.nome);

// Como acessar o preço usando colchetes?
console.log("B) Preço usando colchetes:", filmedeação['preco']);

// Atualize o estoque para 80.
filmedeação.estoque = 80;
console.log("C) Novo estoque atualizado para:", filmedeação.estoque);

// D. Imprima todas as propriedades no console.
console.log("D) Imprimindo todas as propriedades no console:");
console.log(filmedeação);
