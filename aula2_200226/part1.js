//Daniel Reis Araújo Borges
//RA: 825262646
// part1.js
// Criando o array com 20 
let cores = [
  'Vermelho', 'Azul', 'Amarelo', 'Verde', 'Laranja', 'Roxo', 'Rosa',
  'Marrom', 'Preto', 'Branco', 'Cinza', 'Ciano', 'Magenta', 'Turquesa',
  'Violeta', 'Índigo', 'Prata', 'Dourado', 'Bordô', 'Cáqui'
];

console.log("--- Respostas da Parte 1 ---");

// A. Qual elemento está na posição 0, 7, 11, 15, 18 e 20?
// Detalhe: como o array tem 20 itens (vai do índice 0 ao 19), a posição 20 vai dar undefined no começo!
console.log("A) Posição 0:", cores[0]);
console.log("A) Posição 7:", cores[7]);
console.log("A) Posição 11:", cores[11]);
console.log("A) Posição 15:", cores[15]);
console.log("A) Posição 18:", cores[18]);
console.log("A) Posição 20:", cores[20]); 

// B. Qual elemento está na penúltima e última posição?
// Usando o length pra não ter que contar na mão
console.log("B) Penúltima posição:", cores[cores.length - 2]);
console.log("B) Última posição:", cores[cores.length - 1]);

// C. Quantos elementos existem no array?
console.log("C) Total de elementos:", cores.length);

// D. Adicione um novo elemento ao final do array.
cores.push('Transparente'); // Coloquei uma intrusa aqui kkk (transparente é cor?)
console.log("D) Novo elemento adicionado! Novo tamanho:", cores.length);

// E. Imprima todos os elementos usando um for.
console.log("E) Imprimindo todos os elementos com FOR:");
for (let i = 0; i < cores.length; i++) {
  console.log(`${i}: ${cores[i]}`);
}

//vitor bispo borges
//RA: 825242612
// part1.js
// Criando o array com 20 carros (10 Porsches e 10 McLarens da nossa lista)
let carrosSuperCaros = [
  'Porsche 911 GT1 Strassenversion', 'Porsche 918 Spyder', 'Porsche Carrera GT',
  'Porsche 959', 'Porsche 911 GT2 RS', 'Porsche 935', 'Porsche 911 S/T',
  'Porsche 911 GT3 RS', 'Porsche 911 R', 'Porsche 911 Sport Classic',
  'McLaren F1', 'McLaren P1', 'McLaren W1', 'McLaren Speedtail',
  'McLaren Senna', 'McLaren Solus GT', 'McLaren Elva', 'McLaren Sabre',
  'McLaren Senna GTR', 'McLaren 765LT'
];

console.log("--- Respostas da Parte 1 ---");

// A. Qual elemento está na posição 0, 7, 11, 15, 18 e 20?
// Detalhe: como o array tem 20 itens (vai do índice 0 ao 19), a posição 20 vai dar undefined no começo!
console.log("A) Posição 0:", carrosSuperCaros[0]);
console.log("A) Posição 7:", carrosSuperCaros[7]);
console.log("A) Posição 11:", carrosSuperCaros[11]);
console.log("A) Posição 15:", carrosSuperCaros[15]);
console.log("A) Posição 18:", carrosSuperCaros[18]);
console.log("A) Posição 20:", carrosSuperCaros[20]); 

// B. Qual elemento está na penúltima e última posição?
// Usando o length pra não ter que contar na mão rs
console.log("B) Penúltima posição:", carrosSuperCaros[carrosSuperCaros.length - 2]);
console.log("B) Última posição:", carrosSuperCaros[carrosSuperCaros.length - 1]);

// C. Quantos elementos existem no array?
console.log("C) Total de elementos:", carrosSuperCaros.length);

// D. Adicione um novo elemento ao final do array.
carrosSuperCaros.push('Ferrari LaFerrari'); // Coloquei uma intrusa aqui kkk
console.log("D) Novo elemento adicionado! Novo tamanho:", carrosSuperCaros.length);

// E. Imprima todos os elementos usando um for.
console.log("E) Imprimindo todos os elementos com FOR:");
for (let i = 0; i < carrosSuperCaros.length; i++) {
  console.log(`${i}: ${carrosSuperCaros[i]}`);
}

//Thiago Viana Meira
//RA: 8224566
// part1.js
// Criando o array com 20 insetos
let especies = [
  'Louva-a-deus', 'Barata', 'Percevejo',
  'Libélula', 'Joaninha', 'Lagarta', 'Mariposa',
  'Formiga', 'Formiga de Fogo', 'Abelha',
  'Mosca', 'Borboleta', 'Besouro', 'Gafanhoto',
  'Grilo', 'Bicho-pau', 'Vespa', 'Cigarra',
  'Pulga', 'Cupim'
];

console.log("Parte 1");

// Qual elemento está na posição 0, 7, 11, 15, 18 e 20?
console.log("A) Posição 0:", especies[0]);
console.log("A) Posição 7:", especies[7]);
console.log("A) Posição 11:", especies[11]);
console.log("A) Posição 15:", especies[15]);
console.log("A) Posição 18:", especies[18]);
console.log("A) Posição 20:", especies[20]); 

// Qual elemento está na penúltima e última posição?
console.log("B) Penúltima posição:", especies[especies.length - 2]);
console.log("B) Última posição:", especies[especies.length - 1]);

// Quantos elementos existem no array?
console.log("C) Elementos Totais:", especies.length);

// Adicione um novo elemento ao final do array.
especies.push('Aranha Armadeira');
console.log("D) Elemento adicionado, novo tamanho:", especies.length);

// Imprima todos os elementos usando um for.
console.log("E) Imprimindo");
for (let i = 0; i < especies.length; i++) {
  console.log(`${i}: ${especies[i]}`);
}

// Henrique Morais da Silva
// RA: 825153822
// part1.js
// Criando um array com 20 elementos (Materiais de Escritório)
let itensEscritorio = [
    'Caneta', 'Lápis', 'Borracha', 'Caderno', 'Régua', 
    'Grampeador', 'Clipes', 'Tesoura', 'Cola', 'Estojo',
    'Mochila', 'Agenda', 'Calculadora', 'Pasta', 'Papel A4',
    'Apontador', 'Corretivo', 'Marca-texto', 'Compasso', 'Esquadro'
];

// A. Qual elemento está na posição 0, 7, 11, 15, 18 e 20?
console.log("Posição 0:", itensEscritorio[0]);
console.log("Posição 7:", itensEscritorio[7]);
console.log("Posição 11:", itensEscritorio[11]);
console.log("Posição 15:", itensEscritorio[15]);
console.log("Posição 18:", itensEscritorio[18]);
console.log("Posição 20:", itensEscritorio[20]); 

// B. Qual elemento está na penúltima e última posição?
console.log("Penúltima:", itensEscritorio[itensEscritorio.length - 2]);
console.log("Última:", itensEscritorio[itensEscritorio.length - 1]);

// C. Quantos elementos existem no array?
console.log("Total de elementos:", itensEscritorio.length);

// D. Adicione um novo elemento ao final do array.
itensEscritorio.push('Fita Adesiva');

// E. Imprima todos os elementos usando um for.
for (let i = 0; i < itensEscritorio.length; i++) {
    console.log(`Elemento ${i}: ${itensEscritorio[i]}`);
}
