// Cauê Lemos de Carvalho
// RA: 825148851
// part3.js
// 1. Criação do Array de Objetos 
let timesnaseriea = [
    { nome: 'Santos', preco: 180, estoque: 1 },
    { nome: 'São Paulo', preco: 200, estoque: 1 },
    { nome: 'Palmeiras', preco: 250, estoque: 1 },
    { nome: 'Flamengo', preco: 300, estoque: 1 },
    { nome: 'Vasco', preco: 150, estoque: 1 },
    { nome: 'Botafogo', preco: 200, estoque: 1 },
    { nome: 'Vitória', preco: 180, estoque: 1 },
    { nome: 'Internacional', preco: 120, estoque: 1 },
    { nome: 'Grêmio', preco: 180, estoque: 1 },
    { nome: 'Bahia', preco: 200, estoque: 1 },

];

// A. Qual é o preço do segundo objeto? (Índice 1)
console.log("Preço do segundo objeto:", timesnaseriea[1].preco);

// B. Qual é o nome do terceiro objeto? (Índice 2)
console.log("Nome do terceiro objeto:", timesnaseriea[2].nome);

// C. Quantos itens existem no array?
console.log("Total de itens no array:", timesnaseriea.length);

// D. Imprima o nome de todos os objetos
console.log("Lista de nomes:");
timesnaseriea.forEach(item => console.log(item.nome));

// E. Some o total de estoque de todos os objetos
let totalEstoque = 0;
for (let i = 0; i < timesnaseriea.length; i++) {
    totalEstoque += timesnaseriea[i].estoque;
}
console.log("Soma total do estoque:", totalEstoque);

// F. Qual objeto possui maior estoque?
let maiorEstoque = timesnaseriea[0];
for (let i = 1; i < timesnaseriea.length; i++) {
    if (timesnaseriea[i].estoque > maiorEstoque.estoque) {
        maiorEstoque = timesnaseriea[i];
    }
}
console.log("Objeto com maior estoque:", maiorEstoque.nome, "com", maiorEstoque.estoque, "unidades.");
