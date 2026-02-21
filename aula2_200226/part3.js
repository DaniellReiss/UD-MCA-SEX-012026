// Henrique Morais da Silva
// RA: 825153822
// part3.js
// 1. Criação do Array de Objetos 
let materiaisEscolares = [
    { nome: 'Caderno', preco: 25.50, estoque: 50 },
    { nome: 'Lápis HB', preco: 1.50, estoque: 200 },
    { nome: 'Borracha', preco: 2.00, estoque: 120 },
    { nome: 'Caneta Azul', preco: 3.20, estoque: 150 },
    { nome: 'Caneta Preta', preco: 3.20, estoque: 100 },
    { nome: 'Régua 30cm', preco: 5.00, estoque: 45 },
    { nome: 'Estojo', preco: 15.90, estoque: 30 },
    { nome: 'Mochila', preco: 120.00, estoque: 15 },
    { nome: 'Tesoura', preco: 7.50, estoque: 40 },
    { nome: 'Cola Bastão', preco: 4.50, estoque: 60 },
    { nome: 'Apontador', preco: 2.50, estoque: 85 },
    { nome: 'Marca-texto', preco: 6.00, estoque: 70 },
    { nome: 'Compasso', preco: 12.00, estoque: 20 },
    { nome: 'Calculadora', preco: 45.00, estoque: 10 },
    { nome: 'Pasta Suspensa', preco: 8.00, estoque: 90 },
    { nome: 'Papel A4 (resma)', preco: 28.00, estoque: 25 },
    { nome: 'Lápis de Cor (12 cores)', preco: 18.00, estoque: 55 },
    { nome: 'Canetinha Hidrocor', preco: 14.00, estoque: 40 },
    { nome: 'Grampeador', preco: 22.00, estoque: 12 },
    { nome: 'Clipes (caixa)', preco: 5.50, estoque: 110 }
];

// A. Qual é o preço do segundo objeto? (Índice 1)
console.log("Preço do segundo objeto:", materiaisEscolares[1].preco);

// B. Qual é o nome do terceiro objeto? (Índice 2)
console.log("Nome do terceiro objeto:", materiaisEscolares[2].nome);

// C. Quantos itens existem no array?
console.log("Total de itens no array:", materiaisEscolares.length);

// D. Imprima o nome de todos os objetos
console.log("Lista de nomes:");
materiaisEscolares.forEach(item => console.log(item.nome));

// E. Some o total de estoque de todos os objetos
let totalEstoque = 0;
for (let i = 0; i < materiaisEscolares.length; i++) {
    totalEstoque += materiaisEscolares[i].estoque;
}
console.log("Soma total do estoque:", totalEstoque);

// F. Qual objeto possui maior estoque?
let maiorEstoque = materiaisEscolares[0];
for (let i = 1; i < materiaisEscolares.length; i++) {
    if (materiaisEscolares[i].estoque > maiorEstoque.estoque) {
        maiorEstoque = materiaisEscolares[i];
    }
}
console.log("Objeto com maior estoque:", maiorEstoque.nome, "com", maiorEstoque.estoque, "unidades.");

